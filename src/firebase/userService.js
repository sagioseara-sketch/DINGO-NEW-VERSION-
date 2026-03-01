// src/firebase/userService.js
import {
  doc, getDoc, setDoc, updateDoc, serverTimestamp
} from "firebase/firestore";
import { db } from "./config";

export async function createOrUpdateUser(uid, data) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      displayName: data.displayName || "Player",
      email:       data.email || "",
      avatar:      data.avatar || "🎯",
      color:       data.color  || "#00ffcc",
      wins:   0,
      losses: 0,
      total:  0,
      winRate: 0,
      friends: [],
      isOnline: true,
      fcmToken: null,
      createdAt: serverTimestamp()
    });
  } else {
    await updateDoc(ref, { isOnline: true });
  }
}

export async function getUser(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? { uid, ...snap.data() } : null;
}

export async function updateUser(uid, data) {
  await updateDoc(doc(db, "users", uid), data);
}

export async function setOnlineStatus(uid, isOnline) {
  try {
    await updateDoc(doc(db, "users", uid), {
      isOnline,
      lastSeen: serverTimestamp()
    });
  } catch (_) {}
}

export async function saveFCMToken(uid, token) {
  await updateDoc(doc(db, "users", uid), { fcmToken: token });
}

export async function searchUserByName(name) {
  // Simple approach: fetch users and filter client-side (for small user base)
  // For production, use Algolia or Firestore's array-contains
  const { collection, query, where, getDocs } = await import("firebase/firestore");
  const q = query(
    collection(db, "users"),
    where("displayName", ">=", name),
    where("displayName", "<=", name + "\uf8ff")
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
}
