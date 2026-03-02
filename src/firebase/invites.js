// src/firebase/invites.js
//
// Friend Match Invite System using Firebase Realtime Database.
//
// HOW THE FLOW WORKS:
// 1. Inviter calls sendInvite() which:
//    a. Creates a real room in RTDB (with their board already in it)
//    b. Writes an invite record to invites/{toUid}/{inviteId}
// 2. Invitee's app is always listening to invites/{myUid} via listenInvites()
//    — this runs in App.jsx so it works on every screen
// 3. Invitee sees a popup with Accept / Decline
//    — Accept: calls joinRoom() with a random board, then navigates to the game
//    — Decline: calls declineInvite() which removes the record
// 4. Invite auto-expires: each invite has a `expiresAt` timestamp.
//    The UI counts down and auto-declines when it reaches 0.
//    A Cloud Function would clean up server-side, but client-side cleanup
//    is sufficient for a small game — the listener handles it.

import { ref, set, remove, onValue, off, push } from 'firebase/database';
import { rtdb } from './config';
import { genRoomId, createRoom } from './roomService';
import { genRandomBoard } from '../game/aiLogic';

const INVITE_EXPIRY_MS = 45_000; // 45 seconds to accept

// Send a match invite to a friend.
// Creates the room first so the roomId is ready when the friend accepts.
// Returns the roomId so the sender can navigate to it after sending.
export async function sendInvite(toUid, fromData, myBoard) {
  const roomId = genRoomId();
  // Create the room with sender as p1
  await createRoom(roomId, fromData, myBoard);

  // Write invite record — the invitee's listener will pick this up immediately
  const inviteRef = push(ref(rtdb, `invites/${toUid}`));
  await set(inviteRef, {
    fromUid:    fromData.uid,
    fromName:   fromData.name,
    fromAvatar: fromData.avatar || '🎯',
    roomId,
    sentAt:     Date.now(),
    expiresAt:  Date.now() + INVITE_EXPIRY_MS,
  });

  return { roomId, inviteId: inviteRef.key };
}

// Decline or clean up an invite — just deletes the record
export async function declineInvite(toUid, inviteId) {
  try {
    await remove(ref(rtdb, `invites/${toUid}/${inviteId}`));
  } catch (_) {}
}

// Cancel an invite you sent (e.g. if you navigate away)
export async function cancelInvite(toUid, inviteId) {
  return declineInvite(toUid, inviteId);
}

// Listen for incoming invites addressed to uid.
// Calls callback({ id, fromUid, fromName, fromAvatar, roomId, expiresAt })
// for each new invite. Returns an unsubscribe function.
export function listenInvites(uid, callback) {
  const r = ref(rtdb, `invites/${uid}`);
  onValue(r, snap => {
    if (!snap.exists()) { callback(null); return; }
    const data   = snap.val();
    const now    = Date.now();
    // Only surface invites that haven't expired yet
    const active = Object.entries(data)
      .filter(([, v]) => v.expiresAt > now)
      .map(([id, v]) => ({ id, ...v }))
      .sort((a, b) => a.sentAt - b.sentAt); // oldest first
    callback(active.length > 0 ? active[0] : null); // show one at a time
  }, () => callback(null));
  return () => off(r);
}
