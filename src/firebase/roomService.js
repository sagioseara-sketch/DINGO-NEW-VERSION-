// src/firebase/roomService.js
import {
  ref, set, get, update, push,
  onValue, off, remove
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
      p1Selected: [], p2Selected: [],
      p1Lines: 0, p2Lines: 0,
      winner: null,
      p1Exited: false, p2Exited: false,
      turnStartedAt: Date.now(),
      createdAt: Date.now()
    },
    players: { p1: { ...p1Data, role: 'p1' } },
    rematch: { p1: false, p2: false }
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
    'gameState/turnStartedAt': Date.now()
  });
  return room;
}

export function listenRoom(roomId, callback) {
  const r = ref(rtdb, `rooms/${roomId}`);
  onValue(r, snap => callback(snap.val()));
  return () => off(r);
}

// keepTurn = true when using Double lifeline (first of 2 picks)
export async function callNumber(roomId, role, num, newSelected, lines, keepTurn = false) {
  const nextTurn = role === 'p1' ? 'p2' : 'p1';
  const updates = {
    [`gameState/${role}Selected`]: newSelected,
    [`gameState/${role}Lines`]: lines,
  };
  if (!keepTurn) {
    updates['gameState/turn'] = nextTurn;
    updates['gameState/turnStartedAt'] = Date.now();
  }
  await update(ref(rtdb, `rooms/${roomId}`), updates);
}

export async function setWinner(roomId, winnerRole) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), {
    winner: winnerRole, status: 'finished'
  });
}

export async function sendChatMessage(roomId, msg) {
  await push(ref(rtdb, `rooms/${roomId}/chat`), { ...msg, ts: Date.now() });
}

export async function setPlayerExited(roomId, role) {
  await update(ref(rtdb, `rooms/${roomId}/gameState`), { [`${role}Exited`]: true });
}

export async function requestRematch(roomId, role) {
  await update(ref(rtdb, `rooms/${roomId}/rematch`), { [role]: true });
}

export async function cleanupRoom(roomId) {
  try { await remove(ref(rtdb, `rooms/${roomId}`)); } catch (_) {}
}
