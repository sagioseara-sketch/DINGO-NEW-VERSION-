// src/screens/HomeScreen.jsx
//
// CHANGES IN THIS VERSION:
//
// MATCH INVITE NOTIFICATIONS:
//   A real-time listener watches RTDB invites/{user.uid} for pending challenges
//   from friends. When one arrives, a notification strip appears below the
//   online count, showing the challenger's name/avatar with Accept and Decline
//   buttons. Accepting calls acceptMatchInvite() which joins the room as p2,
//   then navigates to the game screen. Declining removes the invite from RTDB.

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getSFX } from '../sounds/sfxThemes';
import { logout } from '../firebase/auth';
import { updateUser } from '../firebase/userService';
import { goOnline, listenOnlineCount, joinQueue, leaveQueue, listenForMatch } from '../firebase/matchmaking';
import {
  listenMatchInvites, acceptMatchInvite,
  declineMatchInvite, genRoomId,
} from '../firebase/roomService';
import { genRandomBoard } from '../game/aiLogic';

const MODES = [
  { icon: '🤖', title: 'vs Bot',      sub: '6 AI levels',    path: '/bot' },
  { icon: '⚡', title: 'Create Room', sub: 'Invite a friend', path: '/room/create' },
  { icon: '🔗', title: 'Join Room',   sub: 'Enter room code', path: '/room/join' },
  { icon: '🏆', title: 'Leaderboard', sub: 'Top players',     path: '/leaderboard' },
  { icon: '👥', title: 'Friends',     sub: 'Add & challenge', path: '/friends' },
  { icon: '📊', title: 'History',     sub: 'Past games',      path: '/history' },
];

const AVATARS = ['🎯','🔥','⚡','💎','🤖','👾','🥷','🎮','🏆','🌀','💀','🎲','🦊','🐉','⭐','🎭','🌊','🦁','🌈','💥','🎪','🚀','🧊','🎸','👑','🦄'];

