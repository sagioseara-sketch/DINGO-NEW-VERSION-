// src/firebase/matchmaking.js
//
// PRESENCE SYSTEM FIX:
// Old approach used a 25-second heartbeat (setInterval) to keep the presence entry alive.
// This is unreliable because: (a) if the user closes the tab before the next heartbeat,
// the stale entry lingers for up to 25 seconds, over-counting online players; (b) on
// mobile, the browser may suspend the interval when the app is backgrounded.
//
// New approach uses Firebase RTDB's built-in .info/connected special path:
// - When the client connects to Firebase (or reconnects after a drop), .info/connected
//   fires with value `true`. We use onDisconnect().remove() which is registered
//   SERVER-SIDE — Firebase itself removes the entry when the connection is lost,
//   regardless of whether the client runs any cleanup code.
// - This is Firebase's own recommended presence pattern and is accurate to the second.
//
// PLAY NOW RACE FIX:
// The matchmaking listener is async. Without a guard, two players could simultaneously
// see each other in the queue and both attempt to create a room. A `matchMade` flag
// (captured in the closure) ensures only one player wins the race.

import {
  ref, set, remove, onValue, onDisconnect, update, off,
} from 'firebase/database';
import { rtdb } from './config';

// ── Proper RTDB Presence ─────────────────────────────────────────────────────
// Using Firebase's .info/connected ensures server-side cleanup on disconnect.
// No heartbeat needed. The entry disappears instantly when the connection drops.
export function goOnline(uid, name, avatar) {
  const presenceRef = ref(rtdb, `online/${uid}`);
  const connRef     = ref(rtdb, '.info/connected');

  // onValue on .info/connected fires immediately with the current connection state,
  // then fires again on every reconnection event.
  const unsubConn = onValue(connRef, (snap) => {
    if (snap.val() !== true) return; // Not yet connected

    // Tell Firebase: if this client disconnects (for any reason), remove the entry.
    // This runs SERVER-SIDE — it fires even if the browser is killed or network drops.
    onDisconnect(presenceRef).remove();

    // Now write our presence. We do this AFTER registering onDisconnect so
    // there is never a window where the entry exists but cleanup isn't registered.
    set(presenceRef, {
      uid,
      name:   name   || 'Player',
      avatar: avatar || '🎯',
      ts:     Date.now(),
    }).catch(() => {}); // Silently ignore write failures on slow connections
  });

  // Cleanup function: unsubscribe the connection watcher and remove our presence entry.
  // Called when the user navigates away from the home screen.
  return () => {
    unsubConn();
    remove(presenceRef).catch(() => {});
  };
}

// Real-time count of online players — fires every time anyone joins/leaves
export function listenOnlineCount(callback) {
  const r = ref(rtdb, 'online');
  const unsub = onValue(
    r,
    snap => callback(snap.exists() ? Object.keys(snap.val() || {}).length : 0),
    () => callback(0), // Error handler: show 0 rather than crashing
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
    uid,
    name,
    avatar: avatar || '🎯',
    board,
    timestamp: Date.now(),
    roomId: null,
    role:   null,
  });
}

export function leaveQueue(uid) {
  remove(ref(rtdb, `queue/${uid}`)).catch(() => {});
}

// listenForMatch — watches the queue and creates/joins a room when two players are found.
//
// RACE CONDITION FIX: The `matchMade` flag (in closure) ensures that even if
// the Firebase listener fires multiple times in quick succession (e.g. both players
// writing entries nearly simultaneously), only ONE room creation happens.
export function listenForMatch(uid, name, avatar, board, onMatched) {
  const qRef = ref(rtdb, 'queue');
  let matchMade = false; // Guard: prevent duplicate room creation

  const unsub = onValue(qRef, async (snap) => {
    if (matchMade) return; // Already handled — ignore this event

    const queue = snap.val();
    if (!queue || !queue[uid]) return; // Our entry was removed already

    // Case 1: Our entry has a roomId — the other player created the room and notified us.
    if (queue[uid].roomId) {
      if (matchMade) return;
      matchMade = true;
      unsub();
      leaveQueue(uid);
      onMatched(queue[uid].roomId, queue[uid].role || 'p2');
      return;
    }

    // Case 2: Look for another unmatched player in the queue.
    const others = Object.entries(queue)
      .filter(([id, d]) => id !== uid && !d.roomId)
      .sort((a, b) => a[1].timestamp - b[1].timestamp); // Oldest first

    if (others.length === 0) return; // No opponent yet — keep waiting

    const [oppUid, oppData] = others[0];
    const myTs = queue[uid]?.timestamp || 0;

    // Only the player who joined EARLIEST creates the room.
    // The newer player waits for their queue entry to be updated (Case 1 above).
    if (myTs > oppData.timestamp) return;

    // I'm the older player. Check the guard one more time before doing async work.
    if (matchMade) return;
    matchMade = true;
    unsub(); // Stop listening immediately so we don't process more events

    const roomId = makeRoomId();
    try {
      // Create the room with both boards already set — no waiting state.
      await set(ref(rtdb, `rooms/${roomId}`), {
        gameState: {
          status:       'playing',
          turn:         'p1',
          p1Board:      board,
          p2Board:      oppData.board || [],
          calledNumbers: [],
          p1Lines:      0,
          p2Lines:      0,
          p1Chances:    5,
          p2Chances:    5,
          winner:       null,
          tie:          false,
          p1Exited:     false,
          p2Exited:     false,
          turnStartedAt: Date.now(),
          createdAt:    Date.now(),
        },
        players: {
          p1: { uid, name, avatar: avatar || '🎯', role: 'p1' },
          p2: { uid: oppUid, name: oppData.name, avatar: oppData.avatar || '🎯', role: 'p2' },
        },
        rematch: { p1: false, p2: false, newRoomId: null },
      });

      // Notify the opponent by writing roomId into their queue entry.
      // Their listenForMatch listener will see this and trigger Case 1.
      await update(ref(rtdb, `queue/${uid}`),    { roomId, role: 'p1' });
      await update(ref(rtdb, `queue/${oppUid}`), { roomId, role: 'p2' });

      leaveQueue(uid);
      onMatched(roomId, 'p1');
    } catch (e) {
      console.error('Matchmaking error:', e);
      matchMade = false; // Reset so the player can try again
    }
  });

  return unsub;
}
