// src/App.jsx
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import ToastContainer from './components/Toast';
import InviteBanner from './components/InviteBanner';
import { useEffect } from 'react';
import { listenForegroundMessages, showToast } from './firebase/notifications';

import SplashScreen      from './screens/SplashScreen';
import LoginScreen       from './screens/LoginScreen';
import HomeScreen        from './screens/HomeScreen';
import ProfileScreen     from './screens/ProfileScreen';
import BotGameScreen     from './screens/BotGameScreen';
import RoomScreen        from './screens/RoomScreen';
import MultiGameScreen   from './screens/MultiGameScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import FriendsScreen     from './screens/FriendsScreen';
import HistoryScreen     from './screens/HistoryScreen';

function Spinner() {
  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <div className="spinner" />
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  return user ? children : <Navigate to="/login" replace />;
}

function RootRoute() {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  if (user) return <HomeScreen />;
  return <SplashScreen />;
}

function AppInner() {
  useEffect(() => {
    listenForegroundMessages(payload => {
      showToast(
        payload.notification?.title || 'DiNGo',
        payload.notification?.body  || '',
        'info'
      );
    });
  }, []);

  return (
    <HashRouter>
      <ToastContainer />
      {/* InviteBanner sits outside Routes so it renders on every screen.
          When a friend sends a challenge, the popup appears regardless of
          which page the invited player is currently on. */}
      <InviteBanner />
      <Routes>
        <Route path="/"      element={<RootRoute />} />
        <Route path="/login" element={<LoginScreen />} />

        <Route path="/profile"      element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
        <Route path="/bot"          element={<ProtectedRoute><BotGameScreen /></ProtectedRoute>} />
        <Route path="/room/:mode"   element={<ProtectedRoute><RoomScreen /></ProtectedRoute>} />
        <Route path="/game/:roomId" element={<ProtectedRoute><MultiGameScreen /></ProtectedRoute>} />
        <Route path="/leaderboard"  element={<ProtectedRoute><LeaderboardScreen /></ProtectedRoute>} />
        <Route path="/friends"      element={<ProtectedRoute><FriendsScreen /></ProtectedRoute>} />
        <Route path="/history"      element={<ProtectedRoute><HistoryScreen /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