export default function HomeScreen() {
  const { user, profile, refreshProfile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const [onlineCount, setOnlineCount]   = useState(0);
  const [matchmaking, setMatchmaking]   = useState(false);
  const [searchSecs,  setSearchSecs]    = useState(0);
  const [showLogout,  setShowLogout]    = useState(false);
  const [showEdit,    setShowEdit]      = useState(false);
  const [editName,    setEditName]      = useState('');
  const [editAvatar,  setEditAvatar]    = useState('');
  const [editSaving,  setEditSaving]    = useState(false);
  // Match invites: pending challenges from friends
  const [invites,     setInvites]       = useState([]);
  const [acceptingId, setAcceptingId]   = useState(null); // invite being accepted

  const qUnsubRef    = useRef(null);
  const searchTimer  = useRef(null);
  const boardRef     = useRef(null);
  const inviteUnsub  = useRef(null);

  // Start proper RTDB presence (uses .info/connected, not heartbeat)
  useEffect(() => {
    if (!user || !profile) return;
    const goOff = goOnline(user.uid, profile.displayName || 'Player', profile.avatar || '🎯');
    const unsub = listenOnlineCount(setOnlineCount);
    return () => { goOff(); unsub(); };
  }, [user?.uid, profile?.displayName]);

  // Listen for match invites from friends
  useEffect(() => {
    if (!user) return;
    const unsub = listenMatchInvites(user.uid, setInvites);
    inviteUnsub.current = unsub;
    return () => unsub();
  }, [user?.uid]);

  // Clean up queue on unmount
  useEffect(() => {
    return () => {
      if (user?.uid) leaveQueue(user.uid);
      clearInterval(searchTimer.current);
      if (qUnsubRef.current) qUnsubRef.current();
    };
  }, [user?.uid]);

  const openEdit = () => {
    setEditName(profile?.displayName || '');
    setEditAvatar(profile?.avatar || '🎯');
    setShowEdit(true);
  };

  const saveEdit = async () => {
    if (!editName.trim()) return;
    setEditSaving(true);
    await updateUser(user.uid, { displayName: editName.trim(), avatar: editAvatar });
    await refreshProfile(user.uid);
    setEditSaving(false);
    setShowEdit(false);
    sfx.click?.();
  };

  // ── Accept a match invite ──────────────────────────────────────────────────
  // Joins the waiting room as p2 (the room was created by the challenger).
  const handleAcceptInvite = async (invite) => {
    if (acceptingId) return; // Already processing one
    setAcceptingId(invite.id);
    try {
      const p2Board = genRandomBoard();
      const p2Data  = {
        uid:    user.uid,
        name:   profile?.displayName || 'Player',
        avatar: profile?.avatar      || '🎯',
      };
      const roomId = await acceptMatchInvite(user.uid, invite.id, p2Data, p2Board);
      sfx.click?.();
      nav(`/game/${roomId}`, { state: { role: 'p2', board: p2Board } });
    } catch (e) {
      console.error('Accept invite error:', e);
      // Invite may have expired (challenger left)
      setInvites(prev => prev.filter(i => i.id !== invite.id));
      setAcceptingId(null);
    }
  };

  const handleDeclineInvite = async (invite) => {
    await declineMatchInvite(user.uid, invite.id);
    setInvites(prev => prev.filter(i => i.id !== invite.id));
  };

  // ── Play Now (auto-match) ──────────────────────────────────────────────────
  const handlePlayNow = async () => {
    if (matchmaking) {
      leaveQueue(user.uid);
      if (qUnsubRef.current) { qUnsubRef.current(); qUnsubRef.current = null; }
      clearInterval(searchTimer.current);
      setMatchmaking(false); setSearchSecs(0);
      return;
    }
    sfx.click?.();
    const board = genRandomBoard();
    boardRef.current = board;
    setMatchmaking(true); setSearchSecs(0);
    searchTimer.current = setInterval(() => setSearchSecs(s => s + 1), 1000);
    await joinQueue(user.uid, profile?.displayName || 'Player', profile?.avatar || '🎯', board);
    const unsub = listenForMatch(
      user.uid, profile?.displayName || 'Player', profile?.avatar || '🎯', board,
      (roomId, role) => {
        clearInterval(searchTimer.current);
        setMatchmaking(false);
        nav(`/game/${roomId}`, { state: { role, board } });
      },
    );
    qUnsubRef.current = unsub;
  };

  const handleLogout = async () => {
    if (matchmaking) { leaveQueue(user.uid); if (qUnsubRef.current) qUnsubRef.current(); clearInterval(searchTimer.current); }
    await logout();
  };

  const go = path => { sfx.click?.(); nav(path); };

  const nameColor   = profile?.color || '#00ffcc';
  const displayName = profile?.displayName
    ? (profile.displayName.length > 10 ? profile.displayName.slice(0, 10) + '…' : profile.displayName)
    : 'Player';

  return (
    <div className="screen" style={{ paddingTop: 14, paddingBottom: 80 }}>

      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div style={{ display:'flex', alignItems:'center', width:'100%', maxWidth:440, marginBottom:18, gap:8 }}>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:30, letterSpacing:1, lineHeight:1 }}>DiNGo</div>
          <div style={{ display:'flex', alignItems:'center', gap:5, marginTop:2 }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--c1)', display:'inline-block', animation:'blink 1.4s infinite' }} />
            <span style={{ fontSize:10, color:'var(--c1)', fontWeight:700, letterSpacing:1.5, textTransform:'uppercase' }}>
              {onlineCount} Online
            </span>
          </div>
        </div>

        {/* Profile chip */}
        <button onClick={openEdit} style={{ display:'flex', alignItems:'center', gap:7, background:'var(--panel)', border:'2px solid var(--edge2)', borderRadius:10, padding:'6px 10px', cursor:'pointer', flexShrink:0, maxWidth:160, WebkitTapHighlightColor:'transparent' }}>
          <span style={{ fontSize:24, flexShrink:0 }}>{profile?.avatar || '🎯'}</span>
          <div style={{ textAlign:'left', overflow:'hidden' }}>
            <div style={{ fontWeight:700, fontSize:12, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', color: nameColor }}>
              {displayName}
            </div>
            <div style={{ fontSize:10, color:'var(--ink2)', whiteSpace:'nowrap' }}>
              {profile?.wins || 0}W · {profile?.streak || 0}🔥
            </div>
          </div>
          <span style={{ fontSize:10, color:'var(--ink3)', flexShrink:0 }}>✏️</span>
        </button>

        <button onClick={() => go('/profile')} title="Full Profile & Settings" style={{ width:36, height:36, borderRadius:8, flexShrink:0, background:'var(--panel)', border:'2px solid var(--edge2)', fontSize:16, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', WebkitTapHighlightColor:'transparent' }}>⚙️</button>
        <button onClick={() => setShowLogout(true)} title="Sign Out" style={{ width:36, height:36, borderRadius:8, flexShrink:0, background:'var(--panel)', border:'2px solid var(--edge2)', fontSize:16, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', WebkitTapHighlightColor:'transparent' }}>🚪</button>
      </div>

      {/* ── Player ID badge ─────────────────────────────────────── */}
      {profile?.shortId && (
        <div style={{ width:'100%', maxWidth:440, marginBottom:14 }}>
          <div
            onClick={() => navigator.clipboard?.writeText('#' + profile.shortId).then(() => {}).catch(() => {})}
            style={{ display:'inline-flex', alignItems:'center', gap:6, background:'var(--panel)', border:'2px solid var(--edge2)', borderRadius:8, padding:'4px 12px', fontSize:11, cursor:'pointer', WebkitTapHighlightColor:'transparent' }}
            title="Tap to copy Player ID">
            <span style={{ color:'var(--ink3)' }}>🪪 Player ID:</span>
            <span style={{ fontFamily:"'Black Han Sans',sans-serif", letterSpacing:2, color:'var(--c3)', fontSize:13 }}>
              #{profile.shortId}
            </span>
            <span style={{ fontSize:9, color:'var(--ink3)' }}>📋</span>
          </div>
        </div>
      )}

      {/* ── Match Invite Notifications ───────────────────────────── */}
      {invites.length > 0 && (
        <div style={{ width:'100%', maxWidth:440, marginBottom:14, display:'flex', flexDirection:'column', gap:8 }}>
          {invites.map(invite => (
            <div key={invite.id}
              style={{ background:'rgba(123,97,255,0.12)', border:'2px solid var(--c4)', borderRadius:'var(--r)', padding:'10px 12px', display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ fontSize:26, flexShrink:0 }}>{invite.fromAvatar || '🎯'}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:700, fontSize:13, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                  {invite.fromName || 'A friend'}
                </div>
                <div style={{ fontSize:11, color:'var(--ink2)' }}>🎮 Challenged you to a match!</div>
              </div>
              <button onClick={() => handleDeclineInvite(invite)}
                style={{ background:'none', border:'2px solid var(--edge2)', borderRadius:6, padding:'5px 8px', fontSize:11, color:'var(--ink3)', cursor:'pointer', flexShrink:0 }}>
                ✕
              </button>
              <button
                onClick={() => handleAcceptInvite(invite)}
                disabled={acceptingId === invite.id}
                style={{ background:'var(--c4)', color:'#fff', border:'none', borderRadius:7, padding:'8px 14px', fontWeight:700, fontSize:12, cursor:'pointer', flexShrink:0, WebkitTapHighlightColor:'transparent', opacity: acceptingId === invite.id ? 0.5 : 1 }}>
                {acceptingId === invite.id ? '⏳' : '✓ Accept'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ── Play Now ─────────────────────────────────────────────── */}
      <div style={{ width:'100%', maxWidth:440, marginBottom:18 }}>
        <button onClick={handlePlayNow} style={{
          width:'100%', padding:'15px 20px',
          background: matchmaking ? 'var(--c2)' : 'var(--c1)',
          border:'none', borderRadius:'var(--r)',
          fontFamily:"'Space Grotesk',sans-serif", fontWeight:800,
          fontSize:14, letterSpacing:1.5, textTransform:'uppercase',
          color:'#000', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center', gap:10,
          WebkitTapHighlightColor:'transparent',
        }}>
          {matchmaking
            ? <><span style={{ animation:'spin 1s linear infinite', display:'inline-block' }}>⏳</span> Searching… {searchSecs}s · Tap to Cancel</>
            : '⚡ PLAY NOW — Auto Match'}
        </button>
      </div>

      {/* ── Mode grid ────────────────────────────────────────────── */}
      <div className="menu-grid">
        {MODES.map(m => (
          <div key={m.path} className="menu-card" onClick={() => go(m.path)}>
            <div className="menu-icon">{m.icon}</div>
            <div className="menu-title">
              {m.title}
              {m.path === '/friends' && invites.length > 0 && (
                <span style={{ marginLeft:6, background:'var(--c2)', color:'#fff', borderRadius:'50%', width:16, height:16, fontSize:9, fontWeight:800, display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
                  {invites.length}
                </span>
              )}
            </div>
            <div className="menu-sub">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <div style={{ marginTop:18, width:'100%', maxWidth:440, display:'flex', gap:8 }}>
        {[
          { label:'WINS',   val: profile?.wins   || 0, color:'var(--c1)' },
          { label:'LOSSES', val: profile?.losses  || 0, color:'var(--c2)' },
          { label:'STREAK', val: `${profile?.streak || 0}🔥`, color:'var(--c3)' },
        ].map(s => (
          <div key={s.label} style={{ flex:1, background:'var(--panel)', border:'2px solid var(--edge2)', borderRadius:'var(--r)', padding:'10px 0', textAlign:'center' }}>
            <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, color:s.color }}>{s.val}</div>
            <div style={{ fontSize:8, letterSpacing:2, textTransform:'uppercase', color:'var(--ink3)', fontWeight:700, marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ══ QUICK EDIT SHEET ════════════════════════════════════════ */}
      {showEdit && (
        <div style={{ position:'fixed', inset:0, zIndex:800, background:'rgba(0,0,0,0.85)', display:'flex', alignItems:'flex-end', justifyContent:'center' }}
          onClick={() => setShowEdit(false)}>
          <div style={{ background:'var(--panel)', borderRadius:'20px 20px 0 0', border:'2px solid var(--edge2)', borderBottom:'none', width:'100%', maxWidth:480, maxHeight:'75vh', overflowY:'auto', WebkitOverflowScrolling:'touch' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ height:4, background:'linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))', borderRadius:'20px 20px 0 0' }} />
            <div style={{ padding:'16px 16px 32px' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
                <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:20, letterSpacing:2 }}>✏️ QUICK EDIT</span>
                <button onClick={() => setShowEdit(false)} style={{ background:'none', border:'2px solid var(--edge2)', color:'var(--ink2)', width:32, height:32, borderRadius:8, cursor:'pointer', fontSize:14, display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
              </div>
              <div style={{ textAlign:'center', fontSize:52, marginBottom:12 }}>{editAvatar}</div>
              <div style={{ marginBottom:14 }}>
                <div className="label">Display Name</div>
                <input type="text" value={editName} onChange={e => setEditName(e.target.value)}
                  maxLength={20} placeholder="Your name" enterKeyHint="done"
                  onKeyDown={e => e.key === 'Enter' && e.target.blur()} />
              </div>
              <div className="label" style={{ marginBottom:8 }}>Avatar</div>
              <div className="avatar-grid" style={{ marginBottom:16 }}>
                {AVATARS.map(a => (
                  <div key={a} className={`avatar-opt ${editAvatar === a ? 'selected' : ''}`}
                    onClick={() => { setEditAvatar(a); sfx.click?.(); }}>
                    {a}
                  </div>
                ))}
              </div>
              <button onClick={saveEdit} disabled={editSaving || !editName.trim()}
                className="btn btn-primary btn-full" style={{ fontSize:15, padding:'14px 0' }}>
                {editSaving ? '⏳ Saving…' : '💾 Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ LOGOUT CONFIRM ══════════════════════════════════════════ */}
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
