// src/screens/HomeScreen.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getSFX } from '../sounds/sfxThemes';
import { logout } from '../firebase/auth';
import { goOnline, listenOnlineCount, joinQueue, leaveQueue, listenForMatch } from '../firebase/matchmaking';
import { genRandomBoard } from '../game/aiLogic';

const MODES = [
  { icon: '🤖', title: 'vs Bot',      sub: '6 AI levels',    path: '/bot' },
  { icon: '⚡', title: 'Create Room', sub: 'Invite a friend', path: '/room/create' },
  { icon: '🔗', title: 'Join Room',   sub: 'Enter room code', path: '/room/join' },
  { icon: '🏆', title: 'Leaderboard', sub: 'Top players',     path: '/leaderboard' },
  { icon: '👥', title: 'Friends',     sub: 'Add & challenge', path: '/friends' },
  { icon: '📊', title: 'History',     sub: 'Past games',      path: '/history' },
];

export default function HomeScreen() {
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const [onlineCount, setOnlineCount] = useState(0);
  const [matchmaking, setMatchmaking] = useState(false);
  const [searchSecs, setSearchSecs]   = useState(0);
  const [showLogout, setShowLogout]   = useState(false);

  const qUnsubRef   = useRef(null);
  const searchTimer = useRef(null);
  const boardRef    = useRef(null);

  // Register online presence
  useEffect(() => {
    if (!user || !profile) return;
    const goOff = goOnline(user.uid, profile.displayName || 'Player', profile.avatar || '🎯');
    const unsub  = listenOnlineCount(setOnlineCount);
    return () => { goOff(); unsub(); };
  }, [user?.uid, profile?.displayName]);

  // Cleanup matchmaking if user leaves home screen
  useEffect(() => {
    return () => {
      if (user?.uid) leaveQueue(user.uid);
      clearInterval(searchTimer.current);
      if (qUnsubRef.current) qUnsubRef.current();
    };
  }, [user?.uid]);

  const handlePlayNow = async () => {
    if (matchmaking) {
      // Cancel search
      leaveQueue(user.uid);
      if (qUnsubRef.current) { qUnsubRef.current(); qUnsubRef.current = null; }
      clearInterval(searchTimer.current);
      setMatchmaking(false);
      setSearchSecs(0);
      return;
    }
    sfx.click && sfx.click();
    const board = genRandomBoard();
    boardRef.current = board;
    setMatchmaking(true);
    setSearchSecs(0);
    searchTimer.current = setInterval(() => setSearchSecs(s => s + 1), 1000);
    await joinQueue(user.uid, profile?.displayName || 'Player', profile?.avatar || '🎯', board);
    const unsub = listenForMatch(
      user.uid, profile?.displayName || 'Player', profile?.avatar || '🎯', board,
      (roomId, role) => {
        clearInterval(searchTimer.current);
        setMatchmaking(false);
        nav(`/game/${roomId}`, { state: { role, board } });
      }
    );
    qUnsubRef.current = unsub;
  };

  const handleLogout = async () => {
    if (matchmaking) {
      leaveQueue(user.uid);
      if (qUnsubRef.current) qUnsubRef.current();
      clearInterval(searchTimer.current);
    }
    await logout();
  };

  const go = path => { sfx.click && sfx.click(); nav(path); };

  // Truncate display name gracefully
  const displayName = profile?.displayName
    ? profile.displayName.length > 10 ? profile.displayName.slice(0, 10) + '…' : profile.displayName
    : 'Player';

  return (
    <div className="screen" style={{ paddingTop: 14, paddingBottom: 80 }}>

      {/* ── Top bar ── */}
      <div style={{ display:'flex', alignItems:'center', width:'100%', maxWidth:440, marginBottom:18, gap: 8 }}>
        {/* Logo */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:30, letterSpacing:1, lineHeight:1 }}>DiNGo</div>
          <div style={{ display:'flex', alignItems:'center', gap:5, marginTop:2 }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--c1)', display:'inline-block', animation:'blink 1.4s infinite' }} />
            <span style={{ fontSize:10, color:'var(--c1)', fontWeight:700, letterSpacing:1.5, textTransform:'uppercase' }}>
              {onlineCount} Online
            </span>
          </div>
        </div>

        {/* Profile button — fixed width, name truncated */}
        <button onClick={() => go('/profile')} style={{
          display:'flex', alignItems:'center', gap:7,
          background:'var(--panel)', border:'2px solid var(--edge2)',
          borderRadius:10, padding:'6px 10px', cursor:'pointer',
          flexShrink: 0, maxWidth: 160,
          WebkitTapHighlightColor:'transparent',
        }}>
          <span style={{ fontSize:24, flexShrink:0 }}>{profile?.avatar || '🎯'}</span>
          <div style={{ textAlign:'left', overflow:'hidden' }}>
            <div style={{ fontWeight:700, fontSize:12, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
              {displayName}
            </div>
            <div style={{ fontSize:10, color:'var(--c1)', whiteSpace:'nowrap' }}>
              {profile?.wins || 0}W · {profile?.streak || 0}🔥
            </div>
          </div>
          <span style={{ fontSize:11, color:'var(--ink3)', flexShrink:0 }}>✏️</span>
        </button>

        {/* Logout button */}
        <button onClick={() => setShowLogout(true)} title="Sign Out" style={{
          width:36, height:36, borderRadius:8, flexShrink:0,
          background:'var(--panel)', border:'2px solid var(--edge2)',
          fontSize:17, cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          WebkitTapHighlightColor:'transparent',
        }}>🚪</button>
      </div>

      {/* ── Play Now ── */}
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
        {matchmaking && (
          <div style={{ textAlign:'center', fontSize:12, color:'var(--ink2)', marginTop:6 }}>
            Finding an opponent for you…
          </div>
        )}
      </div>

      {/* ── Mode grid ── */}
      <div className="menu-grid">
        {MODES.map(m => (
          <div key={m.path} className="menu-card" onClick={() => go(m.path)}>
            <div className="menu-icon">{m.icon}</div>
            <div className="menu-title">{m.title}</div>
            <div className="menu-sub">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Stats strip ── */}
      <div style={{ marginTop:18, width:'100%', maxWidth:440, display:'flex', gap:8 }}>
        {[
          { label:'WINS',   val: profile?.wins   || 0, color:'var(--c1)' },
          { label:'LOSSES', val: profile?.losses  || 0, color:'var(--c2)' },
          { label:'STREAK', val: `${profile?.streak || 0}🔥`, color:'var(--c3)' },
        ].map(s => (
          <div key={s.label} style={{
            flex:1, background:'var(--panel)', border:'2px solid var(--edge2)',
            borderRadius:'var(--r)', padding:'10px 0', textAlign:'center',
          }}>
            <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, color:s.color }}>{s.val}</div>
            <div style={{ fontSize:8, letterSpacing:2, textTransform:'uppercase', color:'var(--ink3)', fontWeight:700, marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Logout confirm popup ── */}
      {showLogout && (
        <div style={{
          position:'fixed', inset:0, zIndex:900,
          background:'rgba(0,0,0,0.88)',
          display:'flex', alignItems:'center', justifyContent:'center', padding:20,
        }} onClick={() => setShowLogout(false)}>
          <div style={{
            background:'var(--panel)', border:'2px solid var(--edge2)',
            borderRadius:'var(--r-lg)', padding:'28px 24px',
            width:'100%', maxWidth:300, textAlign:'center',
            boxShadow:'8px 8px 0 rgba(0,0,0,0.4)',
          }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize:44, marginBottom:12 }}>🚪</div>
            <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, marginBottom:8 }}>Sign Out?</div>
            <div style={{ fontSize:13, color:'var(--ink2)', marginBottom:24, lineHeight:1.6 }}>
              You'll be taken back to the welcome screen.
            </div>
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={() => setShowLogout(false)} style={{
                flex:1, padding:'12px 0', background:'var(--panel2)',
                border:'2px solid var(--edge2)', borderRadius:'var(--r)',
                fontWeight:700, fontSize:13, cursor:'pointer', color:'var(--ink)',
              }}>Cancel</button>
              <button onClick={handleLogout} style={{
                flex:1, padding:'12px 0', background:'var(--c2)',
                border:'none', borderRadius:'var(--r)',
                fontWeight:700, fontSize:13, cursor:'pointer', color:'#fff',
              }}>Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
