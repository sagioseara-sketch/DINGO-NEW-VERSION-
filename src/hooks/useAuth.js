// src/hooks/useAuth.js
import { useState, useEffect, createContext, useContext } from "react";
import { onAuthChange } from "../firebase/auth";
import { getUser, setOnlineStatus } from "../firebase/userService";

export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshProfile = async (uid) => {
    if (!uid) return;
    const p = await getUser(uid);
    setProfile(p);
  };

  useEffect(() => {
    const unsub = onAuthChange(async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await refreshProfile(firebaseUser.uid);
        setOnlineStatus(firebaseUser.uid, true);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    // Set offline on page leave
    const handleUnload = () => {
      if (user) setOnlineStatus(user.uid, false);
    };
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      unsub();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, loading, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
