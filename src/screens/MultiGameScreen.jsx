// src/screens/MultiGameScreen.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { listenRoom, callNumber, setWinner, setPlayerExited, sendChatMessage, requestRematch, cleanupRoom } from "../firebase/roomService";
import { countLines } from "../game/aiLogic";
import GameBoard from "../game/GameBoard";
import WinOverlay from "../game/WinOverlay";
import { getSFX } from "../sounds/sfxThemes";
import { recordResult } from "../firebase/leaderboard";
import { saveMatch } from "../firebase/history";

const WIN_LINES = 5;
const MOVE_TIME = 25;
const EMOJIS = ["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡"];

export default function MultiGameScreen() {
  const { roomId } = useParams();
  const { state }  = useLocation();
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const role     = state?.role  || "p1";
  const myBoard  = state?.board || [];
  const oppRole  = role === "p1" ? "p2" : "p1";

  const [room, setRoom]           = useState(null);
  const [chatOpen, setChatOpen]   = useState(false);
  const [chatMsgs, setChatMsgs]   = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [winData, setWinData]     = useState(null);
  const [timer, setTimer]         = useState(MOVE_TIME);
  const [rematchState, setRematch] = useState({ p1: false, p2: false });
  const timerRef    = useRef(null);
  const startTime   = useRef(Date.now());
  const winHandled  = useRef(false);
  const chatEndRef  = useRef(null);

  const gs         = room?.gameState;
  const mySelected = gs ? (gs[`${role}Selected`] || []) : [];
  const oppSelected= gs ? (gs[`${oppRole}Selected`] || []) : [];
  const myLines    = gs ? (gs[`${role}Lines`]    || 0) : 0;
  const oppLines   = gs ? (gs[`${oppRole}Lines`] || 0) : 0;
  const isMyTurn   = gs?.turn === role;
  const oppData    = room?.players?.[oppRole];

  useEffect(() => {
    const unsub = listenRoom(roomId, (data) => {
      setRoom(data);
      if (data?.chat) {
        const msgs = Object.values(data.chat).slice(-40);
        setChatMsgs(msgs);
      }
      if (data?.rematch) setRematch(data.rematch);

      // Check win
      const gs2 = data?.gameState;
      if (gs2?.winner && !winHandled.current) {
        winHandled.current = true;
        const iWon = gs2.winner === role;
        const phrases = iWon
          ? ["Domination! 👑","Flawless! ⚡","You crushed it 🔥"]
          : ["GG, rematch? 💪","Bot beat you… jk 😤","Respect the grind 🤝"];
        setWinData({
          won:   iWon,
          title: iWon ? "🎉 YOU WIN!" : "😔 YOU LOST!",
          sub:   phrases[Math.floor(Math.random() * phrases.length)]
        });
        iWon ? sfx.win() : sfx.lose();
        handleMatchEnd(iWon, gs2);
      }

      // Opponent left
      if (gs2?.[`${oppRole}Exited`] && !winHandled.current) {
        winHandled.current = true;
        setWinData({ won: true, title: "🏆 OPPONENT LEFT", sub: "You win by default!" });
        sfx.win();
      }
    });
    return () => { unsub(); };
  }, [roomId]);

  // Timer
  useEffect(() => {
    if (!isMyTurn || winData) return;
    setTimer(MOVE_TIME);
    timerRef.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          // Auto pick
          const uncalled = myBoard.filter(n => !mySelected.includes(n));
          if (uncalled.length > 0) {
            const pick = uncalled[Math.floor(Math.random() * uncalled.length)];
            handlePick(pick);
          }
          return MOVE_TIME;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isMyTurn, winData, mySelected]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMsgs]);

  const handlePick = async (num) => {
    if (!isMyTurn || winData || mySelected.includes(num)) return;
    clearInterval(timerRef.current);
    sfx.cross();
    const newSel  = [...mySelected, num];
    const lines   = countLines(myBoard, newSel);
    if (lines > myLines) sfx.line();
    await callNumber(roomId, role, num, newSel, lines);
    if (lines >= WIN_LINES) {
      await setWinner(roomId, role);
    }
  };

  const handleMatchEnd = async (iWon, gs2) => {
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    if (user && role === "p1") { // only p1 writes to avoid double write
      await recordResult(user.uid, iWon);
      const p1Data = room?.players?.p1;
      const p2Data = room?.players?.p2;
      await saveMatch({
        p1Uid: p1Data?.uid || "p1", p2Uid: p2Data?.uid || "p2",
        p1Name: p1Data?.name || "P1", p2Name: p2Data?.name || "P2",
        winner: gs2.winner === "p1" ? p1Data?.uid : p2Data?.uid,
        p1Lines: gs2.p1Lines || 0, p2Lines: gs2.p2Lines || 0,
        duration, mode: "multiplayer"
      });
    }
  };

  const sendEmoji = async (em) => {
    await sendChatMessage(roomId, { text: em, isEmoji: true, sender: role, senderName: profile?.displayName || "Me" });
    setChatOpen(false);
  };

  const sendText = async () => {
    if (!chatInput.trim()) return;
    await sendChatMessage(roomId, { text: chatInput.trim(), isEmoji: false, sender: role, senderName: profile?.displayName || "Me" });
    setChatInput("");
  };

  const handleLeave = async () => {
    await setPlayerExited(roomId, role);
    nav("/");
  };

  const handleRematch = async () => {
    await requestRematch(roomId, role);
  };

  // Both requested rematch → restart
  useEffect(() => {
    if (rematchState.p1 && rematchState.p2) {
      nav(`/room/create`); // simplest: go back to create a new room
    }
  }, [rematchState]);

  if (!room) {
    return (
      <div className="screen" style={{ justifyContent: "center", alignItems: "center" }}>
        <div className="spinner" />
        <div className="muted small" style={{ marginTop: 12 }}>Connecting…</div>
      </div>
    );
  }

  const timerPct = (timer / MOVE_TIME) * 100;
  const oppBoard = gs?.[`${oppRole}Board`] || [];

  return (
    <div className="screen" style={{ paddingTop: 10, paddingBottom: 20 }}>
      {/* Top bar */}
      <div style={{ width: "100%", maxWidth: 440, display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <button className="btn btn-ghost" style={{ padding: "5px 10px", fontSize: 11 }} onClick={handleLeave}>🏠</button>
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 13, letterSpacing: 2, color: "var(--c4)" }}>
            ROOM {roomId}
          </span>
        </div>
        <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 18 }}>
          <span style={{ color: "var(--c1)" }}>{myLines}</span>
          <span style={{ color: "var(--ink3)", margin: "0 4px" }}>–</span>
          <span style={{ color: "var(--c2)" }}>{oppLines}</span>
        </div>
      </div>

      {/* Opponent row */}
      <div className="player-row" style={{ maxWidth: 440, marginBottom: 6 }}>
        <span style={{ fontSize: 26 }}>{oppData?.avatar || "🎯"}</span>
        <div>
          <div className="player-name">{oppData?.name || "Opponent"}</div>
          <div className="player-lines">{oppLines} / {WIN_LINES} lines</div>
        </div>
        {!isMyTurn && <span className="turn-badge" style={{ marginLeft: "auto", background: "var(--c2)" }}>THEIR TURN</span>}
      </div>

      {/* Opponent board (display only) */}
      <div style={{ opacity: 0.55, marginBottom: 14 }}>
        <GameBoard board={oppBoard} selected={oppSelected} disabled />
      </div>

      {/* My board */}
      <div className="player-row" style={{ maxWidth: 440, marginBottom: 6 }}>
        <span style={{ fontSize: 26 }}>{profile?.avatar || "🎯"}</span>
        <div>
          <div className="player-name">{profile?.displayName || "You"}</div>
          <div className="player-lines">{myLines} / {WIN_LINES} lines</div>
        </div>
        {isMyTurn && <span className="turn-badge" style={{ marginLeft: "auto" }}>YOUR TURN</span>}
      </div>

      {isMyTurn && !winData && (
        <div className="timer-bar-wrap" style={{ maxWidth: 440, marginBottom: 6 }}>
          <div className="timer-bar" style={{ width: `${timerPct}%`, background: timer <= 5 ? "var(--c2)" : "var(--c1)" }} />
        </div>
      )}

      <GameBoard board={myBoard} selected={mySelected} onCellClick={handlePick} disabled={!isMyTurn || !!winData} />

      {/* Chat FAB */}
      <button className="chat-fab" onClick={() => setChatOpen(o => !o)}>💬</button>

      {/* Chat panel */}
      <div className={`chat-panel ${chatOpen ? "open" : ""}`}>
        <div className="chat-messages" style={{ maxHeight: 120 }}>
          {chatMsgs.map((m, i) => (
            <div key={i} className={`chat-msg ${m.sender === role ? "mine" : ""}`}>
              <div className={`chat-bubble${m.isEmoji ? " emoji-only" : ""}`} style={{ fontSize: m.isEmoji ? 22 : 13 }}>
                {m.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="chat-emoji-bar">
          {EMOJIS.map(em => (
            <button key={em} className="emoji-btn" onClick={() => sendEmoji(em)}>{em}</button>
          ))}
        </div>
        <div className="chat-input-row">
          <input className="chat-input" type="text" placeholder="Type…" value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendText()}
            style={{ padding: "8px 10px", fontSize: 13 }} />
          <button className="btn btn-primary" style={{ padding: "8px 12px" }} onClick={sendText}>➤</button>
        </div>
      </div>

      {/* Win overlay */}
      <WinOverlay
        show={!!winData}
        isWin={winData?.won}
        title={winData?.title}
        sub={winData?.sub}
        onPlayAgain={handleRematch}
        onHome={handleLeave}
        showPlayAgain={true}
      />
    </div>
  );
}
