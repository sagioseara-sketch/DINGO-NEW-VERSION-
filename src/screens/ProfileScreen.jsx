// src/screens/ProfileScreen.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { updateUser } from '../firebase/userService';
import { logout } from '../firebase/auth';
import { THEME_INFO, VOLUME_LEVELS, getSFX, setSFXTheme, setVolume, getVolumeLevel } from '../sounds/sfxThemes';
import { requestNotificationPermission } from '../firebase/notifications';

const AVATARS = ['🎯','🔥','⚡','💎','🤖','👾','🥷','🎮','🏆','🌀','💀','🎲','🦊','🐉','⭐','🎭','🌊','🦁','🌈','💥','🎪','🚀','🧊','🎸','👑','🦄'];
const COLORS  = ['#00ffcc','#ff2d55','#ffcc00','#7b61ff','#00b4ff','#ff6a00','#00ff88','#ff00ff','#ffffff','#f5a623'];

export default function ProfileScreen() {
  const { user, profile, refreshProfile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const [name,    setName]    = useState(profile?.displayName || '');
  const [avatar,  setAvatar]  = useState(profile?.avatar || '🎯');
  const [color,   setColor]   = useState(profile?.color  || '#00ffcc');
  const [sfxTheme, setSfx]    = useState(localStorage.getItem('sfxTheme') || 'classic');
  const [volLevel, setVolLevel] = useState(getVolumeLevel());
  const [saving,  setSaving]  = useState(false);
  const [saved,   setSaved]   = useState(false);
  const [notifStatus, setNotif] = useState('idle');
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (profile) {
      setName(profile.displayName || '');
      setAvatar(profile.avatar || '🎯');
      setColor(profile.color  || '#00ffcc');
    }
  }, [profile]);

  const save = async () => {
    if (!name.trim()) return;
    setSaving(true);
    await updateUser(user.uid, { displayName: name.trim(), avatar, color });
    await refreshProfile(user.uid);
    sfx.click?.();
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleSfxTheme = id => {
    setSFXTheme(id); setSfx(id);
    setTimeout(() => getSFX().click?.(), 50);
  };

  const handleVolume = id => {
    setVolume(id); setVolLevel(id);
    // Play a test sound at the new volume so the player hears the change immediately
    setTimeout(() => getSFX().click?.(), 30);
  };

  const handleLogout = async () => { await logout(); };

  const handleNotif = async () => {
    setNotif('requesting');
    const token = await requestNotificationPermission(user.uid);
    setNotif(token ? 'granted' : 'denied');
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', overflow:'hidden', background:'var(--bg)' }}>

      {/* ── Scrollable content ── */}
      <div style={{ flex:1, overflowY:'auto', overflowX:'hidden', WebkitOverflowScrolling:'touch', overscrollBehavior:'contain', padding:'14px 14px 24px', display:'flex', flexDirection:'column', alignItems:'center' }}>

        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:440, marginBottom:16, paddingTop:4 }}>
          <button className="btn btn-ghost" style={{ padding:'6px 12px', flexShrink:0 }} onClick={() => nav('/')}>← Back</button>
          <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:20, letterSpacing:2 }}>⚙️ PROFILE</span>
          <button onClick={() => setShowLogout(true)} style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:5, flexShrink:0, background:'rgba(255,45,85,0.1)', border:'2px solid var(--c2)', borderRadius:'var(--r)', padding:'6px 10px', fontSize:11, fontWeight:700, color:'var(--c2)', cursor:'pointer', WebkitTapHighlightColor:'transparent' }}>
            🚪 Sign Out
          </button>
        </div>

        {/* Avatar preview — name rendered in their chosen color */}
        <div style={{ fontSize:64, marginBottom:6, textAlign:'center' }}>{avatar}</div>
        <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:20, textAlign:'center', marginBottom:2, color: color }}>
          {name || 'Player'}
        </div>
        <div style={{ fontSize:11, color:'var(--ink3)', textAlign:'center', marginBottom:4 }}>{user?.email}</div>
        {/* Player UID badge */}
        {profile?.shortId && (
          <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'var(--panel)', border:'2px solid var(--edge2)', borderRadius:8, padding:'4px 12px', fontSize:11, marginBottom:16 }}>
            <span style={{ color:'var(--ink3)' }}>🪪 Player ID:</span>
            <span style={{ fontFamily:"'Black Han Sans',sans-serif", letterSpacing:2, color:'var(--c3)', fontSize:13 }}>#{profile.shortId}</span>
          </div>
        )}

        {/* Edit card */}
        <div className="card" style={{ maxWidth:440 }}>
          <div className="card-body">
            {/* Name */}
            <div style={{ marginBottom:16 }}>
              <div className="label">Display Name</div>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                maxLength={20} placeholder="Your name" enterKeyHint="done"
                onKeyDown={e => e.key === 'Enter' && e.target.blur()} />
            </div>
            {/* Avatar */}
            <div style={{ marginBottom:16 }}>
              <div className="label">Avatar</div>
              <div className="avatar-grid">
                {AVATARS.map(a => (
                  <div key={a} className={`avatar-opt ${avatar === a ? 'selected' : ''}`}
                    onClick={() => { setAvatar(a); sfx.click?.(); }}>{a}</div>
                ))}
              </div>
            </div>
            {/* Color */}
            <div>
              <div className="label">Name Color</div>
              <div className="color-row">
                {COLORS.map(c => (
                  <div key={c} className={`color-dot ${color === c ? 'selected' : ''}`}
                    style={{ background:c }}
                    onClick={() => { setColor(c); sfx.click?.(); }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        {profile && (
          <div style={{ width:'100%', maxWidth:440, marginTop:20 }}>
            <div className="section-head">📊 Your Stats</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8 }}>
              {[
                { label:'WINS',     val: profile.wins    || 0,  color:'var(--c1)' },
                { label:'LOSSES',   val: profile.losses  || 0,  color:'var(--c2)' },
                { label:'WIN RATE', val: `${profile.winRate || 0}%`, color:'var(--c3)' },
                { label:'STREAK',   val: `${profile.streak || 0}🔥`, color:'var(--c3)' },
                { label:'GAMES',    val: profile.total   || 0,  color:'var(--c4)' },
              ].map(s => (
                <div key={s.label} style={{ background:'var(--panel)', border:'2px solid var(--edge2)', borderRadius:'var(--r)', padding:'12px 0', textAlign:'center' }}>
                  <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:20, color:s.color }}>{s.val}</div>
                  <div style={{ fontSize:8, letterSpacing:2, textTransform:'uppercase', color:'var(--ink3)', fontWeight:700, marginTop:3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── VOLUME LEVELS ── */}
        <div style={{ width:'100%', maxWidth:440, marginTop:20 }}>
          <div className="section-head">🔊 Volume</div>
          <div style={{ display:'flex', gap:8 }}>
            {VOLUME_LEVELS.map(lvl => (
              <button key={lvl.id} onClick={() => handleVolume(lvl.id)}
                style={{
                  flex:1, padding:'10px 0', border:'2px solid',
                  borderColor: volLevel === lvl.id ? 'var(--c1)' : 'var(--edge2)',
                  background:  volLevel === lvl.id ? 'rgba(0,255,204,0.1)' : 'var(--panel)',
                  borderRadius:'var(--r)', cursor:'pointer',
                  display:'flex', flexDirection:'column', alignItems:'center', gap:4,
                  WebkitTapHighlightColor:'transparent',
                }}>
                <span style={{ fontSize:18 }}>{lvl.icon}</span>
                <span style={{ fontSize:9, fontWeight:700, letterSpacing:1, textTransform:'uppercase',
                  color: volLevel === lvl.id ? 'var(--c1)' : 'var(--ink3)' }}>
                  {lvl.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── SFX THEMES ── */}
        <div style={{ width:'100%', maxWidth:440, marginTop:20 }}>
          <div className="section-head">🎵 Sound Theme</div>
          <div className="sfx-grid">
            {THEME_INFO.map(t => (
              <div key={t.id} className={`sfx-opt ${sfxTheme === t.id ? 'active' : ''}`}
                onClick={() => handleSfxTheme(t.id)}>
                <div className="sfx-icon">{t.icon}</div>
                <div className="sfx-name">{t.name}</div>
                <div className="sfx-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div style={{ width:'100%', maxWidth:440, marginTop:20 }}>
          <div className="section-head">🔔 Notifications</div>
          <div className="card">
            <div className="card-body">
              <p style={{ fontSize:13, color:'var(--ink2)', marginBottom:12, lineHeight:1.6 }}>
                Get notified when friends challenge you or it's your turn.
              </p>
              <button className="btn btn-purple btn-full" onClick={handleNotif}
                disabled={notifStatus === 'requesting' || notifStatus === 'granted'}>
                {notifStatus === 'granted'    ? '✅ Notifications Enabled' :
                 notifStatus === 'denied'     ? '❌ Permission Denied' :
                 notifStatus === 'requesting' ? '⏳ Requesting…' : '🔔 Enable Notifications'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom sign out */}
        <div style={{ width:'100%', maxWidth:440, marginTop:24 }}>
          <button onClick={() => setShowLogout(true)} className="btn btn-full"
            style={{ background:'rgba(255,45,85,0.1)', border:'2px solid var(--c2)', color:'var(--c2)', fontSize:13 }}>
            🚪 Sign Out of DiNGo
          </button>
        </div>
      </div>

      {/* ── Sticky save bar ── */}
      <div style={{ flexShrink:0, background:'var(--panel)', borderTop:'2px solid var(--edge2)', padding:'10px 14px', paddingBottom:'calc(10px + env(safe-area-inset-bottom, 0px))', display:'flex', gap:10 }}>
        <button onClick={save} disabled={saving || !name.trim()}
          className="btn btn-primary btn-full" style={{ fontSize:15, padding:'14px 0' }}>
          {saved ? '✅ Profile Saved!' : saving ? '⏳ Saving…' : '💾 Save Profile'}
        </button>
      </div>

      {/* Logout confirm */}
      {showLogout && (
        <div style={{ position:'fixed', inset:0, zIndex:900, background:'rgba(0,0,0,0.88)', display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}
          onClick={() => setShowLogout(false)}>
          <div style={{ background:'var(--panel)', border:'2px solid var(--edge2)', borderRadius:'var(--r-lg)', padding:'28px 24px', width:'100%', maxWidth:300, textAlign:'center', boxShadow:'8px 8px 0 rgba(0,0,0,0.4)' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ fontSize:44, marginBottom:12 }}>🚪</div>
            <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, marginBottom:8 }}>Sign Out?</div>
            <div style={{ fontSize:13, color:'var(--ink2)', marginBottom:24, lineHeight:1.6 }}>You'll be taken back to the welcome screen.</div>
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={() => setShowLogout(false)} style={{ flex:1, padding:'12px 0', background:'var(--panel2)', border:'2px solid var(--edge2)', borderRadius:'var(--r)', fontWeight:700, fontSize:13, cursor:'pointer', color:'var(--ink)' }}>Cancel</button>
              <button onClick={handleLogout} style={{ flex:1, padding:'12px 0', background:'var(--c2)', border:'none', borderRadius:'var(--r)', fontWeight:700, fontSize:13, cursor:'pointer', color:'#fff' }}>Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
