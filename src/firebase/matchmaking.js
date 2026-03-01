// src/firebase/matchmaking.js
import { ref, set, remove, onValue, onDisconnect, update, get } from 'firebase/database';
import { rtdb } from './config';

export function goOnline(uid, name, avatar) {
  const r = ref(rtdb, `online/${uid}`);
  set(r, { uid, name, avatar: avatar || '🎯', ts: Date.now() });
  onDisconnect(r).remove();
  return () => remove(r);
}

export function listenOnlineCount(callback) {
  const r = ref(rtdb, 'online');
  const unsub = onValue(r, snap => {
    callback(snap.exists() ? Object.keys(snap.val() || {}).length : 0);
  });
  return unsub;
}

function makeRoomId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function joinQueue(uid, name, avatar, board) {
  await set(ref(rtdb, `queue/${uid}`), {
    uid, name, avatar: avatar || '🎯',
    board, timestamp: Date.now(),
    roomId: null, role: null
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

    // Already matched — navigate
    if (queue[uid].roomId) {
      unsub();
      onMatched(queue[uid].roomId, queue[uid].role || 'p2');
      return;
    }

    // Find another unmatched waiting user
    const others = Object.entries(queue)
      .filter(([id, d]) => id !== uid && !d.roomId)
      .sort((a, b) => a[1].timestamp - b[1].timestamp);

    if (others.length === 0) return;

    const [oppUid, oppData] = others[0];
    const myTs = queue[uid]?.timestamp || 0;

    // Whoever joined queue first creates the room
    if (myTs <= oppData.timestamp) {
      const roomId = makeRoomId();
      try {
        await set(ref(rtdb, `rooms/${roomId}`), {
          gameState: {
            status: 'playing',
            turn: 'p1',
            p1Board: board,
            p2Board: oppData.board || [],
            p1Selected: [], p2Selected: [],
            p1Lines: 0, p2Lines: 0,
            winner: null,
            p1Exited: false, p2Exited: false,
            turnStartedAt: Date.now(),
            createdAt: Date.now()
          },
          players: {
            p1: { uid, name, avatar: avatar || '🎯', role: 'p1' },
            p2: { uid: oppUid, name: oppData.name, avatar: oppData.avatar || '🎯', role: 'p2' }
          },
          rematch: { p1: false, p2: false }
        });
        await update(ref(rtdb, `queue/${uid}`),    { roomId, role: 'p1' });
        await update(ref(rtdb, `queue/${oppUid}`), { roomId, role: 'p2' });
        unsub();
        onMatched(roomId, 'p1');
      } catch (e) {
        console.error('Matchmaking error:', e);
      }
    }
    // else: wait — the other user (earlier timestamp) will create the room
  });

  return unsub;
}
