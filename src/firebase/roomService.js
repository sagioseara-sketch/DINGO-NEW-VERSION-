// src/firebase/roomService.js
//
// CHANGES IN THIS VERSION:
//
// AUTO-CLEANUP FINISHED ROOMS:
//   setWinner() and setTie() now schedule a 3-minute delayed room deletion.
//   This runs server-side via a client setTimeout. Both p1 and p2 schedule the
//   deletion independently — Firebase's remove() is idempotent (the second call
//   on an already-deleted node is a no-op). 3 minutes gives the win overlay
//   time to be displayed, rematch to be accepted, and stats to be saved.
//
// MATCH INVITE SYSTEM:
//   Friends can now challenge each other directly. The challenger:
//     1. Calls sendMatchInvite() which creates a room and writes the invite to
//        RTDB under invites/{toUid}/{inviteId}.
//     2. Navigates to the game room as p1 in 'waiting' status.
//   The invited player:
//     1. Sees the invite in HomeScreen's notification strip.
//     2. Calls acceptMatchInvite() which joins the room, removes the invite,
//        and navigates to the game as p2.
//     3. MultiGameScreen transitions from 'waiting' → 'playing' automatically.

import {
  ref, set, get, update, push, onValue, off, remove,
} from 'firebase/database';
import { rtdb } from './config';

export function genRoomId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function createRoom(roomId, p1Data, p1Board) {
  await set(ref(rtdb, `rooms/${roomId}`), {
    gameState: {
      status:        'waiting',
      turn:          'p1',
      p1Board,
      p2Board:       [],
      calledNumbers: [],
      p1Lines:       0,
      p2Lines:       0,
      p1Chances:     5,
      p2Chances:     5,
      winner:        null,
      tie:           false,
      p1Exited:      false,
      p2Exited:      false,
      turnStartedAt: Date.now(),
      createdAt:     Date.now(),
    },
    players: { p1: { ...p1Data, role: 'p1' } },
    rematch: { p1: false, p2: false, newRoomId: null },
  });
}

export async function joinRoom(roomId, p2Data, p2Board) {
  const snap = await get(ref(rtdb, `rooms/${roomId}`));
  if (!snap.exists()) throw new Error('Room not found');
  const room = snap.val();
  if (room.players?.p2) throw new Error('Room is full');
  await update(ref(rtdb, `rooms/${roomId}`), {
    'players/p2':             { ...p2Data, role: 'p2' },
    'gameState/p2Board':      p2Board,
    'gameState/status':       'playing',
    'gameState/turnStartedAt': Date.now(),
  });
  return room;
}

export function listenRoom(roomId, callback) {
  const r = ref(rtdb, `rooms/${roomId}`);
  onValue(r, snap => callback(snap.val()));
  return () => off(r);
}

export async function callNumber(roomId, role, calledNumbers, p1Lines, p2Lines, keepTurn = false) {
  const updates = {
    'gameState/calledNumbers': calledNumbers,
    'gameState/p1Lines':       p1Lines,
    'gameState/p2Lines':       p2Lines,
  };
  if (!keepTurn) {
    updates['gameState/turn']           = role === 'p1' ? 'p2' : 'p1';
    updates['gameState/turnStartedAt'] = Date.now();
  }
  await update(ref(rtdb, `rooms/${roomId}`), updates);
}

export async function missedTurn(roomId, role, calledNumbers, p1Lines, p2Lines, newChances) {
  await update(ref(rtdb, `rooms/${roomId}`), {
    'gameState/calledNumbers':           calledNumbers,
    'gameState/p1Lines':                 p1Lines,
    'gameState/p2Lines':                 p2Lines,
    [`gameState/${role}Chances`]:        newChances,
    'gameState/turn':                    role === 'p1' ? 'p2' : 'p1',
    'gameState/turnStartedAt':           Date.now(),
  });
}

// ── WIN / TIE — schedule auto-cleanup ────────────────────────────────────────
// After the game ends we give both clients 3 minutes to read the result,
// save stats, and handle rematch before the room node is removed.
function scheduleRoomCleanup(roomId) {
  setTimeout(() => {
    remove(ref(rtdb, `rooms/${roomId}`)).catch(() => {});
  }, 3 * 60 * 1000); // 3 minutes
}

