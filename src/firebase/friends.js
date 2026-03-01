// src/firebase/friends.js
import {
  collection, addDoc, updateDoc, doc,
  arrayUnion, arrayRemove, query,
  where, getDocs, onSnapshot, serverTimestamp,
  getDoc
} from "firebase/firestore";
import { db } from "./config";

export async function sendFriendRequest(fromUid, toUid, fromName) {
  // Check if request already exists
  const q = query(
    collection(db, "friendRequests"),
    where("from", "==", fromUid),
    where("to",   "==", toUid)
  );
  const snap = await getDocs(q);
  if (!snap.empty) return { error: "Request already sent" };

  await addDoc(collection(db, "friendRequests"), {
    from:      fromUid,
    to:        toUid,
    fromName,
    status:    "pending",
    timestamp: serverTimestamp()
  });
  return { success: true };
}

export async function acceptRequest(requestId, myUid, friendUid) {
  await updateDoc(doc(db, "friendRequests", requestId), { status: "accepted" });
  await updateDoc(doc(db, "users", myUid),     { friends: arrayUnion(friendUid) });
  await updateDoc(doc(db, "users", friendUid), { friends: arrayUnion(myUid) });
}

export async function declineRequest(requestId) {
  await updateDoc(doc(db, "friendRequests", requestId), { status: "declined" });
}

export async function removeFriend(myUid, friendUid) {
  await updateDoc(doc(db, "users", myUid),     { friends: arrayRemove(friendUid) });
  await updateDoc(doc(db, "users", friendUid), { friends: arrayRemove(myUid) });
}

export function listenPendingRequests(uid, callback) {
  const q = query(
    collection(db, "friendRequests"),
    where("to",     "==", uid),
    where("status", "==", "pending")
  );
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

export async function getFriendsList(friendUids) {
  if (!friendUids || friendUids.length === 0) return [];
  const friends = [];
  for (const uid of friendUids) {
    const snap = await getDoc(doc(db, "users", uid));
    if (snap.exists()) friends.push({ uid, ...snap.data() });
  }
  return friends;
}
