// src/screens/MultiGameScreen.jsx
//
// NEW GAME LOGIC:
// - Both players share a single `calledNumbers` pool
// - On your turn you tap a number on YOUR board — it marks on BOTH boards
// - Lines are checked per-board (different layouts = different strategy)
// - First to 5 complete lines wins; simultaneous = TIE
// - Each player has 5 chances; missing a turn costs 1 chance
// - 0 chances left = opponent wins automatically

import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  listenRoom, callNumber, missedTurn,
  setWinner, setTie, setPlayerExited,
  sendChatMessage, requestRematch
} from '../firebase/roomService';
import { countLines, genRandomBoard } from '../game/aiLogic';
import GameBoard from '../game/GameBoard';
import WinOverlay from '../game/WinOverlay';
import { getSFX } from '../sounds/sfxThemes';
import { recordResult } from '../firebase/leaderboard';
import { saveMatch } from '../firebase/history';

const WIN_LINES  = 5;
const MOVE_TIME  = 30;
const MAX_CHANCES = 5;
const EMOJIS = ['👍','🔥','😂','😱','🎯','💀','🏆','😤','🤯','👏','😈','🫡','❤️','😎','🤑','💪'];

// ── Timer ring drawn as SVG arc ───────────────────────────────────
function TimerRing({ timeLeft, maxTime = MOVE_TIME, size = 60, active }) {
  const r    = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const pct  = active ? Math.max(0, timeLeft / maxTime) : 1;
  const off  = circ * (1 - pct);
  const col  = timeLeft <= 5 ? '#ff2d55' : timeLeft <= 10 ? '#ffcc00' : '#00ffcc';
  return (
    <svg width={size} height={size} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={4} />
      {active && (
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke={col} strokeWidth={4}
          strokeDasharray={circ} strokeDashoffset={off}
          strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.4s' }}
        />
      )}
    </svg>
  );
}

// ── Chances dots (hearts showing remaining lives) ─────────────────
function ChancesDots({ count, max = MAX_CHANCES }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ fontSize: 11, opacity: i < count ? 1 : 0.2 }}>❤️</span>
      ))}
    </div>
  );
}

// ── Lifeline definitions ──────────────────────────────────────────
const LLs = [
  { id: 'time',   icon: '⏰', tip: '+20s' },
  { id: 'hint',   icon: '💡', tip: 'Hint' },
  { id: 'double', icon: '2️⃣', tip: 'Pick 2' },
  { id: 'fifty',  icon: '🎯', tip: '50/50' },
  { id: 'shield', icon: '🛡️', tip: 'Shield' },
];

