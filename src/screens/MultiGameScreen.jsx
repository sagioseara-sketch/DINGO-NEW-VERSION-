// src/screens/MultiGameScreen.jsx
//
// REFRESH FIX:
// Previously the player's role was read exclusively from `useLocation().state`,
// which is a React Router in-memory value. On a hard refresh (F5 / mobile browser
// reload), navigation state is lost and the screen would show `role = 'p1'` for
// everyone — meaning p2 would see the wrong board and turn indicators.
//
// Fix: `useMemo` derives the role from the Firebase room data once it loads.
// `state?.role` is used as the initial hint (fast, available before Firebase responds)
// but the final authoritative role always comes from matching `user.uid` against
// `room.players.p1.uid` or `room.players.p2.uid` in Firebase.
//
// LEAVE ROOM FIX:
// The null-room loading state now shows a Back button so the player is never
// stuck on an infinite spinner if the room data can't be read.

import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  listenRoom, callNumber, missedTurn,
  setWinner, setTie, setPlayerExited,
  sendChatMessage, requestRematch,
} from '../firebase/roomService';
import { countLines } from '../game/aiLogic';
import GameBoard from '../game/GameBoard';
import WinOverlay from '../game/WinOverlay';
import { getSFX } from '../sounds/sfxThemes';
import { recordResult } from '../firebase/leaderboard';
import { saveMatch } from '../firebase/history';

const WIN_LINES   = 5;
const MOVE_TIME   = 30;
const MAX_CHANCES = 5;
const EMOJIS = ['👍','🔥','😂','😱','🎯','💀','🏆','😤','🤯','👏','😈','🫡','❤️','😎','🤑','💪'];
const LINE_COLORS = ['#00ffcc','#ff2d55','#ffcc00','#7b61ff','#ffffff'];

const LLs = [
  { id:'time',   icon:'⏰', tip:'+20s'  },
  { id:'hint',   icon:'💡', tip:'Hint'  },
  { id:'double', icon:'2️⃣', tip:'Pick 2'},
  { id:'fifty',  icon:'🎯', tip:'50/50' },
  { id:'shield', icon:'🛡️', tip:'Shield'},
];

function TimerRing({ timeLeft, maxTime = MOVE_TIME, size = 52, active }) {
  const r    = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const pct  = active ? Math.max(0, timeLeft / maxTime) : 1;
  const col  = timeLeft <= 5 ? '#ff2d55' : timeLeft <= 10 ? '#ffcc00' : '#00ffcc';
  return (
    <svg width={size} height={size} style={{ position:'absolute', top:0, left:0, pointerEvents:'none' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={4} />
      {active && (
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={col} strokeWidth={4}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
          strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition:'stroke-dashoffset 1s linear, stroke 0.4s' }} />
      )}
    </svg>
  );
}

function Chances({ count, max = MAX_CHANCES }) {
  return (
    <div style={{ display:'flex', gap:2 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ fontSize:10, opacity: i < count ? 1 : 0.18 }}>❤️</span>
      ))}
    </div>
  );
}

