// src/firebase/roomService.js
import { ref, set, get, update, push, onValue, off, remove } from 'firebase/database';
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
    // newRoomId: written by p1 when both players click rematch
    // p2 watches for this field to navigate to the new room
    rematch: { p1: false, p2: false, newRoomId: null },
  });
}

export async function joinRoom(roomId, p2Data, p2Board) {
  const snap = await get(ref(rtdb, `rooms/${roomId}`));
  if (!snap.exists()) throw new Error('Room not found');
  const room = snap.val();
  if (room.players?.p2) throw new Error('Room is full');
  await update(ref(rtdb, `rooms/${roomId}`), {
    'players/p2': { ...p2Data, role: 'p2' },
    'gameState/p2Board': p2Board,
    'gameState/status': 'playing',
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
  const nextTurn = role === 'p1' ? 'p2' : 'p1';
  const updates = {
    'gameState/calledNumbers': calledNumbers,
    'gameState/p1Lines': p1Lines,
    'gameState/p2Lines': p2Lines,
  };
  if (!keepTurn) {
    updates['gameState/turn'] = nextTurn;
    updates['gameState/turnStartedAt'] = Date.now();
  }
  await update(ref(rtdb, `rooms/${roomId}`), updates);
}

export async function missedTurn(roomId, role, calledNumbers, p1Lines, p2Lines, newChances) {
  const nextTurn = role === 'p1' ? 'p2' : 'p1';
  await update(ref(rtdb, `rooms/${roomId}`), {
    'gameState/calledNumbers': calledNumbers,
    'gameState/p1Lines': p1Lines,
    'gameState/p2Lines': p2Lines,
    [`gameState/${role}Chances`]: newChances,
    'gameState/turn': nextTurn,
    'gameState/turnStartedAt': Date.now(),
  });
}

export async function setWinner(roomId, winnerRole) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), {
    winner: winnerRole, status: 'finished', tie: false,
  });
}

export async function setTie(roomId) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), {
    winner: null, tie: true, status: 'finished',
  });
}

export async function sendChatMessage(roomId, msg) {
  await push(ref(rtdb, `rooms/${roomId}/chat`), { ...msg, ts: Date.now() });
}

export async function setPlayerExited(roomId, role) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), { [`${role}Exited`]: true });
}

// ── REMATCH FIX ────────────────────────────────────────────────────
// Old approach: both players navigated to /room/create independently → two separate rooms.
// New approach:
//   1. Each player calls requestRematch() which sets their flag to true.
//   2. If BOTH flags are now true AND no newRoomId exists yet,
//      THIS player creates the new room and writes newRoomId to Firebase.
//   3. The opponent's listenRoom fires, sees newRoomId, and navigates to it as p2.
//   4. The creator navigates as p1.
// This guarantees both players end up in the exact same new room.
export async function requestRematch(roomId, role, myBoard, myData) {
  // Mark my flag
  await update(ref(rtdb, `rooms/${roomId}/rematch`), { [role]: true });

  // Check if both flags are now true and no room was created yet
  const snap = await get(ref(rtdb, `rooms/${roomId}/rematch`));
  const rematch = snap.val() || {};
  if (!rematch.p1 || !rematch.p2 || rematch.newRoomId) return null;

  // I'm the first to see both flags — create the new room
  const newId = genRoomId();
  await createRoom(newId, myData, myBoard);
  // Write newRoomId so the opponent's listener picks it up
  await update(ref(rtdb, `rooms/${roomId}/rematch`), { newRoomId: newId });
  return newId; // null means "wait for opponent to create it"
}

export async function cleanupRoom(roomId) {
  try { await remove(ref(rtdb, `rooms/${roomId}`)); } catch (_) {}
}
