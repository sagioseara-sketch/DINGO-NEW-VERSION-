// src/firebase/roomService.js
//
// REMATCH FIX:
// Old approach: requestRematch() — whoever called second (after both flags were set)
// created the new room. If p2 called second, p2 would create the room using their
// data as p1 of the new room, then both players navigated with wrong roles.
//
// New approach — clean role separation:
//   markRematch(roomId, role) — just writes the flag. That's it.
//   The LISTENER in MultiGameScreen drives everything:
//     • When both flags are set and no newRoomId exists AND my role === 'p1':
//       p1 calls createRematchRoom() which creates the room and writes newRoomId.
//     • When newRoomId appears in Firebase, BOTH players navigate via listenRoom.
//       P1 navigates as 'p1', p2 navigates as 'p2'. Roles never swap.
//
// This eliminates the race condition entirely because only one player (p1) ever
// creates the room. P2 always waits for the newRoomId to appear.

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
      status: 'waiting', turn: 'p1',
      p1Board, p2Board: [],
      calledNumbers: [],
      p1Lines: 0, p2Lines: 0,
      p1Chances: 5, p2Chances: 5,
      winner: null, tie: false,
      p1Exited: false, p2Exited: false,
      turnStartedAt: Date.now(), createdAt: Date.now(),
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
    'gameState/calledNumbers':    calledNumbers,
    'gameState/p1Lines':          p1Lines,
    'gameState/p2Lines':          p2Lines,
    [`gameState/${role}Chances`]: newChances,
    'gameState/turn':             role === 'p1' ? 'p2' : 'p1',
    'gameState/turnStartedAt':   Date.now(),
  });
}

function scheduleRoomCleanup(roomId) {
  setTimeout(() => remove(ref(rtdb, `rooms/${roomId}`)).catch(() => {}), 3 * 60 * 1000);
}

export async function setWinner(roomId, winnerRole) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), {
    winner: winnerRole, status: 'finished', tie: false,
  });
  scheduleRoomCleanup(roomId);
}

export async function setTie(roomId) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), {
    winner: null, tie: true, status: 'finished',
  });
  scheduleRoomCleanup(roomId);
}

export async function sendChatMessage(roomId, msg) {
  await push(ref(rtdb, `rooms/${roomId}/chat`), { ...msg, ts: Date.now() });
}

export async function setPlayerExited(roomId, role) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), { [`${role}Exited`]: true });
}

export async function cleanupRoom(roomId) {
  try { await remove(ref(rtdb, `rooms/${roomId}`)); } catch (_) {}
}

// ── REMATCH — clean two-step API ─────────────────────────────────────────────

// Step 1: Mark that I want a rematch. Returns nothing — navigation is driven
// by listenRoom in MultiGameScreen, not by this function.
export async function markRematch(roomId, role) {
  await update(ref(rtdb, `rooms/${roomId}/rematch`), { [role]: true });
}

// Step 2: Called by p1's listenRoom handler when both flags are set.
// Creates the new room and writes newRoomId so p2's listenRoom also fires.
export async function createRematchRoom(roomId, p1Data, p1Board) {
  const snap    = await get(ref(rtdb, `rooms/${roomId}/rematch`));
  const rematch = snap.val() || {};
  // Guard: don't create if already created (listener can fire multiple times)
  if (rematch.newRoomId) return rematch.newRoomId;

  const newId = genRoomId();
  await createRoom(newId, p1Data, p1Board);
  await update(ref(rtdb, `rooms/${roomId}/rematch`), { newRoomId: newId });
  return newId;
}

// ── MATCH INVITE SYSTEM ───────────────────────────────────────────────────────

export async function sendMatchInvite(fromUid, fromName, fromAvatar, toUid, p1Board) {
  const roomId  = genRoomId();
  await createRoom(roomId, { uid: fromUid, name: fromName, avatar: fromAvatar || '🎯' }, p1Board);
  const newRef  = await push(ref(rtdb, `invites/${toUid}`), {
    from: fromUid, fromName: fromName || 'Player', fromAvatar: fromAvatar || '🎯',
    roomId, ts: Date.now(), status: 'pending',
  });
  return { roomId, inviteId: newRef.key };
}

export function listenMatchInvites(uid, callback) {
  const r = ref(rtdb, `invites/${uid}`);
  onValue(r, snap => {
    if (!snap.exists()) { callback([]); return; }
    const invites = Object.entries(snap.val())
      .map(([id, v]) => ({ id, ...v }))
      .filter(i => i.status === 'pending')
      .sort((a, b) => b.ts - a.ts);
    callback(invites);
  }, () => callback([]));
  return () => off(r);
}

export async function acceptMatchInvite(toUid, inviteId, p2Data, p2Board) {
  const snap = await get(ref(rtdb, `invites/${toUid}/${inviteId}`));
  if (!snap.exists()) throw new Error('Invite no longer valid');
  const invite = snap.val();
  await remove(ref(rtdb, `invites/${toUid}/${inviteId}`));
  await joinRoom(invite.roomId, p2Data, p2Board);
  return invite.roomId;
}

export async function declineMatchInvite(toUid, inviteId) {
  try { await remove(ref(rtdb, `invites/${toUid}/${inviteId}`)); } catch (_) {}
}
