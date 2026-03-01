// src/screens/MultiGameScreen.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { listenRoom, callNumber, setWinner, setPlayerExited, sendChatMessage, requestRematch } from '../firebase/roomService';
import { countLines, genRandomBoard } from '../game/aiLogic';
import GameBoard from '../game/GameBoard';
import WinOverlay from '../game/WinOverlay';
import { getSFX } from '../sounds/sfxThemes';
import { recordResult } from '../firebase/leaderboard';
import { saveMatch } from '../firebase/history';

const WIN_LINES  = 5;
const MOVE_TIME  = 30;
const EMOJIS = ['👍','🔥','😂','😱','🎯','💀','🏆','😤','🤯','👏','😈','🫡','❤️','🫶','😎','🤑'];

// ── Timer Ring ───────────────────────────────────────────────────
function TimerRing({ timeLeft, maxTime = MOVE_TIME, size = 70, active }) {
  const r    = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const pct  = active ? Math.max(0, timeLeft / maxTime) : 1;
  const off  = circ * (1 - pct);
  const col  = timeLeft <= 5 ? '#ff2d55' : timeLeft <= 10 ? '#ffcc00' : '#00ffcc';
  return (
    <svg width={size} height={size} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={5} />
      {active && (
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke={col} strokeWidth={5}
          strokeDasharray={circ} strokeDashoffset={off}
          strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.4s' }}
        />
      )}
    </svg>
  );
}

// ── Lifeline definitions ─────────────────────────────────────────
const LLs = [
  { id: 'time',   icon: '⏰', tip: '+20 Seconds'   },
  { id: 'hint',   icon: '💡', tip: 'Best Move Hint' },
  { id: 'double', icon: '2️⃣', tip: 'Pick 2 Numbers' },
  { id: 'fifty',  icon: '🎯', tip: '50/50 – Show 2 Best' },
  { id: 'shield', icon: '🛡️', tip: 'Block Auto-Timeout' },
];

