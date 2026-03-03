// src/firebase/config.js
//
// ANDROID FIX: Removed top-level static import of firebase/messaging.
// `import { getMessaging } from "firebase/messaging"` executes at module parse
// time and internally accesses navigator.serviceWorker. In Capacitor's Android
// WebView this throws a TypeError before React can mount, causing a blank screen.
// Fix: messaging is now initialised lazily inside isSupported().then(...) with
// a fully dynamic import, so it never runs on platforms that don't support it.

import { initializeApp } from 'firebase/app';
import { getAuth }       from 'firebase/auth';
import { getFirestore }  from 'firebase/firestore';
import { getDatabase }   from 'firebase/database';

const firebaseConfig = {
  apiKey:            'AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY',
  authDomain:        'dingo-new-version.firebaseapp.com',
  databaseURL:       'https://dingo-new-version-default-rtdb.firebaseio.com',
  projectId:         'dingo-new-version',
  storageBucket:     'dingo-new-version.firebasestorage.app',
  messagingSenderId: '245470329002',
  appId:             '1:245470329002:web:f0fae2a906e773629578d3',
};

export const VAPID_KEY = 'GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ';

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);
export const rtdb = getDatabase(app);

// messaging is null on Android / unsupported browsers.
// It is set lazily — nothing imported from firebase/messaging at parse time.
export let messaging = null;

// Only attempt to initialise messaging in browsers that support it.
// isSupported() is imported dynamically so it never executes on Android WebView.
import('firebase/messaging')
  .then(({ isSupported, getMessaging }) =>
    isSupported().then(ok => {
      if (ok) messaging = getMessaging(app);
    })
  )
  .catch(() => { /* Android WebView / unsupported — silently skip */ });

export default app;
