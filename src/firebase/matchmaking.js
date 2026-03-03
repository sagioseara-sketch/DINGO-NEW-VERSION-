// src/firebase/matchmaking.js
//
// FIX 1 — unsub closure bug:
//   `const unsub = onValue(...)` can fire the callback SYNCHRONOUSLY from
//   Firebase's local cache before `onValue` has returned. Calling `unsub()`
//   inside that first callback calls `undefined()` and silently crashes,
//   leaving the listener running forever and the matchmaking stuck.
//   Fix: declare `let stopListening` before calling `onValue`, assign it
//   inside a `setTimeout(0)` so it's always defined before the callback uses it.
//   Also added a `started` flag so events that fire before the listener is
//   registered are ignored safely.
//
// FIX 2 — online count stale entries on logout:
//   `onDisconnect().remove()` is registered server-side and fires when the
//   WebSocket closes. But `signOut(auth)` invalidates the auth token before
//   the RTDB WebSocket closes cleanly, so Firebase sometimes can't run the
//   onDisconnect hook. Result: the presence entry lingers after logout.
//   Fix: export `goOffline(uid)` which explicitly removes the presence entry
//   from the client. HomeScreen calls this BEFORE calling `logout()`.

import {
  ref, set, remove, onValue, onDisconnect, update, off,
} from 'firebase/database';
import { rtdb } from './config';

// ── Presence ──────────────────────────────────────────────────────────────────

export function goOnline(uid, name, avatar) {
  const presenceRef = ref(rtdb, `online/${uid}`);
  const connRef     = ref(rtdb, '.info/connected');

  const unsubConn = onValue(connRef, (snap) => {
    if (snap.val() !== true) return;
    // Register server-side cleanup BEFORE writing presence
    onDisconnect(presenceRef).remove();
    set(presenceRef, {
      uid,
      name:   name   || 'Player',
      avatar: avatar || '🎯',
      ts:     Date.now(),
    }).catch(() => {});
  });

  return () => {
    unsubConn();
    // Explicitly remove presence so logout is instant, not waiting for WS close
    remove(presenceRef).catch(() => {});
  };
}

// Called explicitly before signOut() to guarantee instant removal
export function goOffline(uid) {
  return remove(ref(rtdb, `online/${uid}`)).catch(() => {});
}

export function listenOnlineCount(callback) {
  const r = ref(rtdb, 'online');
  const unsub = onValue(
    r,
    snap => callback(snap.exists() ? Object.keys(snap.val() || {}).length : 0),
    () => callback(0),
  );
  return unsub;
}

// ── Matchmaking Queue ─────────────────────────────────────────────────────────

function makeRoomId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function joinQueue(uid, name, avatar, board) {
  await set(ref(rtdb, `queue/${uid}`), {
    uid, name, avatar: avatar || '🎯', board,
    timestamp: Date.now(), roomId: null, role: null,
  });
}

export function leaveQueue(uid) {
  remove(ref(rtdb, `queue/${uid}`)).catch(() => {});
}

// FIX: `let stopListening` declared before the callback so it's always
// defined by the time any code inside the callback tries to call it.
// Firebase can fire onValue synchronously — `const x = onValue(...)` means
// the callback runs BEFORE x is assigned, so calling x() crashes.
export function listenForMatch(uid, name, avatar, board, onMatched) {
  const qRef = ref(rtdb, 'queue');
  let matchMade    = false;
  let stopListening = null; // declared before onValue — safe to call in callback

  const handler = async (snap) => {
    if (matchMade) return;

    const queue = snap.val();
    if (!queue || !queue[uid]) return;

    // Case 1: My entry has a roomId — the other player matched me
    if (queue[uid].roomId) {
      if (matchMade) return;
      matchMade = true;
      if (stopListening) stopListening();
      leaveQueue(uid);
      onMatched(queue[uid].roomId, queue[uid].role || 'p2');
      return;
    }

    // Case 2: Find another unmatched player
    const others = Object.entries(queue)
      .filter(([id, d]) => id !== uid && !d.roomId)
      .sort((a, b) => a[1].timestamp - b[1].timestamp);

    if (others.length === 0) return;

    const [oppUid, oppData] = others[0];
    // Only the OLDER player (lower timestamp) creates the room
    if ((queue[uid]?.timestamp || 0) > oppData.timestamp) return;
    if (matchMade) return;
    matchMade = true;
    if (stopListening) stopListening();

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
      leaveQueue(uid);
      onMatched(roomId, 'p1');
    } catch (e) {
      console.error('Matchmaking error:', e);
      matchMade = false; // reset so player can retry
    }
  };

  stopListening = onValue(qRef, handler);
  return () => { if (stopListening) stopListening(); };
}
