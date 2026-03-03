// src/hooks/useAuth.jsx
//
// FIX: Online status cleanup on logout.
// Previously `setOnlineStatus(uid, false)` only updated Firestore — it didn't
// remove the RTDB presence entry. The RTDB entry is what drives the online count,
// so the count stayed inflated after logout.
// Now we call `goOffline(uid)` from matchmaking.js on sign-out to remove the RTDB
// entry explicitly before the auth session is destroyed.

import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { onAuthChange } from '../firebase/auth';
import { getUser, setOnlineStatus } from '../firebase/userService';
import { goOffline } from '../firebase/matchmaking';

export const AuthContext = createContext(null);
export function useAuth() { return useContext(AuthContext); }

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const prevUidRef = useRef(null); // track previous uid for logout cleanup

  const refreshProfile = async (uid) => {
    if (!uid) return;
    const p = await getUser(uid);
    setProfile(p);
  };

  useEffect(() => {
    const unsub = onAuthChange(async (firebaseUser) => {
      // When user LOGS OUT: firebaseUser is null, prevUidRef has old uid
      if (!firebaseUser && prevUidRef.current) {
        // Remove RTDB presence immediately — don't wait for WS close
        await goOffline(prevUidRef.current);
        await setOnlineStatus(prevUidRef.current, false).catch(() => {});
        prevUidRef.current = null;
      }

      setUser(firebaseUser);

      if (firebaseUser) {
        prevUidRef.current = firebaseUser.uid;
        await refreshProfile(firebaseUser.uid);
        setOnlineStatus(firebaseUser.uid, true).catch(() => {});
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    // Fallback: remove presence on page close (tab close / navigate away)
    const handleUnload = () => {
      if (prevUidRef.current) {
        // navigator.sendBeacon can't call Firebase SDK, so we rely on
        // the RTDB onDisconnect hook for this case. Firestore is best-effort.
        setOnlineStatus(prevUidRef.current, false).catch(() => {});
      }
    };
    window.addEventListener('beforeunload', handleUnload);

    return () => {
      unsub();
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, loading, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
