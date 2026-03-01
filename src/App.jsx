// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import ToastContainer from './components/Toast';
import { useEffect } from 'react';
import { listenForegroundMessages, showToast } from './firebase/notifications';

import SplashScreen       from './screens/SplashScreen';
import LoginScreen        from './screens/LoginScreen';
import HomeScreen         from './screens/HomeScreen';
import ProfileScreen      from './screens/ProfileScreen';
import BotGameScreen      from './screens/BotGameScreen';
import RoomScreen         from './screens/RoomScreen';
import MultiGameScreen    from './screens/MultiGameScreen';
import LeaderboardScreen  from './screens/LeaderboardScreen';
import FriendsScreen      from './screens/FriendsScreen';
import HistoryScreen      from './screens/HistoryScreen';

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

// Smart root: shows splash for guests, home for logged-in users
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
    <BrowserRouter basename="/DINGO-NEW-VERSION-">
      <ToastContainer />
      <Routes>
        <Route path="/"        element={<RootRoute />} />
        <Route path="/login"   element={<LoginScreen />} />

        <Route path="/profile"      element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
        <Route path="/bot"          element={<ProtectedRoute><BotGameScreen /></ProtectedRoute>} />
        <Route path="/room/:mode"   element={<ProtectedRoute><RoomScreen /></ProtectedRoute>} />
        <Route path="/game/:roomId" element={<ProtectedRoute><MultiGameScreen /></ProtectedRoute>} />
        <Route path="/leaderboard"  element={<ProtectedRoute><LeaderboardScreen /></ProtectedRoute>} />
        <Route path="/friends"      element={<ProtectedRoute><FriendsScreen /></ProtectedRoute>} />
        <Route path="/history"      element={<ProtectedRoute><HistoryScreen /></ProtectedRoute>} />

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
