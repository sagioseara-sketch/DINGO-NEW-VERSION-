// src/firebase/friends.js
import {
  collection, addDoc, updateDoc, doc,
  arrayUnion, arrayRemove, query,
  where, onSnapshot, serverTimestamp, getDoc, getDocs
} from 'firebase/firestore';
import { db } from './config';

export async function sendFriendRequest(fromUid, toUid, fromName) {
  const q = query(
    collection(db, 'friendRequests'),
    where('from', '==', fromUid),
    where('to',   '==', toUid)
  );
  const snap = await getDocs(q);
  if (!snap.empty) return { error: 'Request already sent' };

  await addDoc(collection(db, 'friendRequests'), {
    from: fromUid, to: toUid, fromName,
    status: 'pending',
    timestamp: serverTimestamp()
  });
  return { success: true };
}

export async function acceptRequest(requestId, myUid, friendUid) {
  await updateDoc(doc(db, 'friendRequests', requestId), { status: 'accepted' });
  await updateDoc(doc(db, 'users', myUid),     { friends: arrayUnion(friendUid) });
  await updateDoc(doc(db, 'users', friendUid), { friends: arrayUnion(myUid) });
}

export async function declineRequest(requestId) {
  await updateDoc(doc(db, 'friendRequests', requestId), { status: 'declined' });
}

export async function removeFriend(myUid, friendUid) {
  await updateDoc(doc(db, 'users', myUid),     { friends: arrayRemove(friendUid) });
  await updateDoc(doc(db, 'users', friendUid), { friends: arrayRemove(myUid) });
}

// FIX: single where clause - no composite index needed
export function listenPendingRequests(uid, callback) {
  const q = query(
    collection(db, 'friendRequests'),
    where('to', '==', uid)
  );
  return onSnapshot(q, snap => {
    const all = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(all.filter(r => r.status === 'pending'));
  }, err => {
    console.error('Friend requests error:', err);
    callback([]);
  });
}

export async function getFriendsList(friendUids) {
  if (!friendUids || friendUids.length === 0) return [];
  const friends = [];
  for (const uid of friendUids) {
    try {
      const snap = await getDoc(doc(db, 'users', uid));
      if (snap.exists()) friends.push({ uid, ...snap.data() });
    } catch (_) {}
  }
  return friends;
}