export default function MultiGameScreen() {
  const { roomId }  = useParams();
  const { state }   = useLocation();
  const { user, profile } = useAuth();
  const nav  = useNavigate();
  const sfx  = getSFX();

  const role    = state?.role  || 'p1';
  const myBoard = useRef(state?.board || genRandomBoard()).current;
  const oppRole = role === 'p1' ? 'p2' : 'p1';

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
  const [chatMsgs, setChatMsgs]   = useState([]);

  const winHandled  = useRef(false);
  const startTime   = useRef(Date.now());
  const timerRef    = useRef(null);
  const cdRef       = useRef(null);
  const bubbleRefs  = useRef({});
  const lastMsgTs   = useRef(0);

  const gs         = room?.gameState;
  const mySelected = gs?.[`${role}Selected`]    || [];
  const oppSelected= gs?.[`${oppRole}Selected`] || [];
  const myLines    = gs?.[`${role}Lines`]        || 0;
  const oppLines   = gs?.[`${oppRole}Lines`]     || 0;
  const isMyTurn   = gs?.turn === role;
  const oppData    = room?.players?.[oppRole];
  const myData     = room?.players?.[role];

  // ── Room listener ────────────────────────────────────────────
  useEffect(() => {
    const unsub = listenRoom(roomId, data => {
      setRoom(data);
      if (!data) return;
      if (data.rematch) setRematch(data.rematch);

      // Chat / bubbles
      if (data.chat) {
        const msgs = Object.values(data.chat).sort((a, b) => (a.ts || 0) - (b.ts || 0));
        setChatMsgs(msgs.slice(-40));
        const last = msgs[msgs.length - 1];
        if (last && (last.ts || 0) > lastMsgTs.current) {
          lastMsgTs.current = last.ts || 0;
          if ((Date.now() - last.ts) < 8000) {
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
      }

      const gs2 = data.gameState;
      if (!gs2) return;

      // Win check
      if (gs2.winner && !winHandled.current) {
        winHandled.current = true;
        const iWon = gs2.winner === role;
        const wp = ['Domination! 👑','Flawless! ⚡','You crushed it 🔥','Champion! 💎'];
        const lp = ['GG, rematch? 💪','They got lucky 😤','Next time! 🤝'];
        setWinData({
          won: iWon,
          title: iWon ? '🎉 YOU WIN!' : '😔 YOU LOST!',
          sub: (iWon ? wp : lp)[Math.floor(Math.random() * 4)]
        });
        iWon ? sfx.win() : sfx.lose();
        handleMatchEnd(iWon, gs2);
      }
      if (gs2[`${oppRole}Exited`] && !winHandled.current) {
        winHandled.current = true;
        setWinData({ won: true, title: '🏆 OPPONENT LEFT', sub: 'You win by default!' });
        sfx.win();
      }
    });
    return () => unsub();
  }, [roomId]);

  // ── Timer (synced via turnStartedAt) ────────────────────────
  useEffect(() => {
    if (!gs?.turnStartedAt || winData) return;
    clearInterval(timerRef.current);
    const elapsed = Math.floor((Date.now() - gs.turnStartedAt) / 1000);
    const init = Math.max(0, MOVE_TIME - elapsed);
    setTimer(init);

    timerRef.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          if (isMyTurn && !winData) {
            if (shieldActive) {
              setShield(false);
              setTimer(MOVE_TIME); // shield absorbed the timeout — reset
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

  const autoTimeout = () => {
    const uncalled = myBoard.filter(n => !mySelected.includes(n));
    if (uncalled.length > 0) {
      const pick = uncalled[Math.floor(Math.random() * uncalled.length)];
      handlePick(pick);
    }
  };

  // ── Pick ─────────────────────────────────────────────────────
  const handlePick = async (num) => {
    if (winData || mySelected.includes(num)) return;
    if (!isMyTurn && !doubleActive) return;
    clearInterval(timerRef.current);
    setHints([]);
    sfx.cross();

    const newSel = [...mySelected, num];
    const lines  = countLines(myBoard, newSel);
    if (lines > myLines) sfx.line();

    const firstOfDouble = doubleActive;
    if (firstOfDouble) {
      setDouble(false);
      await callNumber(roomId, role, num, newSel, lines, true); // keepTurn
      if (lines >= WIN_LINES) await setWinner(roomId, role);
      return;
    }

    await callNumber(roomId, role, num, newSel, lines, false);
    if (lines >= WIN_LINES) await setWinner(roomId, role);
  };

  // ── Lifelines ────────────────────────────────────────────────
  const useLifeline = (id) => {
    if (!lifelines[id] || !isMyTurn || winData) return;
    sfx.click();
    setLifelines(prev => ({ ...prev, [id]: false }));

    if (id === 'time') {
      setTimer(t => Math.min(t + 20, MOVE_TIME + 20));
    }
    if (id === 'hint') {
      // Find best uncalled center-weighted cell
      const uncalled = myBoard.filter(n => !mySelected.includes(n));
      const center = [6,7,8,11,12,13,16,17,18];
      const ranked = uncalled.sort((a, b) => {
        const ai = center.includes(myBoard.indexOf(a)) ? -1 : 1;
        const bi = center.includes(myBoard.indexOf(b)) ? -1 : 1;
        return ai - bi;
      });
      setHints(ranked.slice(0, 1));
      setTimeout(() => setHints([]), 6000);
    }
    if (id === 'double') {
      setDouble(true);
    }
    if (id === 'fifty') {
      const uncalled = myBoard.filter(n => !mySelected.includes(n));
      const center = [6,7,8,11,12,13,16,17,18];
      const ranked = uncalled.sort((a, b) => {
        const ai = center.includes(myBoard.indexOf(a)) ? -1 : 1;
        const bi = center.includes(myBoard.indexOf(b)) ? -1 : 1;
        return ai - bi;
      });
      setHints(ranked.slice(0, 2));
      setTimeout(() => setHints([]), 6000);
    }
    if (id === 'shield') {
      setShield(true);
    }
  };

  // ── Emoji ────────────────────────────────────────────────────
  const handleEmoji = async (em) => {
    if (emojiCD) return;
    await sendChatMessage(roomId, { text: em, isEmoji: true, sender: role, senderName: profile?.displayName || 'Me' });
    setShowEmoji(false);
    setEmojiCD(true);
    let s = 3; setCdSecs(s);
    cdRef.current = setInterval(() => {
      s--; setCdSecs(s);
      if (s <= 0) { clearInterval(cdRef.current); setEmojiCD(false); setCdSecs(0); }
    }, 1000);
  };

  const handleMatchEnd = async (iWon, gs2) => {
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    if (user && role === 'p1') {
      await recordResult(user.uid, iWon);
      const p1 = room?.players?.p1;
      const p2 = room?.players?.p2;
      if (p1 && p2) {
        await saveMatch({
          p1Uid: p1.uid || 'p1', p2Uid: p2.uid || 'p2',
          p1Name: p1.name || 'P1',  p2Name: p2.name || 'P2',
          winner: gs2.winner === 'p1' ? p1.uid : p2.uid,
          p1Lines: gs2.p1Lines || 0, p2Lines: gs2.p2Lines || 0,
          duration, mode: 'multiplayer'
        });
      }
    }
  };

  const handleLeave = async () => {
    clearInterval(timerRef.current);
    await setPlayerExited(roomId, role);
    nav('/');
  };

  useEffect(() => {
    if (rematch.p1 && rematch.p2) nav('/room/create');
  }, [rematch]);

  // ── Render ───────────────────────────────────────────────────
  if (!room) return (
    <div style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh' }}>
      <div className="spinner" />
      <div style={{ marginTop: 12, color: 'var(--ink2)', fontSize: 12 }}>Connecting…</div>
    </div>
  );

  const SZ = 70;

  return (
    <div style={{ display:'flex',flexDirection:'column',height:'100vh',overflow:'hidden',background:'var(--bg)' }}>

      {/* ════ PLAYER HEADER ═══════════════════════════════════ */}
      <div style={{ background:'var(--panel)', borderBottom:'2px solid var(--edge2)', padding:'10px 12px 8px', flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'flex-start', gap:10 }}>

          {/* ── MY SIDE ── */}
          <div style={{ flex:1 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              {/* Avatar + ring */}
              <div style={{ position:'relative', width:SZ, height:SZ, flexShrink:0 }}>
                <div style={{
                  width:SZ, height:SZ, borderRadius:'50%',
                  background:'var(--panel2)', border:'2px solid var(--edge)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:34
                }}>
                  {myData?.avatar || profile?.avatar || '🎯'}
                </div>
                <TimerRing timeLeft={timer} maxTime={MOVE_TIME} size={SZ} active={isMyTurn && !winData} />
                {shieldActive && (
                  <div style={{ position:'absolute', bottom:-2, right:-2, fontSize:14 }}>🛡️</div>
                )}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:800, fontSize:13, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                  {myData?.name || profile?.displayName || 'You'}
                </div>
                <div style={{ fontSize:11, color:'var(--ink2)' }}>{myLines}/{WIN_LINES} lines</div>
                {isMyTurn && !winData && (
                  <div style={{ fontSize:9, fontWeight:800, letterSpacing:2, textTransform:'uppercase', color:'var(--c1)', marginTop:1 }}>
                    {doubleActive ? '2️⃣ PICK 2nd!' : `YOUR TURN • ${timer}s`}
                  </div>
                )}
              </div>
            </div>

            {/* Speech bubble */}
            {myBubble && (
              <div style={{
                marginTop:5, background:'rgba(0,255,204,0.1)', border:'2px solid rgba(0,255,204,0.3)',
                borderRadius:10, padding:'3px 10px', fontSize:15,
                display:'inline-block', maxWidth:'100%'
              }}>{myBubble}</div>
            )}

            {/* My Lifelines */}
            <div style={{ display:'flex', gap:4, marginTop:6 }}>
              {LLs.map(ll => (
                <button key={ll.id} onClick={() => useLifeline(ll.id)}
                  disabled={!lifelines[ll.id] || !isMyTurn || !!winData}
                  title={ll.tip}
                  style={{
                    fontSize:15, padding:'3px 5px',
                    background: lifelines[ll.id] ? 'var(--panel2)' : 'transparent',
                    border: `2px solid ${lifelines[ll.id] ? 'var(--edge2)' : 'transparent'}`,
                    borderRadius:6, cursor: lifelines[ll.id] && isMyTurn ? 'pointer' : 'default',
                    opacity: lifelines[ll.id] ? (isMyTurn ? 1 : 0.35) : 0.15,
                    WebkitTapHighlightColor:'transparent'
                  }}>
                  {ll.icon}
                </button>
              ))}
            </div>
          </div>

          {/* ── SCORE ── */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', paddingTop:6, flexShrink:0 }}>
            <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, letterSpacing:2, lineHeight:1 }}>
              <span style={{ color:'var(--c1)' }}>{myLines}</span>
              <span style={{ color:'var(--ink3)', margin:'0 3px' }}>:</span>
              <span style={{ color:'var(--c2)' }}>{oppLines}</span>
            </div>
            <div style={{ fontSize:8, letterSpacing:2, textTransform:'uppercase', color:'var(--ink3)', fontWeight:700, marginTop:3 }}>SCORE</div>
          </div>

          {/* ── OPPONENT SIDE ── */}
          <div style={{ flex:1 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, flexDirection:'row-reverse' }}>
              {/* Opp avatar + ring */}
              <div style={{ position:'relative', width:SZ, height:SZ, flexShrink:0 }}>
                <div style={{
                  width:SZ, height:SZ, borderRadius:'50%',
                  background:'var(--panel2)', border:'2px solid var(--edge)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:34
                }}>
                  {oppData?.avatar || '🎯'}
                </div>
                <TimerRing timeLeft={timer} maxTime={MOVE_TIME} size={SZ} active={!isMyTurn && !winData} />
              </div>
              <div style={{ flex:1, minWidth:0, textAlign:'right' }}>
                <div style={{ fontWeight:800, fontSize:13, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                  {oppData?.name || 'Opponent'}
                </div>
                <div style={{ fontSize:11, color:'var(--ink2)' }}>{oppLines}/{WIN_LINES} lines</div>
                {!isMyTurn && !winData && (
                  <div style={{ fontSize:9, fontWeight:800, letterSpacing:2, textTransform:'uppercase', color:'var(--c2)', marginTop:1 }}>
                    THEIR TURN • {timer}s
                  </div>
                )}
              </div>
            </div>

            {/* Opp speech bubble */}
            {oppBubble && (
              <div style={{
                marginTop:5, background:'rgba(255,45,85,0.1)', border:'2px solid rgba(255,45,85,0.3)',
                borderRadius:10, padding:'3px 10px', fontSize:15,
                display:'flex', justifyContent:'flex-end'
              }}><span>{oppBubble}</span></div>
            )}

            {/* Opp lifeline indicators */}
            <div style={{ display:'flex', gap:4, marginTop:6, justifyContent:'flex-end' }}>
              {LLs.map((ll, i) => (
                <div key={i} style={{
                  fontSize:13, padding:'3px 5px',
                  background:'var(--panel2)', border:'2px solid var(--edge)',
                  borderRadius:6, opacity:0.35
                }}>{ll.icon}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════ BOARD AREA ══════════════════════════════════════ */}
      <div style={{ flex:1, overflow:'hidden', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'8px 12px' }}>

        <div style={{ marginBottom:6, textAlign:'center' }}>
          <div style={{ fontSize:11, color:'var(--ink2)', letterSpacing:1, textTransform:'uppercase', fontWeight:700 }}>
            {winData ? '🏁 Game Over' : isMyTurn ? '👆 Your Board — Tap to Mark' : "⏳ Opponent's turn…"}
          </div>
          {hints.length > 0 && (
            <div style={{ fontSize:11, color:'var(--c3)', marginTop:3 }}>
              💡 Try: {hints.join(', ')}
            </div>
          )}
        </div>

        <GameBoard
          board={myBoard}
          selected={mySelected}
          onCellClick={handlePick}
          disabled={(!isMyTurn && !doubleActive) || !!winData}
          highlightCells={hints}
        />

        {/* Lines progress bar */}
        <div style={{ marginTop:10, display:'flex', gap:5, alignItems:'center' }}>
          {Array.from({ length: WIN_LINES }).map((_, i) => (
            <div key={i} style={{
              width:34, height:8, borderRadius:4,
              background: i < myLines ? 'var(--c1)' : 'var(--edge)',
              transition:'background 0.3s'
            }} />
          ))}
          <span style={{ fontSize:11, color:'var(--ink2)', marginLeft:4 }}>{myLines}/{WIN_LINES}</span>
        </div>
      </div>

      {/* ════ EMOJI BAR ═══════════════════════════════════════ */}
      <div style={{ background:'var(--panel)', borderTop:'2px solid var(--edge2)', padding:'8px 12px', flexShrink:0 }}>
        {showEmoji && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:6, justifyContent:'center', paddingBottom:8 }}>
            {EMOJIS.map(em => (
              <button key={em} onClick={() => handleEmoji(em)}
                disabled={emojiCD}
                style={{
                  fontSize:22, background:'none', border:'none', cursor:'pointer',
                  padding:4, borderRadius:6, opacity: emojiCD ? 0.35 : 1,
                  WebkitTapHighlightColor:'transparent'
                }}>{em}</button>
            ))}
          </div>
        )}
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <button onClick={() => !emojiCD && setShowEmoji(o => !o)}
            disabled={emojiCD}
            style={{
              background:'var(--panel2)', border:'2px solid var(--edge2)',
              borderRadius:'var(--r)', padding:'7px 14px',
              fontSize:13, fontWeight:700,
              color: emojiCD ? 'var(--ink3)' : 'var(--ink)',
              cursor: emojiCD ? 'not-allowed' : 'pointer',
              WebkitTapHighlightColor:'transparent'
            }}>
            {emojiCD ? `⏱ ${cdSecs}s` : showEmoji ? '✕ Close' : '😊 React'}
          </button>
          <div style={{ flex:1, textAlign:'center', fontSize:11, color:'var(--ink3)' }}>
            ROOM: <strong style={{ color:'var(--c4)', letterSpacing:2 }}>{roomId}</strong>
          </div>
          <button onClick={handleLeave}
            style={{
              background:'transparent', border:'2px solid var(--c2)',
              borderRadius:'var(--r)', padding:'7px 12px',
              fontSize:12, fontWeight:700, color:'var(--c2)', cursor:'pointer',
              WebkitTapHighlightColor:'transparent'
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
