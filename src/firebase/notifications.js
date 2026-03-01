// src/firebase/notifications.js
import { messaging, VAPID_KEY } from "./config";
import { saveFCMToken } from "./userService";

let _token = null;

export async function requestNotificationPermission(uid) {
  if (!messaging) return null;
  try {
    const { getToken } = await import("firebase/messaging");
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return null;
    const token = await getToken(messaging, { vapidKey: VAPID_KEY });
    if (token) {
      _token = token;
      await saveFCMToken(uid, token);
    }
    return token;
  } catch (err) {
    console.warn("Notification setup failed:", err);
    return null;
  }
}

export function listenForegroundMessages(callback) {
  if (!messaging) return () => {};
  import("firebase/messaging").then(({ onMessage }) => {
    onMessage(messaging, (payload) => {
      callback(payload);
    });
  });
}

// In-app toast notification (no FCM needed)
export function showToast(title, body, type = "info") {
  const event = new CustomEvent("dingo-toast", {
    detail: { title, body, type }
  });
  window.dispatchEvent(event);
}
