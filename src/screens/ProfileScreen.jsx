// src/screens/ProfileScreen.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { updateUser } from "../firebase/userService";
import { logout } from "../firebase/auth";
import { THEME_INFO, setSFXTheme, getSFX, toggleMute, isMuted } from "../sounds/sfxThemes";
import { requestNotificationPermission } from "../firebase/notifications";

const AVATARS = ["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"];
const COLORS  = ["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];

export default function ProfileScreen() {
  const { user, profile, refreshProfile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const [name, setName]       = useState(profile?.displayName || "");
  const [avatar, setAvatar]   = useState(profile?.avatar || "🎯");
  const [color, setColor]     = useState(profile?.color  || "#00ffcc");
  const [sfxTheme, setSfx]    = useState(localStorage.getItem("sfxTheme") || "classic");
  const [muted, setMuted]     = useState(isMuted());
  const [saving, setSaving]   = useState(false);
  const [notifStatus, setNotifStatus] = useState("idle");

  useEffect(() => {
    if (profile) {
      setName(profile.displayName || "");
      setAvatar(profile.avatar || "🎯");
      setColor(profile.color  || "#00ffcc");
    }
  }, [profile]);

  const save = async () => {
    if (!name.trim()) return;
    setSaving(true);
    await updateUser(user.uid, { displayName: name.trim(), avatar, color });
    await refreshProfile(user.uid);
    sfx.click();
    setSaving(false);
  };

  const handleSfxTheme = (id) => {
    setSfxTheme(id);
    setSfx(id);
    setTimeout(() => getSFX().click(), 50);
  };

  const handleMute = () => {
    const nowMuted = toggleMute();
    setMuted(nowMuted);
  };

  const handleNotif = async () => {
    setNotifStatus("requesting");
    const token = await requestNotificationPermission(user.uid);
    setNotifStatus(token ? "granted" : "denied");
  };

  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 440, marginBottom: 16, paddingTop: 8 }}>
        <button className="btn btn-ghost" style={{ padding: "6px 12px" }} onClick={() => nav("/")}>← Back</button>
        <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, letterSpacing: 2 }}>PROFILE</span>
      </div>

      {/* Big avatar */}
      <div style={{ fontSize: 64, marginBottom: 8, textAlign: "center" }}>{avatar}</div>
      <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, textAlign: "center", marginBottom: 4 }}>{name || "Player"}</div>
      <div className="muted small text-center" style={{ marginBottom: 20 }}>{user?.email}</div>

      <div className="card">
        <div className="card-body">
          {/* Name */}
          <div style={{ marginBottom: 16 }}>
            <div className="label">Display Name</div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} maxLength={20} placeholder="Your name" />
          </div>

          {/* Avatar */}
          <div style={{ marginBottom: 16 }}>
            <div className="label">Avatar</div>
            <div className="avatar-grid">
              {AVATARS.map(a => (
                <div key={a} className={`avatar-opt ${avatar === a ? "selected" : ""}`}
                  onClick={() => { setAvatar(a); sfx.click(); }}>
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Color */}
          <div style={{ marginBottom: 16 }}>
            <div className="label">Color</div>
            <div className="color-row">
              {COLORS.map(c => (
                <div key={c} className={`color-dot ${color === c ? "selected" : ""}`}
                  style={{ background: c }}
                  onClick={() => { setColor(c); sfx.click(); }} />
              ))}
            </div>
          </div>

          <button className="btn btn-primary btn-full" onClick={save} disabled={saving}>
            {saving ? "Saving…" : "✅ Save Profile"}
          </button>
        </div>
      </div>

      {/* SFX Themes */}
      <div style={{ width: "100%", maxWidth: 440, marginTop: 20 }}>
        <div className="section-head">🔊 Sound Theme</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span className="muted small">Volume</span>
          <button className="btn btn-ghost" style={{ padding: "6px 14px", marginLeft: "auto" }} onClick={handleMute}>
            {muted ? "🔇 Muted" : "🔊 On"}
          </button>
        </div>
        <div className="sfx-grid">
          {THEME_INFO.map(t => (
            <div key={t.id} className={`sfx-opt ${sfxTheme === t.id ? "active" : ""}`}
              onClick={() => handleSfxTheme(t.id)}>
              <div className="sfx-icon">{t.icon}</div>
              <div className="sfx-name">{t.name}</div>
              <div className="sfx-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div style={{ width: "100%", maxWidth: 440, marginTop: 20 }}>
        <div className="section-head">🔔 Push Notifications</div>
        <div className="card">
          <div className="card-body">
            <p className="muted small" style={{ marginBottom: 12, lineHeight: 1.6 }}>
              Get notified when a friend challenges you or your rank changes.
            </p>
            <button className="btn btn-purple btn-full" onClick={handleNotif}
              disabled={notifStatus === "requesting" || notifStatus === "granted"}>
              {notifStatus === "granted"  ? "✅ Notifications Enabled" :
               notifStatus === "denied"   ? "❌ Permission Denied" :
               notifStatus === "requesting" ? "⏳ Requesting…" :
               "🔔 Enable Notifications"}
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      {profile && (
        <div style={{ width: "100%", maxWidth: 440, marginTop: 20 }}>
          <div className="section-head">📊 Your Stats</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[
              { label: "WINS",    val: profile.wins   || 0, color: "var(--c1)" },
              { label: "LOSSES",  val: profile.losses || 0, color: "var(--c2)" },
              { label: "WIN RATE",val: `${profile.winRate || 0}%`, color: "var(--c3)" }
            ].map(s => (
              <div key={s.label} style={{ background: "var(--panel)", border: "2px solid var(--edge2)", borderRadius: "var(--r)", padding: "12px 0", textAlign: "center" }}>
                <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 8, letterSpacing: 2, textTransform: "uppercase", color: "var(--ink3)", fontWeight: 700, marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Logout */}
      <div style={{ width: "100%", maxWidth: 440, marginTop: 20, marginBottom: 20 }}>
        <button className="btn btn-ghost btn-full" style={{ borderColor: "var(--c2)", color: "var(--c2)" }}
          onClick={() => logout()}>
          🚪 Sign Out
        </button>
      </div>
    </div>
  );
}
