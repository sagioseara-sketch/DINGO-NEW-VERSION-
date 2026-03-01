// src/firebase/auth.js
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { auth } from "./config";
import { createOrUpdateUser } from "./userService";

const googleProvider = new GoogleAuthProvider();

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function loginEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function registerEmail(email, password, displayName) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName });
  await createOrUpdateUser(cred.user.uid, {
    displayName,
    email,
    avatar: "🎯",
    color: "#00ffcc"
  });
  return cred.user;
}

export async function loginGoogle() {
  const cred = await signInWithPopup(auth, googleProvider);
  await createOrUpdateUser(cred.user.uid, {
    displayName: cred.user.displayName || "Player",
    email: cred.user.email,
    avatar: "🎯",
    color: "#00ffcc"
  });
  return cred.user;
}

export async function logout() {
  await signOut(auth);
}
