// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import ToastContainer from "./components/Toast";
import { listenForegroundMessages } from "./firebase/notifications";
import { showToast } from "./firebase/notifications";
import { useEffect } from "react";

// Screens
import LoginScreen        from "./screens/LoginScreen";
import HomeScreen         from "./screens/HomeScreen";
import ProfileScreen      from "./screens/ProfileScreen";
import BotGameScreen      from "./screens/BotGameScreen";
import RoomScreen         from "./screens/RoomScreen";
import MultiGameScreen    from "./screens/MultiGameScreen";
import LeaderboardScreen  from "./screens/LeaderboardScreen";
import FriendsScreen      from "./screens/FriendsScreen";
import HistoryScreen      from "./screens/HistoryScreen";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="spinner" />
    </div>
  );
  return user ? children : <Navigate to="/login" replace />;
}

function AppInner() {
  const { user } = useAuth();

  useEffect(() => {
    listenForegroundMessages((payload) => {
      showToast(
        payload.notification?.title || "DiNGo",
        payload.notification?.body  || "",
        "info"
      );
    });
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename= "/DINGO-NEW-VERSION-">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginScreen />} />

        <Route path="/" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
        <Route path="/bot" element={<ProtectedRoute><BotGameScreen /></ProtectedRoute>} />
        <Route path="/room/:mode" element={<ProtectedRoute><RoomScreen /></ProtectedRoute>} />
        <Route path="/game/:roomId" element={<ProtectedRoute><MultiGameScreen /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><LeaderboardScreen /></ProtectedRoute>} />
        <Route path="/friends" element={<ProtectedRoute><FriendsScreen /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><HistoryScreen /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