export default function MultiGameScreen() {
  const { roomId }          = useParams();
  const { state }           = useLocation();
  const { user, profile }   = useAuth();
  const nav                 = useNavigate();
  const sfx                 = getSFX();

  // Role resolution: use location state as fast initial value, but override with
  // Firebase once the room loads. This fixes the refresh bug for p2 players.
  const stateRole = state?.role; // undefined on hard refresh

  const [room, setRoom]           = useState(null);
  const [timer, setTimer]         = useState(MOVE_TIME);
  const [winData, setWinData]     = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiCD, setEmojiCD]     = useState(false);
  const [cdSecs, setCdSecs]       = useState(0);
  const [myBubble, setMyBubble]   = useState('');
  const [oppBubble, setOppBubble] = useState('');
  const [lifelines, setLifelines] = useState({ time:true, hint:true, double:true, fifty:true, shield:true });
  const [doubleActive, setDouble] = useState(false);
  const [shieldActive, setShield] = useState(false);
  const [hints, setHints]         = useState([]);
  const [rematchState, setRematchState]     = useState({ p1:false, p2:false, newRoomId:null });
  const [rematchPending, setRematchPending] = useState(false);

  const winHandled = useRef(false);
  const startTime  = useRef(Date.now());
  const timerRef   = useRef(null);
  const cdRef      = useRef(null);
  const prevLines  = useRef(0);
  const bubbleRefs = useRef({});
  const lastMsgTs  = useRef(0);
  const myBoardRef = useRef(state?.board || []);

  // ── ROLE DERIVATION ──────────────────────────────────────────────────────────
  // Authoritative role comes from matching uid against Firebase players data.
  // Falls back to stateRole (pre-refresh) or 'p1' if both are unavailable.
  const role = useMemo(() => {
    if (!room || !user) return stateRole || 'p1';
    if (room.players?.p1?.uid === user.uid) return 'p1';
    if (room.players?.p2?.uid === user.uid) return 'p2';
    return stateRole || 'p1'; // Shouldn't reach here in practice
  }, [room, user, stateRole]);

  const oppRole = role === 'p1' ? 'p2' : 'p1';

  // Derived state from Firebase room
  const gs            = room?.gameState;
  const calledNumbers = gs?.calledNumbers      || [];
  const myBoard       = gs?.[`${role}Board`]   || myBoardRef.current;
  const oppBoard      = gs?.[`${oppRole}Board`] || [];
  const myLines       = gs?.[`${role}Lines`]   || 0;
  const oppLines      = gs?.[`${oppRole}Lines`] || 0;
  const myChances     = gs?.[`${role}Chances`]  ?? MAX_CHANCES;
  const oppChances    = gs?.[`${oppRole}Chances`] ?? MAX_CHANCES;
  const isMyTurn      = gs?.turn === role;
  const oppData       = room?.players?.[oppRole];
  const myData        = room?.players?.[role];

  // ── Room listener ─────────────────────────────────────────────────────────
  useEffect(() => {
    const unsub = listenRoom(roomId, data => {
      setRoom(data);
      if (!data?.gameState) return;
      const gs2 = data.gameState;

      // Watch rematch.newRoomId — when p1 creates the rematch room, p2 navigates here
      if (data.rematch) {
        setRematchState(data.rematch);
        if (data.rematch.newRoomId && winHandled.current) {
          const freshBoard = myBoardRef.current.length === 25
            ? myBoardRef.current
            : Array.from({ length: 25 }, (_, i) => i + 1);
          unsub();
          nav(`/game/${data.rematch.newRoomId}`, {
            state: { role, board: freshBoard },
            replace: true,
          });
          return;
        }
      }

      // Chat bubbles
      if (data.chat) {
        const msgs = Object.values(data.chat).sort((a, b) => (a.ts||0) - (b.ts||0));
        const last = msgs[msgs.length - 1];
        if (last && (last.ts||0) > lastMsgTs.current && (Date.now() - (last.ts||0)) < 8000) {
          lastMsgTs.current = last.ts;
          if (last.sender === role) {
            setMyBubble(last.text);
            clearTimeout(bubbleRefs.current.my);
            bubbleRefs.current.my = setTimeout(() => setMyBubble(''), 4000);
          } else {
            setOppBubble(last.text);
            sfx.ping?.();
            clearTimeout(bubbleRefs.current.opp);
            bubbleRefs.current.opp = setTimeout(() => setOppBubble(''), 4000);
          }
        }
      }

      // Win / tie
      if ((gs2.winner || gs2.tie) && !winHandled.current) {
        winHandled.current = true;
        clearInterval(timerRef.current);
        const isTie = !!gs2.tie;
        const iWon  = gs2.winner === role;
        setWinData({
          won:   isTie ? null : iWon,
          tie:   isTie,
          title: isTie ? "🤝 IT'S A TIE!" : iWon ? '🎉 YOU WIN!' : '😔 YOU LOST!',
          sub:   isTie
            ? 'Both earn a point!'
            : iWon
              ? ['Domination! 👑','Flawless! ⚡','Champion! 🏆'][Math.floor(Math.random()*3)]
              : ['GG, rematch? 💪','They got lucky 😤','Next time! 🤝'][Math.floor(Math.random()*3)],
        });
        iWon || isTie ? sfx.win?.() : sfx.lose?.();
        handleMatchEnd(isTie, iWon, gs2, data);
      }

      if (gs2[`${oppRole}Exited`] && !winHandled.current) {
        winHandled.current = true;
        clearInterval(timerRef.current);
        setWinData({ won:true, tie:false, title:'🏆 OPPONENT LEFT', sub:'You win by default!' });
        sfx.win?.();
      }
    });
    return () => { unsub(); clearInterval(timerRef.current); clearInterval(cdRef.current); };
  }, [roomId]); // role not in deps — derived from room data, not stale closure

  // Line sound effect
  useEffect(() => {
    if (myLines > prevLines.current) { sfx.line?.(); prevLines.current = myLines; }
  }, [myLines]);

  // Keep myBoardRef in sync with Firebase board once loaded
  useEffect(() => {
    if (myBoard.length === 25) myBoardRef.current = myBoard;
  }, [myBoard]);

  // Timer
  useEffect(() => {
    if (!gs?.turnStartedAt || winData) return;
    clearInterval(timerRef.current);
    const elapsed = Math.floor((Date.now() - gs.turnStartedAt) / 1000);
    const init    = Math.max(0, MOVE_TIME - elapsed);
    setTimer(init);
    timerRef.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          if (isMyTurn && !winData && !winHandled.current) {
            shieldActive ? (setShield(false), setTimer(MOVE_TIME)) : handleAutoTimeout();
          }
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [gs?.turnStartedAt, gs?.turn]);

  const handleAutoTimeout = async () => {
    const uncalled = Array.from({ length:25 }, (_, i) => i+1).filter(n => !calledNumbers.includes(n));
    if (uncalled.length === 0) return;
    const pick = uncalled[Math.floor(Math.random() * uncalled.length)];
    const newCalled = [...calledNumbers, pick];
    const p1B = role === 'p1' ? myBoard : oppBoard;
    const p2B = role === 'p2' ? myBoard : oppBoard;
    const nP1 = countLines(p1B, newCalled);
    const nP2 = countLines(p2B, newCalled);
    const newChances = myChances - 1;
    if (newChances <= 0) { await setWinner(roomId, oppRole); return; }
    if (nP1 >= WIN_LINES && nP2 >= WIN_LINES) { await setTie(roomId); return; }
    if (nP1 >= WIN_LINES) { await setWinner(roomId, 'p1'); return; }
    if (nP2 >= WIN_LINES) { await setWinner(roomId, 'p2'); return; }
    await missedTurn(roomId, role, newCalled, nP1, nP2, newChances);
  };

  const handlePick = async (num) => {
    if (winData || winHandled.current) return;
    if (!isMyTurn && !doubleActive) return;
    if (calledNumbers.includes(num)) return;
    if (myBoard.length === 0) return;
    clearInterval(timerRef.current);
    setHints([]);
    sfx.cross?.();
    const newCalled = [...calledNumbers, num];
    const p1B = role === 'p1' ? myBoard : oppBoard;
    const p2B = role === 'p2' ? myBoard : oppBoard;
    const nP1 = countLines(p1B.length ? p1B : myBoard, newCalled);
    const nP2 = countLines(p2B.length ? p2B : [], newCalled);
    if (doubleActive) { setDouble(false); await callNumber(roomId, role, newCalled, nP1, nP2, true); return; }
    if (!winHandled.current) {
      if (nP1 >= WIN_LINES && nP2 >= WIN_LINES) { await callNumber(roomId, role, newCalled, nP1, nP2, false); await setTie(roomId); return; }
      if (nP1 >= WIN_LINES) { await callNumber(roomId, role, newCalled, nP1, nP2, false); await setWinner(roomId, 'p1'); return; }
      if (nP2 >= WIN_LINES) { await callNumber(roomId, role, newCalled, nP1, nP2, false); await setWinner(roomId, 'p2'); return; }
    }
    await callNumber(roomId, role, newCalled, nP1, nP2, false);
  };

  const useLifeline = (id) => {
    if (!lifelines[id] || !isMyTurn || !!winData) return;
    sfx.click?.();
    setLifelines(prev => ({ ...prev, [id]: false }));
    if (id === 'time')   setTimer(t => t + 20);
    if (id === 'shield') setShield(true);
    if (id === 'double') setDouble(true);
    if (id === 'hint' || id === 'fifty') {
      const uncalled = myBoard.filter(n => !calledNumbers.includes(n));
      const scored   = uncalled
        .map(n => ({ n, lines: countLines(myBoard, [...calledNumbers, n]) }))
        .sort((a, b) => b.lines - a.lines);
      setHints(scored.slice(0, id === 'fifty' ? 2 : 1).map(s => s.n));
      setTimeout(() => setHints([]), 7000);
    }
  };

  const handleEmoji = async (em) => {
    if (emojiCD) return;
    await sendChatMessage(roomId, { text:em, isEmoji:true, sender:role, senderName:profile?.displayName||'Me' });
    setShowEmoji(false);
    setEmojiCD(true);
    let s = 3; setCdSecs(s);
    cdRef.current = setInterval(() => {
      s--; setCdSecs(s);
      if (s <= 0) { clearInterval(cdRef.current); setEmojiCD(false); setCdSecs(0); }
    }, 1000);
  };

  const handleMatchEnd = async (isTie, iWon, gs2, roomData) => {
    if (!user) return;
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    try {
      await recordResult(user.uid, isTie ? false : iWon);
      const p1 = roomData?.players?.p1;
      const p2 = roomData?.players?.p2;
      // Only p1 saves the match record to avoid duplicates
      if (p1 && p2 && role === 'p1') {
        await saveMatch({
          p1Uid:   p1.uid,    p2Uid:  p2.uid,
          p1Name:  p1.name,   p2Name: p2.name,
          winner:  isTie ? null : gs2.winner === 'p1' ? p1.uid : p2.uid,
          p1Lines: gs2.p1Lines, p2Lines: gs2.p2Lines,
          duration, mode: 'multiplayer',
        });
      }
    } catch (e) { console.error('matchEnd error:', e); }
  };

  const handleRematch = async () => {
    if (rematchPending) return;
    setRematchPending(true);
    const myPlayerData = {
      uid:    user?.uid,
      name:   profile?.displayName || 'Player',
      avatar: profile?.avatar      || '🎯',
      role,
    };
    try {
      const newId = await requestRematch(roomId, role, myBoardRef.current, myPlayerData);
      if (newId) {
        nav(`/game/${newId}`, { state: { role: 'p1', board: myBoardRef.current }, replace: true });
      }
      // null → wait for opponent to create — listenRoom above will fire when they do
    } catch (e) {
      console.error('Rematch error:', e);
      setRematchPending(false);
    }
  };

  const handleLeave = async () => {
    clearInterval(timerRef.current);
    await setPlayerExited(roomId, role).catch(() => {});
    nav('/');
  };

  // ── Loading state: room data not yet arrived ──────────────────────────────
  // Show a back button so the player is never stuck if the room is gone
  if (!room) return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh', gap:14, background:'var(--bg)' }}>
      <div className="spinner" />
      <div style={{ fontSize:13, color:'var(--ink2)' }}>Connecting to room…</div>
      <button className="btn btn-ghost" style={{ marginTop:8 }} onClick={() => nav('/')}>
        ← Back to Home
      </button>
    </div>
  );

  // ── Waiting for p2 to join (only p1 sees this) ────────────────────────────
  if (gs?.status === 'waiting') return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh', gap:14, background:'var(--bg)' }}>
      <div className="spinner" />
      <div style={{ fontSize:13, color:'var(--ink2)' }}>Waiting for opponent…</div>
      <button className="btn btn-ghost" onClick={handleLeave}>
        🚪 Cancel & Leave
      </button>
    </div>
  );

  const AV = 48;

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', overflow:'hidden', background:'var(--bg)' }}>

      {/* ── COMPACT HEADER ──────────────────────────────────────── */}
      <div style={{ background:'var(--panel)', borderBottom:'2px solid var(--edge2)', padding:'6px 8px', flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'flex-start', gap:4 }}>

          {/* MY SIDE */}
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:'flex', alignItems:'center', gap:5 }}>
              <div style={{ position:'relative', width:AV, height:AV, flexShrink:0 }}>
                <div style={{ width:AV, height:AV, borderRadius:'50%', background:'var(--panel2)', border:`2px solid ${isMyTurn ? 'var(--c1)' : 'var(--edge)'}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, transition:'border-color 0.3s' }}>
                  {myData?.avatar || profile?.avatar || '🎯'}
                </div>
                <TimerRing timeLeft={timer} size={AV} active={isMyTurn && !winData} />
                {shieldActive && <div style={{ position:'absolute', bottom:-2, right:-2, fontSize:10 }}>🛡️</div>}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:800, fontSize:11, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxWidth:70 }}>
                  {myData?.name || profile?.displayName || 'You'}
                </div>
                <div style={{ fontSize:10, color:'var(--ink2)' }}>{myLines}/{WIN_LINES}</div>
                {isMyTurn && !winData && <div style={{ fontSize:8, fontWeight:800, color:'var(--c1)', letterSpacing:1 }}>{doubleActive ? '2️⃣ Pick 2nd' : `${timer}s`}</div>}
              </div>
            </div>
            {myBubble && <div style={{ marginTop:3, fontSize:14, background:'rgba(0,255,204,0.1)', border:'1px solid rgba(0,255,204,0.3)', borderRadius:8, padding:'2px 6px', display:'inline-block' }}>{myBubble}</div>}
            <div style={{ display:'flex', gap:2, marginTop:3, flexWrap:'wrap' }}>
              {LLs.map(ll => (
                <button key={ll.id} onClick={() => useLifeline(ll.id)} disabled={!lifelines[ll.id] || !isMyTurn || !!winData} title={ll.tip}
                  style={{ fontSize:12, padding:'2px 3px', background: lifelines[ll.id] ? 'var(--panel2)' : 'transparent', border:`2px solid ${lifelines[ll.id] ? 'var(--edge2)' : 'transparent'}`, borderRadius:4, cursor: lifelines[ll.id] && isMyTurn ? 'pointer' : 'default', opacity: lifelines[ll.id] ? (isMyTurn ? 1 : 0.35) : 0.1, WebkitTapHighlightColor:'transparent' }}>
                  {ll.icon}
                </button>
              ))}
            </div>
            <div style={{ marginTop:2 }}><Chances count={myChances} /></div>
          </div>

          {/* CENTER SCORE */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flexShrink:0, minWidth:44, paddingTop:2 }}>
            <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:20, lineHeight:1 }}>
              <span style={{ color:'var(--c1)' }}>{myLines}</span>
              <span style={{ color:'var(--ink3)', margin:'0 1px' }}>:</span>
              <span style={{ color:'var(--c2)' }}>{oppLines}</span>
            </div>
            <div style={{ fontSize:7, letterSpacing:1.5, textTransform:'uppercase', color:'var(--ink3)', fontWeight:700 }}>#{roomId}</div>
          </div>

          {/* OPP SIDE */}
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:'flex', alignItems:'center', gap:5, flexDirection:'row-reverse' }}>
              <div style={{ position:'relative', width:AV, height:AV, flexShrink:0 }}>
                <div style={{ width:AV, height:AV, borderRadius:'50%', background:'var(--panel2)', border:`2px solid ${!isMyTurn ? 'var(--c2)' : 'var(--edge)'}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, transition:'border-color 0.3s' }}>
                  {oppData?.avatar || '🎯'}
                </div>
                <TimerRing timeLeft={timer} size={AV} active={!isMyTurn && !winData} />
              </div>
              <div style={{ flex:1, minWidth:0, textAlign:'right' }}>
                <div style={{ fontWeight:800, fontSize:11, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxWidth:70, marginLeft:'auto' }}>
                  {oppData?.name || 'Opponent'}
                </div>
                <div style={{ fontSize:10, color:'var(--ink2)' }}>{oppLines}/{WIN_LINES}</div>
                {!isMyTurn && !winData && <div style={{ fontSize:8, fontWeight:800, color:'var(--c2)', letterSpacing:1 }}>{timer}s</div>}
              </div>
            </div>
            {oppBubble && <div style={{ marginTop:3, fontSize:14, background:'rgba(255,45,85,0.1)', border:'1px solid rgba(255,45,85,0.3)', borderRadius:8, padding:'2px 6px', display:'flex', justifyContent:'flex-end' }}>{oppBubble}</div>}
            <div style={{ display:'flex', gap:2, marginTop:3, justifyContent:'flex-end' }}>
              {LLs.map(ll => <div key={ll.id} style={{ fontSize:12, padding:'2px 3px', background:'var(--panel2)', border:'2px solid var(--edge)', borderRadius:4, opacity:0.2 }}>{ll.icon}</div>)}
            </div>
            <div style={{ marginTop:2, display:'flex', justifyContent:'flex-end' }}><Chances count={oppChances} /></div>
          </div>
        </div>
      </div>

      {/* ── BOARD ───────────────────────────────────────────────── */}
      <div style={{ flex:1, overflow:'hidden', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'4px 8px' }}>
        <div style={{ marginBottom:5, textAlign:'center' }}>
          <div style={{ fontSize:11, color:'var(--ink2)' }}>
            {winData ? '🏁 Game Over' : isMyTurn ? '👆 Your turn — tap to call a number' : '⏳ Opponent choosing…'}
          </div>
          <div style={{ fontSize:10, color:'var(--ink3)', marginTop:1 }}>{calledNumbers.length}/25 called</div>
          {hints.length > 0 && <div style={{ fontSize:11, color:'var(--c3)', marginTop:2, fontWeight:700 }}>💡 Try: {hints.join(' or ')}</div>}
          {doubleActive && <div style={{ fontSize:11, color:'var(--c3)', fontWeight:800, marginTop:2, animation:'blink 0.8s infinite' }}>2️⃣ PICK YOUR 2ND!</div>}
        </div>

        <GameBoard
          board={myBoard}
          selected={calledNumbers}
          onCellClick={handlePick}
          disabled={(!isMyTurn && !doubleActive) || !!winData || myBoard.length === 0}
          highlightCells={hints}
        />

        <div style={{ marginTop:8, display:'flex', gap:4, alignItems:'center' }}>
          {Array.from({ length: WIN_LINES }).map((_, i) => (
            <div key={i} style={{ width:28, height:6, borderRadius:3, background: i < myLines ? LINE_COLORS[Math.min(i, 4)] : 'var(--edge)', boxShadow: i < myLines ? `0 0 6px ${LINE_COLORS[i]}88` : 'none', transition:'all 0.4s' }} />
          ))}
          <span style={{ fontSize:10, color:'var(--ink2)', marginLeft:3 }}>{myLines}/{WIN_LINES}</span>
        </div>
      </div>

      {/* ── BOTTOM BAR — leave button always visible for BOTH players ── */}
      <div style={{ background:'var(--panel)', borderTop:'2px solid var(--edge2)', padding:'5px 8px', flexShrink:0 }}>
        {showEmoji && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:3, justifyContent:'center', paddingBottom:5 }}>
            {EMOJIS.map(em => (
              <button key={em} onClick={() => handleEmoji(em)} disabled={emojiCD}
                style={{ fontSize:19, background:'none', border:'none', cursor:'pointer', padding:'2px 3px', borderRadius:4, opacity:emojiCD?0.3:1, WebkitTapHighlightColor:'transparent' }}>
                {em}
              </button>
            ))}
          </div>
        )}
        <div style={{ display:'flex', alignItems:'center', gap:6 }}>
          <button onClick={() => !emojiCD && setShowEmoji(o => !o)} disabled={emojiCD}
            style={{ background:'var(--panel2)', border:'2px solid var(--edge2)', borderRadius:'var(--r)', padding:'6px 10px', fontSize:11, fontWeight:700, color:emojiCD?'var(--ink3)':'var(--ink)', cursor:emojiCD?'not-allowed':'pointer', WebkitTapHighlightColor:'transparent' }}>
            {emojiCD ? `⏱${cdSecs}s` : showEmoji ? '✕' : '😊'}
          </button>
          <div style={{ flex:1 }} />
          {/* Leave Room button — always visible for BOTH p1 and p2 */}
          <button onClick={handleLeave}
            style={{ background:'transparent', border:'2px solid var(--c2)', borderRadius:'var(--r)', padding:'6px 12px', fontSize:11, fontWeight:700, color:'var(--c2)', cursor:'pointer', WebkitTapHighlightColor:'transparent' }}>
            🚪 Leave Room
          </button>
        </div>
      </div>

      {/* ── WIN OVERLAY ─────────────────────────────────────────── */}
      <WinOverlay
        show={!!winData}
        isWin={winData?.won}
        tie={winData?.tie}
        title={winData?.title}
        sub={rematchPending ? '⏳ Waiting for opponent to accept rematch…' : winData?.sub}
        onPlayAgain={handleRematch}
        onHome={handleLeave}
        showPlayAgain={!rematchPending || !rematchState.newRoomId}
      />
    </div>
  );
}