export default function MultiGameScreen() {
  const { roomId }  = useParams();
  const { state }   = useLocation();
  const { user, profile } = useAuth();
  const nav  = useNavigate();
  const sfx  = getSFX();

  const role    = state?.role || 'p1';
  const oppRole = role === 'p1' ? 'p2' : 'p1';
  // Each player has their own board layout (same 25 numbers, different positions)
  const myBoard  = useRef(state?.board || genRandomBoard()).current;

  const [room, setRoom]           = useState(null);
  const [timer, setTimer]         = useState(MOVE_TIME);
  const [winData, setWinData]     = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiCD, setEmojiCD]     = useState(false);
  const [cdSecs, setCdSecs]       = useState(0);
  const [myBubble, setMyBubble]   = useState('');
  const [oppBubble, setOppBubble] = useState('');
  const [lifelines, setLifelines] = useState({ time: true, hint: true, double: true, fifty: true, shield: true });
  const [doubleActive, setDouble] = useState(false);
  const [shieldActive, setShield] = useState(false);
  const [hints, setHints]         = useState([]);
  const [rematch, setRematch]     = useState({ p1: false, p2: false });
  const [lineFlash, setLineFlash] = useState(0);

  const winHandled  = useRef(false);
  const startTime   = useRef(Date.now());
  const timerRef    = useRef(null);
  const cdRef       = useRef(null);
  const prevLines   = useRef(0);
  const bubbleRefs  = useRef({});
  const lastMsgTs   = useRef(0);

  // Derived state from Firebase room
  const gs            = room?.gameState;
  const calledNumbers = gs?.calledNumbers  || [];
  const oppBoard      = gs?.[`${oppRole}Board`] || [];
  const myLines       = gs?.[`${role}Lines`]    || 0;
  const oppLines      = gs?.[`${oppRole}Lines`] || 0;
  const myChances     = gs?.[`${role}Chances`]    ?? MAX_CHANCES;
  const oppChances    = gs?.[`${oppRole}Chances`] ?? MAX_CHANCES;
  const isMyTurn      = gs?.turn === role;
  const oppData       = room?.players?.[oppRole];
  const myData        = room?.players?.[role];

  // ── Room listener ─────────────────────────────────────────────
  useEffect(() => {
    const unsub = listenRoom(roomId, data => {
      setRoom(data);
      if (!data?.gameState) return;
      const gs2 = data.gameState;

      if (data.rematch) setRematch(data.rematch);

      // Chat bubbles
      if (data.chat) {
        const msgs = Object.values(data.chat).sort((a, b) => (a.ts || 0) - (b.ts || 0));
        const last = msgs[msgs.length - 1];
        if (last && (last.ts || 0) > lastMsgTs.current && (Date.now() - (last.ts || 0)) < 8000) {
          lastMsgTs.current = last.ts;
          if (last.sender === role) {
            setMyBubble(last.text);
            clearTimeout(bubbleRefs.current.my);
            bubbleRefs.current.my = setTimeout(() => setMyBubble(''), 4000);
          } else {
            setOppBubble(last.text);
            sfx.ping && sfx.ping();
            clearTimeout(bubbleRefs.current.opp);
            bubbleRefs.current.opp = setTimeout(() => setOppBubble(''), 4000);
          }
        }
      }

      // Win / tie detection (handled from Firebase state, not locally)
      if ((gs2.winner || gs2.tie) && !winHandled.current) {
        winHandled.current = true;
        clearInterval(timerRef.current);
        const isTie = gs2.tie;
        const iWon  = gs2.winner === role;
        setWinData({
          won:  isTie ? null : iWon,
          tie:  isTie,
          title: isTie ? '🤝 IT\'S A TIE!' : iWon ? '🎉 YOU WIN!' : '😔 YOU LOST!',
          sub:   isTie ? 'Both of you get a point!'
                       : iWon ? ['Domination! 👑','Flawless! ⚡','Champion! 🏆'][Math.floor(Math.random()*3)]
                               : ['GG, rematch? 💪','They got lucky 😤','Next time! 🤝'][Math.floor(Math.random()*3)],
        });
        if (isTie) sfx.win && sfx.win();
        else iWon ? sfx.win() : sfx.lose();
        handleMatchEnd(isTie, gs2.winner === role, gs2);
      }

      if (gs2[`${oppRole}Exited`] && !winHandled.current) {
        winHandled.current = true;
        clearInterval(timerRef.current);
        setWinData({ won: true, tie: false, title: '🏆 OPPONENT LEFT', sub: 'You win by default!' });
        sfx.win && sfx.win();
      }
    });
    return () => unsub();
  }, [roomId]);

  // ── Line flash effect — triggers when my line count increases ──
  useEffect(() => {
    if (myLines > prevLines.current) {
      sfx.line && sfx.line();
      setLineFlash(f => f + 1);
      prevLines.current = myLines;
    }
  }, [myLines]);

  // ── Timer synced to Firebase turnStartedAt ─────────────────────
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
            if (shieldActive) {
              setShield(false);
              setTimer(MOVE_TIME);
            } else {
              autoTimeout();
            }
          }
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [gs?.turnStartedAt, gs?.turn]);

  // Auto-pick when timer expires — consumes one life
  const autoTimeout = async () => {
    const uncalled = Array.from({ length: 25 }, (_, i) => i + 1).filter(n => !calledNumbers.includes(n));
    if (uncalled.length === 0) return;
    const pick   = uncalled[Math.floor(Math.random() * uncalled.length)];
    const newCalled = [...calledNumbers, pick];
    const newP1Lines = countLines(gs?.p1Board || myBoard, newCalled);
    const newP2Lines = countLines(oppBoard.length ? oppBoard : [], newCalled);
    const newChances = myChances - 1;

    // Check win/tie after auto-pick
    if (newChances <= 0) {
      // Out of chances — opponent wins
      await setWinner(roomId, oppRole);
      return;
    }

    if (newP1Lines >= WIN_LINES && newP2Lines >= WIN_LINES) {
      await setTie(roomId);
    } else if (newP1Lines >= WIN_LINES) {
      await setWinner(roomId, 'p1');
    } else if (newP2Lines >= WIN_LINES) {
      await setWinner(roomId, 'p2');
    } else {
      await missedTurn(roomId, role, newCalled, newP1Lines, newP2Lines, newChances);
    }
  };

  // ── Handle player picking a number ────────────────────────────
  const handlePick = async (num) => {
    if (winData || winHandled.current) return;
    if (!isMyTurn && !doubleActive) return;
    if (calledNumbers.includes(num)) return;
    clearInterval(timerRef.current);
    setHints([]);
    sfx.cross && sfx.cross();

    // NEW: Add to shared calledNumbers pool
    const newCalled  = [...calledNumbers, num];
    // Recalculate lines for BOTH boards
    const p1Board    = role === 'p1' ? myBoard : oppBoard;
    const p2Board    = role === 'p2' ? myBoard : oppBoard;
    const newP1Lines = countLines(p1Board.length ? p1Board : myBoard, newCalled);
    const newP2Lines = countLines(p2Board.length ? p2Board : [], newCalled);

    const firstOfDouble = doubleActive;
    if (firstOfDouble) {
      setDouble(false);
      await callNumber(roomId, role, newCalled, newP1Lines, newP2Lines, true);
      return; // Keep turn, player picks second number
    }

    // Check win/tie BEFORE calling Firebase so the result is atomic
    if (!winHandled.current) {
      if (newP1Lines >= WIN_LINES && newP2Lines >= WIN_LINES) {
        await callNumber(roomId, role, newCalled, newP1Lines, newP2Lines, false);
        await setTie(roomId);
        return;
      } else if (newP1Lines >= WIN_LINES) {
        await callNumber(roomId, role, newCalled, newP1Lines, newP2Lines, false);
        await setWinner(roomId, 'p1');
        return;
      } else if (newP2Lines >= WIN_LINES) {
        await callNumber(roomId, role, newCalled, newP1Lines, newP2Lines, false);
        await setWinner(roomId, 'p2');
        return;
      }
    }

    await callNumber(roomId, role, newCalled, newP1Lines, newP2Lines, false);
  };

  // ── Lifelines ─────────────────────────────────────────────────
  const useLifeline = (id) => {
    if (!lifelines[id] || !isMyTurn || winData) return;
    sfx.click && sfx.click();
    setLifelines(prev => ({ ...prev, [id]: false }));

    if (id === 'time')   setTimer(t => t + 20);
    if (id === 'shield') setShield(true);
    if (id === 'double') setDouble(true);

    if (id === 'hint' || id === 'fifty') {
      const uncalled = myBoard.filter(n => !calledNumbers.includes(n));
      // Score each uncalled number by how many lines it would complete/advance
      const scored = uncalled.map(n => {
        const test = [...calledNumbers, n];
        const lines = countLines(myBoard, test);
        return { n, lines };
      }).sort((a, b) => b.lines - a.lines);
      const count = id === 'fifty' ? 2 : 1;
      setHints(scored.slice(0, count).map(s => s.n));
      setTimeout(() => setHints([]), 7000);
    }
  };

  // ── Emoji sending with 3s cooldown ────────────────────────────
  const handleEmoji = async (em) => {
    if (emojiCD) return;
    await sendChatMessage(roomId, { text: em, isEmoji: true, sender: role, senderName: profile?.displayName || 'Me' });
    setShowEmoji(false); // Auto-close after sending
    setEmojiCD(true);
    let s = 3; setCdSecs(s);
    cdRef.current = setInterval(() => {
      s--; setCdSecs(s);
      if (s <= 0) { clearInterval(cdRef.current); setEmojiCD(false); setCdSecs(0); }
    }, 1000);
  };

  const handleMatchEnd = async (isTie, iWon, gs2) => {
    if (!user) return;
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    try {
      await recordResult(user.uid, isTie ? false : iWon);
      const p1 = room?.players?.p1;
      const p2 = room?.players?.p2;
      if (p1 && p2 && role === 'p1') {
        await saveMatch({
          p1Uid: p1.uid, p2Uid: p2.uid,
          p1Name: p1.name, p2Name: p2.name,
          winner: isTie ? null : gs2.winner === 'p1' ? p1.uid : p2.uid,
          p1Lines: gs2.p1Lines, p2Lines: gs2.p2Lines,
          duration, mode: 'multiplayer',
        });
      }
    } catch (e) { console.error('matchEnd error:', e); }
  };

  const handleLeave = async () => {
    clearInterval(timerRef.current);
    await setPlayerExited(roomId, role);
    nav('/');
  };

  useEffect(() => {
    if (rematch.p1 && rematch.p2) nav('/room/create');
  }, [rematch]);

  // ── Render ────────────────────────────────────────────────────
  if (!room) return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh', gap: 12 }}>
      <div className="spinner" />
      <div style={{ fontSize: 12, color: 'var(--ink2)' }}>Connecting to room…</div>
    </div>
  );

  const waiting = gs?.status === 'waiting';
  const AV_SIZE = 52; // Smaller avatar to fit mobile header

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', overflow:'hidden', background:'var(--bg)' }}>

      {/* ════ PLAYER HEADER — compact for mobile ═══════════════ */}
      <div style={{
        background: 'var(--panel)',
        borderBottom: '2px solid var(--edge2)',
        padding: '8px 10px 6px',
        flexShrink: 0,
      }}>

        {/* Top row: my side | score | opp side */}
        <div style={{ display:'flex', alignItems:'flex-start', gap:6 }}>

          {/* ── MY SIDE ── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display:'flex', alignItems:'center', gap:6 }}>
              {/* Avatar + timer ring */}
              <div style={{ position:'relative', width:AV_SIZE, height:AV_SIZE, flexShrink:0 }}>
                <div style={{
                  width:AV_SIZE, height:AV_SIZE, borderRadius:'50%',
                  background:'var(--panel2)', border:`2px solid ${isMyTurn ? 'var(--c1)' : 'var(--edge)'}`,
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:26,
                  transition: 'border-color 0.3s',
                }}>
                  {myData?.avatar || profile?.avatar || '🎯'}
                </div>
                <TimerRing timeLeft={timer} size={AV_SIZE} active={isMyTurn && !winData} />
                {shieldActive && (
                  <div style={{ position:'absolute', bottom:-2, right:-2, fontSize:11 }}>🛡️</div>
                )}
              </div>

              <div style={{ flex:1, minWidth:0 }}>
                {/* Name — clamp to available width */}
                <div style={{ fontWeight:800, fontSize:12, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxWidth:80 }}>
                  {myData?.name || profile?.displayName || 'You'}
                </div>
                <div style={{ fontSize:10, color:'var(--ink2)' }}>{myLines}/{WIN_LINES} lines</div>
                {isMyTurn && !winData && (
                  <div style={{ fontSize:8, fontWeight:800, letterSpacing:1.5, textTransform:'uppercase', color:'var(--c1)', marginTop:1 }}>
                    {doubleActive ? '2️⃣ Pick 2nd!' : `Your turn ${timer}s`}
                  </div>
                )}
              </div>
            </div>

            {/* My speech bubble */}
            {myBubble && (
              <div style={{ marginTop:4, fontSize:16, background:'rgba(0,255,204,0.1)', border:'1px solid rgba(0,255,204,0.3)', borderRadius:8, padding:'2px 8px', display:'inline-block', maxWidth:'100%' }}>
                {myBubble}
              </div>
            )}

            {/* My lifelines */}
            <div style={{ display:'flex', gap:3, marginTop:5, flexWrap:'wrap' }}>
              {LLs.map(ll => (
                <button key={ll.id} onClick={() => useLifeline(ll.id)}
                  disabled={!lifelines[ll.id] || !isMyTurn || !!winData}
                  title={ll.tip}
                  style={{
                    fontSize:13, padding:'2px 4px',
                    background: lifelines[ll.id] ? 'var(--panel2)' : 'transparent',
                    border: `2px solid ${lifelines[ll.id] ? 'var(--edge2)' : 'transparent'}`,
                    borderRadius:5, cursor: lifelines[ll.id] && isMyTurn ? 'pointer' : 'default',
                    opacity: lifelines[ll.id] ? (isMyTurn ? 1 : 0.35) : 0.12,
                    WebkitTapHighlightColor:'transparent',
                  }}>
                  {ll.icon}
                </button>
              ))}
            </div>

            {/* My chances (hearts) */}
            <div style={{ marginTop:4 }}>
              <ChancesDots count={myChances} />
            </div>
          </div>

          {/* ── CENTER SCORE ── */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', paddingTop:4, flexShrink:0 }}>
            <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:20, letterSpacing:1, lineHeight:1 }}>
              <span style={{ color:'var(--c1)' }}>{myLines}</span>
              <span style={{ color:'var(--ink3)', margin:'0 2px' }}>:</span>
              <span style={{ color:'var(--c2)' }}>{oppLines}</span>
            </div>
            <div style={{ fontSize:7, letterSpacing:2, textTransform:'uppercase', color:'var(--ink3)', fontWeight:700, marginTop:2 }}>SCORE</div>
            <div style={{ fontSize:9, color:'var(--ink3)', marginTop:3, letterSpacing:0.5 }}>
              #{roomId}
            </div>
          </div>

          {/* ── OPP SIDE ── */}
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:'flex', alignItems:'center', gap:6, flexDirection:'row-reverse' }}>
              {/* Opp avatar + timer */}
              <div style={{ position:'relative', width:AV_SIZE, height:AV_SIZE, flexShrink:0 }}>
                <div style={{
                  width:AV_SIZE, height:AV_SIZE, borderRadius:'50%',
                  background:'var(--panel2)', border:`2px solid ${!isMyTurn ? 'var(--c2)' : 'var(--edge)'}`,
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:26,
                  transition: 'border-color 0.3s',
                }}>
                  {oppData?.avatar || '🎯'}
                </div>
                <TimerRing timeLeft={timer} size={AV_SIZE} active={!isMyTurn && !winData} />
              </div>

              <div style={{ flex:1, minWidth:0, textAlign:'right' }}>
                <div style={{ fontWeight:800, fontSize:12, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxWidth:80, marginLeft:'auto' }}>
                  {oppData?.name || 'Opponent'}
                </div>
                <div style={{ fontSize:10, color:'var(--ink2)' }}>{oppLines}/{WIN_LINES} lines</div>
                {!isMyTurn && !winData && (
                  <div style={{ fontSize:8, fontWeight:800, letterSpacing:1.5, textTransform:'uppercase', color:'var(--c2)', marginTop:1 }}>
                    Their turn {timer}s
                  </div>
                )}
              </div>
            </div>

            {/* Opp speech bubble */}
            {oppBubble && (
              <div style={{ marginTop:4, fontSize:16, background:'rgba(255,45,85,0.1)', border:'1px solid rgba(255,45,85,0.3)', borderRadius:8, padding:'2px 8px', display:'flex', justifyContent:'flex-end' }}>
                {oppBubble}
              </div>
            )}

            {/* Opp lifeline indicators (greyed out — just for visual parity) */}
            <div style={{ display:'flex', gap:3, marginTop:5, justifyContent:'flex-end' }}>
              {LLs.map(ll => (
                <div key={ll.id} style={{
                  fontSize:13, padding:'2px 4px',
                  background:'var(--panel2)', border:'2px solid var(--edge)',
                  borderRadius:5, opacity:0.25,
                }}>{ll.icon}</div>
              ))}
            </div>

            {/* Opp chances */}
            <div style={{ marginTop:4, display:'flex', justifyContent:'flex-end' }}>
              <ChancesDots count={oppChances} />
            </div>
          </div>
        </div>
      </div>

      {/* ════ BOARD AREA ════════════════════════════════════════ */}
      <div style={{ flex:1, overflow:'hidden', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'6px 10px' }}>

        {/* Called numbers count */}
        <div style={{ marginBottom:6, textAlign:'center' }}>
          <div style={{ fontSize:11, color:'var(--ink2)', letterSpacing:0.5 }}>
            {winData ? '🏁 Game Over'
              : waiting ? '⏳ Waiting for opponent…'
              : isMyTurn ? '👆 Your board — tap to call a number'
              : "⏳ Opponent is choosing…"}
          </div>
          <div style={{ fontSize:10, color:'var(--ink3)', marginTop:2 }}>
            {calledNumbers.length} / 25 numbers called
          </div>
          {hints.length > 0 && (
            <div style={{ fontSize:11, color:'var(--c3)', marginTop:3, fontWeight:700 }}>
              💡 Try: {hints.join(' or ')}
            </div>
          )}
          {doubleActive && (
            <div style={{ fontSize:11, color:'var(--c3)', fontWeight:800, marginTop:3, animation:'blink 0.8s infinite' }}>
              2️⃣ PICK YOUR 2ND NUMBER!
            </div>
          )}
        </div>

        {/* My board — only MY board is shown (opponent's board is private) */}
        <GameBoard
          board={myBoard}
          selected={calledNumbers}  // Shared called numbers mark on MY board
          onCellClick={handlePick}
          disabled={(!isMyTurn && !doubleActive) || !!winData || waiting}
          highlightCells={hints}
        />

        {/* Line progress bar */}
        <div style={{ marginTop:10, display:'flex', gap:5, alignItems:'center' }}>
          {Array.from({ length: WIN_LINES }).map((_, i) => (
            <div key={i} style={{
              width:32, height:7, borderRadius:4,
              background: i < myLines ? 'var(--c1)' : 'var(--edge)',
              boxShadow: i < myLines ? '0 0 8px var(--c1)88' : 'none',
              transition:'all 0.4s ease',
            }} />
          ))}
          <span style={{ fontSize:11, color:'var(--ink2)', marginLeft:4 }}>{myLines}/{WIN_LINES}</span>
        </div>
      </div>

      {/* ════ EMOJI BAR ══════════════════════════════════════════ */}
      <div style={{ background:'var(--panel)', borderTop:'2px solid var(--edge2)', padding:'6px 10px', flexShrink:0 }}>
        {showEmoji && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:5, justifyContent:'center', paddingBottom:6 }}>
            {EMOJIS.map(em => (
              <button key={em} onClick={() => handleEmoji(em)} disabled={emojiCD}
                style={{
                  fontSize:22, background:'none', border:'none', cursor:'pointer',
                  padding:'3px 5px', borderRadius:6, opacity: emojiCD ? 0.3 : 1,
                  WebkitTapHighlightColor:'transparent',
                }}>{em}</button>
            ))}
          </div>
        )}
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <button onClick={() => !emojiCD && setShowEmoji(o => !o)} disabled={emojiCD}
            style={{
              background:'var(--panel2)', border:'2px solid var(--edge2)',
              borderRadius:'var(--r)', padding:'7px 12px',
              fontSize:12, fontWeight:700,
              color: emojiCD ? 'var(--ink3)' : 'var(--ink)',
              cursor: emojiCD ? 'not-allowed' : 'pointer',
              WebkitTapHighlightColor:'transparent',
            }}>
            {emojiCD ? `⏱ ${cdSecs}s` : showEmoji ? '✕ Close' : '😊 React'}
          </button>
          <div style={{ flex:1 }} />
          <button onClick={handleLeave}
            style={{
              background:'transparent', border:'2px solid var(--c2)',
              borderRadius:'var(--r)', padding:'7px 12px',
              fontSize:12, fontWeight:700, color:'var(--c2)', cursor:'pointer',
              WebkitTapHighlightColor:'transparent',
            }}>
            🚪 Leave
          </button>
        </div>
      </div>

      {/* Win Overlay */}
      <WinOverlay
        show={!!winData}
        isWin={winData?.won}
        title={winData?.title}
        sub={winData?.sub}
        onPlayAgain={() => requestRematch(roomId, role)}
        onHome={handleLeave}
      />
    </div>
  );
}
