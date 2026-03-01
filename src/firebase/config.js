// src/firebase/config.js
// ============================================================
// IMPORTANT: Replace ALL values below with YOUR Firebase config
// Get these from: Firebase Console → Project Settings → Your Apps
// ============================================================

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey:            "AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",
  authDomain:        "dingo-new-version.firebaseapp.com",
  databaseURL:       "https://dingo-new-version-default-rtdb.firebaseio.com",
  projectId:         "dingo-new-version",
  storageBucket:     "dingo-new-version.firebasestorage.app",
  messagingSenderId: "245470329002",
  appId:             "1:245470329002:web:f0fae2a906e773629578d3"
};

// FCM Web Push VAPID Key
export const VAPID_KEY = "GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);
export const rtdb = getDatabase(app);

// Messaging is only available in supported browsers
export let messaging = null;
isSupported().then((supported) => {
  if (supported) messaging = getMessaging(app);
}).catch(() => {});

export default app;
