// src/screens/HomeScreen.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getSFX } from "../sounds/sfxThemes";

const MODES = [
  { icon: "🤖", title: "vs Bot",      sub: "Solo vs AI",       path: "/bot" },
  { icon: "⚡", title: "Create Room", sub: "Host & invite",    path: "/room/create" },
  { icon: "🔗", title: "Join Room",   sub: "Enter code",       path: "/room/join" },
  { icon: "🏆", title: "Leaderboard", sub: "Top players",      path: "/leaderboard" },
  { icon: "👥", title: "Friends",     sub: "Add & challenge",  path: "/friends" },
  { icon: "📊", title: "History",     sub: "Past games",       path: "/history" },
];

export default function HomeScreen() {
  const { profile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const go = (path) => {
    sfx.click();
    nav(path);
  };

  return (
    <div className="screen" style={{ paddingTop: 24, paddingBottom: 80 }}>
      {/* Hero */}
      <div className="text-center" style={{ marginBottom: 24 }}>
        <div className="hero-logo" data-text="DiNGo">DiNGo</div>
        <div className="hero-badge">
          <span className="dot" />
          LIVE MULTIPLAYER BINGO
        </div>
      </div>

      {/* Welcome */}
      {profile && (
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, width: "100%", maxWidth: 380 }}>
          <span style={{ fontSize: 32 }}>{profile.avatar || "🎯"}</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Hey, {profile.displayName}!</div>
            <div className="muted small">{profile.wins || 0}W · {profile.losses || 0}L · {profile.winRate || 0}% WR</div>
          </div>
          <button
            className="btn btn-ghost"
            style={{ marginLeft: "auto", padding: "6px 12px", fontSize: 11 }}
            onClick={() => go("/profile")}
          >
            ⚙️ Edit
          </button>
        </div>
      )}

      {/* Menu grid */}
      <div className="menu-grid">
        {MODES.map(m => (
          <div key={m.path} className="menu-card" onClick={() => go(m.path)}>
            <div className="menu-icon">{m.icon}</div>
            <div className="menu-title">{m.title}</div>
            <div className="menu-sub">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Stats mini bar */}
      <div style={{ marginTop: 20, width: "100%", maxWidth: 380, display: "flex", gap: 8 }}>
        {[
          { label: "WINS",    val: profile?.wins   || 0, color: "var(--c1)" },
          { label: "LOSSES",  val: profile?.losses || 0, color: "var(--c2)" },
          { label: "GAMES",   val: profile?.total  || 0, color: "var(--c4)" }
        ].map(s => (
          <div key={s.label} style={{ flex: 1, background: "var(--panel)", border: "2px solid var(--edge2)", borderRadius: "var(--r)", padding: "10px 0", textAlign: "center" }}>
            <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 24, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 8, letterSpacing: 2, textTransform: "uppercase", color: "var(--ink3)", fontWeight: 700, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
