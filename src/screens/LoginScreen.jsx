// src/screens/LoginScreen.jsx
import { useState } from "react";
import { loginEmail, registerEmail, loginGoogle } from "../firebase/auth";

export default function LoginScreen() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError(""); setLoading(true);
    try {
      if (mode === "login") {
        await loginEmail(email, password);
      } else {
        if (!name.trim()) { setError("Please enter your name"); setLoading(false); return; }
        await registerEmail(email, password, name.trim());
      }
    } catch (err) {
      setError(friendlyError(err.code));
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    setError(""); setLoading(true);
    try { await loginGoogle(); }
    catch (err) { setError(friendlyError(err.code)); }
    setLoading(false);
  };

  return (
    <div className="screen" style={{ justifyContent: "center", paddingBottom: 20, paddingTop: 40 }}>
      {/* Logo */}
      <div className="text-center" style={{ marginBottom: 28 }}>
        <div className="hero-logo" data-text="DiNGo" style={{ fontSize: "clamp(72px,18vw,100px)" }}>
          DiNGo
        </div>
        <div className="sub" style={{ marginTop: 6, letterSpacing: 2 }}>LIVE MULTIPLAYER BINGO</div>
      </div>

      <div className="card" style={{ maxWidth: 400 }}>
        <div className="card-body">
          {/* Tab switch */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {["login", "register"].map(m => (
              <button
                key={m} className={`btn ${mode === m ? "btn-primary" : "btn-ghost"}`}
                style={{ flex: 1 }}
                onClick={() => { setMode(m); setError(""); }}
              >
                {m === "login" ? "Sign In" : "Sign Up"}
              </button>
            ))}
          </div>

          {mode === "register" && (
            <div style={{ marginBottom: 14 }}>
              <div className="label">Your Name</div>
              <input type="text" placeholder="KGames" value={name} onChange={e => setName(e.target.value)} maxLength={20} />
            </div>
          )}
          <div style={{ marginBottom: 14 }}>
            <div className="label">Email</div>
            <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div style={{ marginBottom: 18 }}>
            <div className="label">Password</div>
            <input
              type="password" placeholder="••••••••" value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
            />
          </div>

          {error && (
            <div style={{ background: "rgba(255,45,85,0.12)", border: "2px solid var(--c2)", borderRadius: "var(--r)", padding: "10px 12px", marginBottom: 14, fontSize: 13, color: "var(--c2)" }}>
              {error}
            </div>
          )}

          <button className="btn btn-primary btn-full" onClick={handleSubmit} disabled={loading}>
            {loading ? "⏳ Please wait…" : mode === "login" ? "🎮 Sign In" : "🚀 Create Account"}
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "16px 0" }}>
            <div className="divider" style={{ flex: 1 }} />
            <span className="muted small">or</span>
            <div className="divider" style={{ flex: 1 }} />
          </div>

          <button className="btn btn-ghost btn-full" onClick={handleGoogle} disabled={loading}
            style={{ border: "2px solid var(--edge2)" }}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width={18} alt="" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

function friendlyError(code) {
  switch (code) {
    case "auth/user-not-found":       return "No account with that email.";
    case "auth/wrong-password":       return "Wrong password. Try again.";
    case "auth/email-already-in-use": return "Email already in use. Try signing in.";
    case "auth/weak-password":        return "Password must be at least 6 characters.";
    case "auth/invalid-email":        return "Invalid email address.";
    case "auth/popup-closed-by-user": return "Google sign-in was cancelled.";
    default:                          return "Something went wrong. Please try again.";
  }
}
