// public/firebase-messaging-sw.js
// Firebase Cloud Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",
  authDomain:        "dingo-new-version.firebaseapp.com",
  projectId:         "dingo-new-version",
  storageBucket:     "dingo-new-version.firebasestorage.app",
  messagingSenderId: "245470329002",
  appId:             "1:245470329002:web:f0fae2a906e773629578d3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Background message:', payload);
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: icon || '/dingo-game/icons/icon-192.png',
    badge: '/dingo-game/icons/icon-192.png',
    vibrate: [200, 100, 200],
    data: payload.data
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/dingo-game/')
  );
});
