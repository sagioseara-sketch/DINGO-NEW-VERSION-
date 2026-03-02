// src/components/InviteBanner.jsx
//
// A floating overlay that appears on ANY screen when a friend sends a match invite.
// It sits at the top of the React tree (inside App.jsx) so it renders regardless
// of which route the user is currently on.
//
// The banner shows:
//   - Friend's avatar + name
//   - A live countdown ring (45 seconds)
//   - Accept button → joins room, navigates to game
//   - Decline button → removes the invite record
//
// When the countdown reaches 0, the invite is auto-declined and the banner closes.

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { listenInvites, declineInvite } from '../firebase/invites';
import { joinRoom } from '../firebase/roomService';
import { genRandomBoard } from '../game/aiLogic';
import { getSFX } from '../sounds/sfxThemes';

const DURATION = 45; // seconds, must match INVITE_EXPIRY_MS / 1000

export default function InviteBanner() {
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const [invite,    setInvite]   = useState(null);
  const [timeLeft,  setTimeLeft] = useState(DURATION);
  const [accepting, setAccepting] = useState(false);

  const timerRef   = useRef(null);
  const inviteRef  = useRef(null); // keeps current invite in scope for the timer closure
  inviteRef.current = invite;

  // ── Listen for incoming invites ──────────────────────────────
  useEffect(() => {
    if (!user?.uid) return;
    const unsub = listenInvites(user.uid, incoming => {
      if (!incoming) { setInvite(null); return; }

      // Play a ping sound to alert the player
      sfx.ping?.();
      setInvite(incoming);
      setAccepting(false);

      // Calculate remaining time based on the server expiry timestamp
      const remaining = Math.max(0, Math.round((incoming.expiresAt - Date.now()) / 1000));
      setTimeLeft(remaining);

      // Start the countdown
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            // Auto-decline when time runs out
            if (inviteRef.current) {
              declineInvite(user.uid, inviteRef.current.id).catch(() => {});
              setInvite(null);
            }
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    });
    return () => { unsub(); clearInterval(timerRef.current); };
  }, [user?.uid]);

  const handleAccept = async () => {
    if (!invite || accepting) return;
    setAccepting(true);
    clearInterval(timerRef.current);
    try {
      const myBoard = genRandomBoard();
      const myData  = {
        uid:    user.uid,
        name:   profile?.displayName || 'Player',
        avatar: profile?.avatar || '🎯',
      };
      await joinRoom(invite.roomId, myData, myBoard);
      // Remove the invite record now that it's accepted
      await declineInvite(user.uid, invite.id);
      setInvite(null);
      // Navigate to the game as p2
      nav(`/game/${invite.roomId}`, { state: { role: 'p2', board: myBoard } });
    } catch (e) {
      console.error('Accept invite error:', e);
      setAccepting(false);
    }
  };

  const handleDecline = async () => {
    if (!invite) return;
    clearInterval(timerRef.current);
    await declineInvite(user.uid, invite.id).catch(() => {});
    setInvite(null);
  };

  if (!invite) return null;

  // Countdown ring: SVG arc that shrinks as time runs out
  const size   = 44;
  const r      = (size - 5) / 2;
  const circ   = 2 * Math.PI * r;
  const pct    = timeLeft / DURATION;
  const color  = timeLeft <= 10 ? '#ff2d55' : timeLeft <= 20 ? '#ffcc00' : '#00ffcc';

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 1000,
      background: 'rgba(0,0,0,0.88)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
      animation: 'toastIn 0.3s ease',
    }}>
      <div style={{
        background: 'var(--panel)',
        border: '2px solid var(--c1)',
        borderRadius: 20,
        padding: '28px 24px',
        width: '100%', maxWidth: 320,
        textAlign: 'center',
        boxShadow: '0 0 40px rgba(0,255,204,0.2), 8px 8px 0 rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Gradient top bar */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,var(--c1),var(--c4))' }} />

        {/* Countdown ring + avatar */}
        <div style={{ position:'relative', width:size, height:size, margin:'0 auto 16px' }}>
          <div style={{
            width:size, height:size, borderRadius:'50%',
            background:'var(--panel2)',
            border:'2px solid var(--edge2)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:22,
          }}>
            {invite.fromAvatar}
          </div>
          <svg width={size} height={size} style={{ position:'absolute', top:0, left:0, pointerEvents:'none' }}>
            <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={4} />
            <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={4}
              strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
              strokeLinecap="round"
              transform={`rotate(-90 ${size/2} ${size/2})`}
              style={{ transition:'stroke-dashoffset 1s linear, stroke 0.4s' }}
            />
          </svg>
          {/* Countdown number badge */}
          <div style={{
            position:'absolute', bottom:-4, right:-8,
            background: color, color:'#000',
            fontSize:10, fontWeight:800, borderRadius:10,
            padding:'1px 5px', fontFamily:"'Black Han Sans',sans-serif",
          }}>
            {timeLeft}s
          </div>
        </div>

        <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:18, letterSpacing:1.5, marginBottom:4 }}>
          ⚔️ MATCH INVITE
        </div>
        <div style={{ fontWeight:800, fontSize:16, marginBottom:4, color:'var(--ink)' }}>
          {invite.fromName}
        </div>
        <div style={{ fontSize:13, color:'var(--ink2)', marginBottom:24, lineHeight:1.6 }}>
          challenges you to a match!<br/>
          <span style={{ fontSize:11, color:color }}>
            Expires in {timeLeft}s
          </span>
        </div>

        <div style={{ display:'flex', gap:10 }}>
          <button onClick={handleDecline} style={{
            flex:1, padding:'12px 0',
            background:'var(--panel2)',
            border:'2px solid var(--edge2)',
            borderRadius:'var(--r)',
            fontWeight:700, fontSize:13, cursor:'pointer',
            color:'var(--ink2)',
            WebkitTapHighlightColor:'transparent',
          }}>
            ✕ Decline
          </button>
          <button onClick={handleAccept} disabled={accepting} style={{
            flex:2, padding:'12px 0',
            background:'var(--c1)', border:'none',
            borderRadius:'var(--r)',
            fontWeight:800, fontSize:13, cursor:'pointer',
            color:'#000',
            boxShadow:'3px 3px 0 rgba(0,255,204,0.3)',
            WebkitTapHighlightColor:'transparent',
            opacity: accepting ? 0.6 : 1,
          }}>
            {accepting ? '⏳ Joining…' : '⚔️ Accept!'}
          </button>
        </div>
      </div>
    </div>
  );
}
