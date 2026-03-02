// src/firebase/userService.js
//
// CHANGES: Added searchUserByShortId() so players can find friends by their
// unique 8-digit Player ID instead of (or in addition to) searching by name.
// The shortId field is generated at account creation and is never editable.

import {
  doc, getDoc, setDoc, updateDoc,
  collection, query, where, getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

// Generate a random 8-digit numeric ID (10 000 000 – 99 999 999)
function genShortId() {
  return String(Math.floor(10_000_000 + Math.random() * 90_000_000));
}

export async function createOrUpdateUser(uid, data) {
  const ref  = doc(db, 'users', uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    // New user: create a full profile with a permanent shortId
    await setDoc(ref, {
      displayName: data.displayName || 'Player',
      email:       data.email       || '',
      avatar:      data.avatar      || '🎯',
      color:       data.color       || '#00ffcc',
      shortId:     genShortId(), // 8-digit ID — shown in profile, used for friend invites
      wins:    0,
      losses:  0,
      total:   0,
      winRate: 0,
      streak:  0,
      friends: [],
      isOnline: true,
      fcmToken: null,
      createdAt: serverTimestamp(),
    });
  } else {
    // Existing user: just mark them online. Never overwrite shortId.
    await updateDoc(ref, { isOnline: true });
  }
}

export async function getUser(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? { uid, ...snap.data() } : null;
}

export async function updateUser(uid, data) {
  // Guard: never allow shortId to be overwritten via updateUser
  const { shortId: _ignored, ...safeData } = data;
  await updateDoc(doc(db, 'users', uid), safeData);
}

export async function setOnlineStatus(uid, isOnline) {
  try {
    await updateDoc(doc(db, 'users', uid), {
      isOnline,
      lastSeen: serverTimestamp(),
    });
  } catch (_) {}
}

export async function saveFCMToken(uid, token) {
  await updateDoc(doc(db, 'users', uid), { fcmToken: token });
}

// Search by display name (prefix match, case-sensitive due to Firestore limits)
export async function searchUserByName(name) {
  const q = query(
    collection(db, 'users'),
    where('displayName', '>=', name),
    where('displayName', '<=', name + '\uf8ff'),
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
}

// NEW: Search by exact 8-digit shortId.
// Players share their ID (#12345678) and friends use it to send requests directly.
export async function searchUserByShortId(shortId) {
  // Strip leading '#' if the user typed it
  const clean = String(shortId).replace(/^#/, '').trim();
  if (!clean) return [];
  try {
    const q    = query(collection(db, 'users'), where('shortId', '==', clean));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  } catch (e) {
    console.error('searchUserByShortId error:', e);
    return [];
  }
}
