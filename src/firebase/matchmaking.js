// src/firebase/matchmaking.js
import { ref, set, remove, onValue, onDisconnect, update, serverTimestamp } from 'firebase/database';
import { rtdb } from './config';

// ── Online presence with heartbeat ───────────────────────────────
// We write the presence entry, set up auto-cleanup on disconnect,
// AND send a heartbeat every 25 seconds so the entry stays fresh
// even on mobile where WebSocket disconnects are silent.
export function goOnline(uid, name, avatar) {
  const r = ref(rtdb, `online/${uid}`);
  const data = { uid, name, avatar: avatar || '🎯', ts: Date.now() };

  // Write immediately (await in calling code via the returned cleanup)
  set(r, data).catch(() => {});
  // Auto-remove when the browser tab closes / network drops
  onDisconnect(r).remove();

  // Heartbeat: re-write every 25s to keep the entry alive on mobile
  const hb = setInterval(() => {
    set(r, { ...data, ts: Date.now() }).catch(() => {});
  }, 25_000);

  return () => {
    clearInterval(hb);
    remove(r).catch(() => {});
  };
}

// Real-time count of online players — fires every time anyone joins/leaves
export function listenOnlineCount(callback) {
  const r = ref(rtdb, 'online');
  const unsub = onValue(r, snap => {
    callback(snap.exists() ? Object.keys(snap.val() || {}).length : 0);
  }, () => callback(0)); // error handler — show 0 rather than crashing
  return unsub;
}

// ── Matchmaking queue ─────────────────────────────────────────────
function makeRoomId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function joinQueue(uid, name, avatar, board) {
  await set(ref(rtdb, `queue/${uid}`), {
    uid, name, avatar: avatar || '🎯',
    board, timestamp: Date.now(),
    roomId: null, role: null,
  });
}

export function leaveQueue(uid) {
  remove(ref(rtdb, `queue/${uid}`)).catch(() => {});
}

export function listenForMatch(uid, name, avatar, board, onMatched) {
  const qRef = ref(rtdb, 'queue');

  const unsub = onValue(qRef, async snap => {
    const queue = snap.val();
    if (!queue || !queue[uid]) return;

    // Already matched — my entry has a roomId written by the host
    if (queue[uid].roomId) {
      unsub();
      leaveQueue(uid);
      onMatched(queue[uid].roomId, queue[uid].role || 'p2');
      return;
    }

    // Look for another waiting unmatched player
    const others = Object.entries(queue)
      .filter(([id, d]) => id !== uid && !d.roomId)
      .sort((a, b) => a[1].timestamp - b[1].timestamp);

    if (others.length === 0) return;

    const [oppUid, oppData] = others[0];
    const myTs = queue[uid]?.timestamp || 0;

    // Only the player who joined FIRST creates the room — prevents race
    if (myTs > oppData.timestamp) return;

    const roomId = makeRoomId();
    try {
      await set(ref(rtdb, `rooms/${roomId}`), {
        gameState: {
          status: 'playing', turn: 'p1',
          p1Board: board, p2Board: oppData.board || [],
          calledNumbers: [],
          p1Lines: 0, p2Lines: 0,
          p1Chances: 5, p2Chances: 5,
          winner: null, tie: false,
          p1Exited: false, p2Exited: false,
          turnStartedAt: Date.now(), createdAt: Date.now(),
        },
        players: {
          p1: { uid, name, avatar: avatar || '🎯', role: 'p1' },
          p2: { uid: oppUid, name: oppData.name, avatar: oppData.avatar || '🎯', role: 'p2' },
        },
        rematch: { p1: false, p2: false, newRoomId: null },
      });
      await update(ref(rtdb, `queue/${uid}`),    { roomId, role: 'p1' });
      await update(ref(rtdb, `queue/${oppUid}`), { roomId, role: 'p2' });
      unsub();
      leaveQueue(uid);
      onMatched(roomId, 'p1');
    } catch (e) {
      console.error('Matchmaking error:', e);
    }
  });

  return unsub;
}