export async function setWinner(roomId, winnerRole) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), {
    winner: winnerRole,
    status: 'finished',
    tie:    false,
  });
  scheduleRoomCleanup(roomId);
}

export async function setTie(roomId) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), {
    winner: null,
    tie:    true,
    status: 'finished',
  });
  scheduleRoomCleanup(roomId);
}

export async function sendChatMessage(roomId, msg) {
  await push(ref(rtdb, `rooms/${roomId}/chat`), { ...msg, ts: Date.now() });
}

export async function setPlayerExited(roomId, role) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), {
    [`${role}Exited`]: true,
  });
}

// cleanupRoom: immediate manual removal (used when p1 cancels before game starts)
export async function cleanupRoom(roomId) {
  try { await remove(ref(rtdb, `rooms/${roomId}`)); } catch (_) {}
}

// ── REMATCH ───────────────────────────────────────────────────────────────────
// Coordinator pattern: whoever calls requestRematch() first sets their flag.
// When BOTH flags are true and no newRoomId exists yet, the caller who sees
// both flags creates the new room and writes its id so the other player's
// listenRoom fires and navigates there.
export async function requestRematch(roomId, role, myBoard, myData) {
  await update(ref(rtdb, `rooms/${roomId}/rematch`), { [role]: true });
  const snap    = await get(ref(rtdb, `rooms/${roomId}/rematch`));
  const rematch = snap.val() || {};
  if (!rematch.p1 || !rematch.p2 || rematch.newRoomId) return null;

  const newId = genRoomId();
  await createRoom(newId, myData, myBoard);
  await update(ref(rtdb, `rooms/${roomId}/rematch`), { newRoomId: newId });
  return newId;
}

// ── MATCH INVITE SYSTEM ───────────────────────────────────────────────────────
// Stored in RTDB under invites/{toUid}/{autoId}
// Database rules: anyone (auth) can write to invites/{toUid}, only the
// recipient can read their own inbox.

// Challenge a friend: creates a waiting room then sends the invite.
// Returns { roomId, inviteId } so the caller can navigate to the room as p1.
export async function sendMatchInvite(fromUid, fromName, fromAvatar, toUid, p1Board) {
  const roomId = genRoomId();
  await createRoom(roomId, { uid: fromUid, name: fromName, avatar: fromAvatar || '🎯' }, p1Board);

  const inviteRef = ref(rtdb, `invites/${toUid}`);
  const newRef    = await push(inviteRef, {
    from:       fromUid,
    fromName:   fromName   || 'Player',
    fromAvatar: fromAvatar || '🎯',
    roomId,
    ts:     Date.now(),
    status: 'pending',
  });
  return { roomId, inviteId: newRef.key };
}

// Listen for incoming match invites for a given user
export function listenMatchInvites(uid, callback) {
  const r = ref(rtdb, `invites/${uid}`);
  onValue(
    r,
    snap => {
      if (!snap.exists()) { callback([]); return; }
      const data    = snap.val();
      const invites = Object.entries(data)
        .map(([id, v]) => ({ id, ...v }))
        .filter(i => i.status === 'pending')
        .sort((a, b) => b.ts - a.ts);
      callback(invites);
    },
    () => callback([]),
  );
  return () => off(r);
}

// Accept an invite: join the room as p2, remove the invite entry
export async function acceptMatchInvite(toUid, inviteId, p2Data, p2Board) {
  const snap = await get(ref(rtdb, `invites/${toUid}/${inviteId}`));
  if (!snap.exists()) throw new Error('Invite no longer valid');
  const invite = snap.val();

  // Remove invite first to prevent double-accepts
  await remove(ref(rtdb, `invites/${toUid}/${inviteId}`));

  // Join the waiting room
  await joinRoom(invite.roomId, p2Data, p2Board);
  return invite.roomId;
}

// Decline: just remove the invite entry
export async function declineMatchInvite(toUid, inviteId) {
  try { await remove(ref(rtdb, `invites/${toUid}/${inviteId}`)); } catch (_) {}
}

// Remove all pending invites from a sender to a recipient (used when cancelling a challenge)
export async function cancelMatchInvite(toUid, inviteId) {
  try { await remove(ref(rtdb, `invites/${toUid}/${inviteId}`)); } catch (_) {}
}
