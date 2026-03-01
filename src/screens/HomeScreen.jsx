// src/screens/HomeScreen.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getSFX } from '../sounds/sfxThemes';
import { goOnline, listenOnlineCount, joinQueue, leaveQueue, listenForMatch } from '../firebase/matchmaking';
import { genRandomBoard } from '../game/aiLogic';

const MODES = [
  { icon: '🤖', title: 'vs Bot',      sub: '6 AI levels',     path: '/bot' },
  { icon: '⚡', title: 'Create Room', sub: 'Invite a friend',  path: '/room/create' },
  { icon: '🔗', title: 'Join Room',   sub: 'Enter room code',  path: '/room/join' },
  { icon: '🏆', title: 'Leaderboard', sub: 'Top players',      path: '/leaderboard' },
  { icon: '👥', title: 'Friends',     sub: 'Add & challenge',  path: '/friends' },
  { icon: '📊', title: 'History',     sub: 'Past games',       path: '/history' },
];

export default function HomeScreen() {
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();
  const [onlineCount, setOnlineCount] = useState(0);
  const [matchmaking, setMatchmaking] = useState(false);
  const [searchSecs, setSearchSecs]   = useState(0);
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

  // Cleanup matchmaking on unmount
  useEffect(() => {
    return () => {
      if (user?.uid) leaveQueue(user.uid);
      clearInterval(searchTimer.current);
      if (qUnsubRef.current) qUnsubRef.current();
    };
  }, [user?.uid]);

  const handlePlayNow = async () => {
    if (matchmaking) {
      // Cancel
      leaveQueue(user.uid);
      if (qUnsubRef.current) { qUnsubRef.current(); qUnsubRef.current = null; }
      clearInterval(searchTimer.current);
      setMatchmaking(false);
      setSearchSecs(0);
      return;
    }
    sfx.click();
    const board = genRandomBoard();
    boardRef.current = board;
    setMatchmaking(true);
    setSearchSecs(0);

    // Search timer
    searchTimer.current = setInterval(() => setSearchSecs(s => s + 1), 1000);

    await joinQueue(user.uid, profile?.displayName || 'Player', profile?.avatar || '🎯', board);

    const unsub = listenForMatch(
      user.uid,
      profile?.displayName || 'Player',
      profile?.avatar || '🎯',
      board,
      (roomId, role) => {
        clearInterval(searchTimer.current);
        setMatchmaking(false);
        nav(`/game/${roomId}`, { state: { role, board, roomData: null } });
      }
    );
    qUnsubRef.current = unsub;
  };

  const go = path => { sfx.click(); nav(path); };

  return (
    <div className="screen" style={{ paddingTop: 14, paddingBottom: 80 }}>

      {/* ── Top bar ── */}
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 440, marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 30, letterSpacing: 1, lineHeight: 1 }}>DiNGo</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c1)', display: 'inline-block', animation: 'blink 1.4s infinite' }} />
            <span style={{ fontSize: 10, color: 'var(--c1)', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              {onlineCount} Online
            </span>
          </div>
        </div>

        {/* Profile button */}
        <button
          onClick={() => go('/profile')}
          style={{
            marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8,
            background: 'var(--panel)', border: '2px solid var(--edge2)',
            borderRadius: 10, padding: '7px 10px', cursor: 'pointer'
          }}>
          <span style={{ fontSize: 26 }}>{profile?.avatar || '🎯'}</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: 12, maxWidth: 90, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {profile?.displayName || 'Player'}
            </div>
            <div style={{ fontSize: 10, color: 'var(--c1)' }}>
              {profile?.wins || 0}W &nbsp;·&nbsp; {profile?.streak || 0}🔥
            </div>
          </div>
          <span style={{ fontSize: 11, color: 'var(--ink3)', marginLeft: 2 }}>✏️</span>
        </button>
      </div>

      {/* ── Play Now ── */}
      <div style={{ width: '100%', maxWidth: 440, marginBottom: 18 }}>
        <button
          onClick={handlePlayNow}
          style={{
            width: '100%', padding: '15px 20px',
            background: matchmaking ? 'var(--c2)' : 'var(--c1)',
            border: 'none', borderRadius: 'var(--r)',
            fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800,
            fontSize: 15, letterSpacing: 1.5, textTransform: 'uppercase',
            color: '#000', cursor: 'pointer',
            boxShadow: matchmaking ? '4px 4px 0 rgba(255,45,85,0.3)' : '4px 4px 0 rgba(0,255,204,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
          }}>
          {matchmaking ? (
            <>
              <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span>
              Searching… {searchSecs}s — Tap to Cancel
            </>
          ) : '⚡ PLAY NOW — Auto Match'}
        </button>
        {matchmaking && (
          <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--ink2)', marginTop: 7, letterSpacing: 0.5 }}>
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

      {/* ── Stats ── */}
      <div style={{ marginTop: 18, width: '100%', maxWidth: 440, display: 'flex', gap: 8 }}>
        {[
          { label: 'WINS',   val: profile?.wins   || 0, color: 'var(--c1)' },
          { label: 'LOSSES', val: profile?.losses || 0, color: 'var(--c2)' },
          { label: 'STREAK', val: `${profile?.streak || 0}🔥`, color: 'var(--c3)' }
        ].map(s => (
          <div key={s.label} style={{
            flex: 1, background: 'var(--panel)', border: '2px solid var(--edge2)',
            borderRadius: 'var(--r)', padding: '10px 0', textAlign: 'center'
          }}>
            <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink3)', fontWeight: 700, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
