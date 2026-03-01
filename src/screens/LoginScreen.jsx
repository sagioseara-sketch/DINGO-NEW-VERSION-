// src/screens/LoginScreen.jsx
//
// CRITICAL FIX for issue #4:
// Previously this screen had NO redirect after successful auth. It relied on
// App.jsx's RootRoute (at '/') re-rendering, but since LoginScreen is mounted
// at '/login', that route never unmounts on its own. The result: user registers
// or logs in successfully, Firebase sets the auth state, but the screen stays
// frozen on the login form. Only a refresh caused the auth state to propagate.
//
// Fix: useEffect watches `user` from AuthContext. The moment Firebase confirms
// the user is signed in, we navigate to '/'. The loading state prevents a
// flash of "please wait" text from appearing after navigation.

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { loginEmail, registerEmail, loginGoogle } from '../firebase/auth';

export default function LoginScreen() {
  const { user, loading } = useAuth();
  const nav = useNavigate();

  const [mode,     setMode]     = useState('login'); // 'login' | 'register'
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [name,     setName]     = useState('');
  const [error,    setError]    = useState('');
  const [busy,     setBusy]     = useState(false);
  const [success,  setSuccess]  = useState('');

  // THE KEY FIX: as soon as Firebase confirms the user exists, go home.
  // This fires both after a fresh login AND after the auth state is restored
  // from a previous session, so it also prevents logged-in users from seeing
  // the login screen at all.
  useEffect(() => {
    if (!loading && user) nav('/', { replace: true });
  }, [user, loading]);

  const handleSubmit = async () => {
    setError(''); setSuccess(''); setBusy(true);
    try {
      if (mode === 'login') {
        await loginEmail(email, password);
        // After loginEmail resolves, onAuthStateChanged fires → user state updates
        // → the useEffect above triggers navigation. No manual nav needed.
      } else {
        if (!name.trim()) { setError('Please enter your name'); setBusy(false); return; }
        if (password.length < 6) { setError('Password must be at least 6 characters'); setBusy(false); return; }
        await registerEmail(email, password, name.trim());
        // Show a brief success message. The useEffect will navigate once Firebase
        // confirms the new user's auth state (usually within ~1 second).
        setSuccess('✅ Account created! Signing you in…');
      }
    } catch (err) {
      setError(friendlyError(err.code));
    }
    setBusy(false);
  };

  const handleGoogle = async () => {
    setError(''); setSuccess(''); setBusy(true);
    try {
      await loginGoogle();
      // Same pattern — onAuthStateChanged → user set → navigate
    } catch (err) {
      setError(friendlyError(err.code));
    }
    setBusy(false);
  };

  // Don't render the form if we know the user is already signed in —
  // avoids a brief flash of the login page before the redirect fires
  if (loading || user) return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <div className="spinner" />
    </div>
  );

  return (
    <div className="screen" style={{ justifyContent:'center', paddingBottom:20, paddingTop:40 }}>
      {/* Logo */}
      <div className="text-center" style={{ marginBottom:28 }}>
        <div className="hero-logo" data-text="DiNGo"
          style={{ fontSize:'clamp(72px,18vw,100px)' }}>
          DiNGo
        </div>
        <div className="sub" style={{ marginTop:6, letterSpacing:2 }}>LIVE MULTIPLAYER BINGO</div>
      </div>

      <div className="card" style={{ maxWidth:400 }}>
        <div className="card-body">
          {/* Mode tabs */}
          <div style={{ display:'flex', gap:8, marginBottom:20 }}>
            {['login','register'].map(m => (
              <button key={m}
                className={`btn ${mode === m ? 'btn-primary' : 'btn-ghost'}`}
                style={{ flex:1 }}
                onClick={() => { setMode(m); setError(''); setSuccess(''); }}>
                {m === 'login' ? '🎮 Sign In' : '🚀 Sign Up'}
              </button>
            ))}
          </div>

          {mode === 'register' && (
            <div style={{ marginBottom:14 }}>
              <div className="label">Your Name</div>
              <input type="text" placeholder="KGames" value={name}
                onChange={e => setName(e.target.value)} maxLength={20}
                enterKeyHint="next" />
            </div>
          )}

          <div style={{ marginBottom:14 }}>
            <div className="label">Email</div>
            <input type="email" placeholder="you@email.com" value={email}
              onChange={e => setEmail(e.target.value)}
              enterKeyHint="next" />
          </div>

          <div style={{ marginBottom:18 }}>
            <div className="label">Password</div>
            <input type="password" placeholder="••••••••" value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              enterKeyHint="done" />
          </div>

          {/* Error message */}
          {error && (
            <div style={{ background:'rgba(255,45,85,0.12)', border:'2px solid var(--c2)', borderRadius:'var(--r)', padding:'10px 12px', marginBottom:14, fontSize:13, color:'var(--c2)' }}>
              {error}
            </div>
          )}

          {/* Success message (shown after register before redirect fires) */}
          {success && (
            <div style={{ background:'rgba(0,255,204,0.12)', border:'2px solid var(--c1)', borderRadius:'var(--r)', padding:'10px 12px', marginBottom:14, fontSize:13, color:'var(--c1)', display:'flex', alignItems:'center', gap:8 }}>
              <div className="spinner" style={{ width:16, height:16, borderWidth:2 }} />
              {success}
            </div>
          )}

          <button className="btn btn-primary btn-full" onClick={handleSubmit} disabled={busy}>
            {busy ? '⏳ Please wait…' : mode === 'login' ? '🎮 Sign In' : '🚀 Create Account'}
          </button>

          <div style={{ display:'flex', alignItems:'center', gap:10, margin:'16px 0' }}>
            <div className="divider" style={{ flex:1 }} />
            <span className="muted small">or</span>
            <div className="divider" style={{ flex:1 }} />
          </div>

          <button className="btn btn-ghost btn-full" onClick={handleGoogle} disabled={busy}
            style={{ border:'2px solid var(--edge2)' }}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              width={18} alt="" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

function friendlyError(code) {
  const map = {
    'auth/user-not-found':       'No account found with that email.',
    'auth/wrong-password':       'Wrong password. Try again.',
    'auth/invalid-credential':   'Wrong email or password. Try again.',
    'auth/email-already-in-use': 'Email already in use — try signing in instead.',
    'auth/weak-password':        'Password must be at least 6 characters.',
    'auth/invalid-email':        'Invalid email address.',
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
    'auth/too-many-requests':    'Too many attempts. Please wait a minute.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}
