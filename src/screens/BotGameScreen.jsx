// src/screens/BotGameScreen.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { genRandomBoard, getAIMove, countLines } from "../game/aiLogic";
import GameBoard from "../game/GameBoard";
import WinOverlay from "../game/WinOverlay";
import { getSFX } from "../sounds/sfxThemes";
import { recordResult } from "../firebase/leaderboard";
import { saveMatch } from "../firebase/history";

const LEVELS = [
  { id: "easy",      label: "Easy",      icon: "🟢", color: "var(--c1)" },
  { id: "medium",    label: "Medium",    icon: "🟡", color: "var(--c3)" },
  { id: "hard",      label: "Hard",      icon: "🔴", color: "var(--c2)" },
  { id: "expert",    label: "Expert",    icon: "🟣", color: "var(--c4)" },
  { id: "nightmare", label: "Nightmare", icon: "🖤", color: "#ff4444" },
  { id: "godmode",   label: "GodMode",   icon: "👑", color: "var(--c3)" }
];

const BOT_NAMES = { easy: "Noob-Bot", medium: "Mid-Bot", hard: "Hard-Bot", expert: "Expert-Bot", nightmare: "Nightmare", godmode: "GodMode" };
const WIN_LINES = 5;
const MOVE_TIME = 20;

export default function BotGameScreen() {
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const [phase, setPhase]         = useState("select"); // select | game | over
  const [level, setLevel]         = useState("medium");
  const [playerBoard, setPlayerBoard] = useState([]);
  const [botBoard, setBotBoard]   = useState([]);
  const [selected, setSelected]   = useState([]); // shared selected numbers (both boards use same list)
  const [botSelected, setBotSelected] = useState([]); // bot's own picks (different from player's)
  const [isMyTurn, setIsMyTurn]   = useState(true);
  const [playerLines, setPlayerLines] = useState(0);
  const [botLines, setBotLines]   = useState(0);
  const [winData, setWinData]     = useState(null);
  const [timer, setTimer]         = useState(MOVE_TIME);
  const [botThinking, setBotThinking] = useState(false);
  const timerRef  = useRef(null);
  const startTime = useRef(null);
  const sfx       = getSFX();

  // In this game: player picks from THEIR board, bot picks from its own board
  // Both mark the SAME number pool — whoever calls it marks it on their own board
  // Actually: each player calls numbers independently from 1-25
  // Player selects from their board (which has all 25 in random order)
  // Bot selects numbers 1-25 in AI order
  // Both use the same "calledNums" for tracking who called what

  const startGame = () => {
    const pb = genRandomBoard();
    const bb = genRandomBoard();
    setPlayerBoard(pb);
    setBotBoard(bb);
    setSelected([]);
    setBotSelected([]);
    setIsMyTurn(true);
    setPlayerLines(0);
    setBotLines(0);
    setWinData(null);
    setPhase("game");
    startTime.current = Date.now();
    sfx.click();
  };

  // Timer countdown
  useEffect(() => {
    if (phase !== "game" || !isMyTurn || winData) return;
    setTimer(MOVE_TIME);
    timerRef.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          // Auto pick random uncalled number
          const uncalled = playerBoard.filter(n => !selected.includes(n));
          if (uncalled.length > 0) {
            const pick = uncalled[Math.floor(Math.random() * uncalled.length)];
            handlePlayerPick(pick, true);
          }
          return MOVE_TIME;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isMyTurn, phase, winData, selected]);

  const handlePlayerPick = (num, auto = false) => {
    if (!isMyTurn || winData) return;
    clearInterval(timerRef.current);
    sfx.cross();
    const newSelected = [...selected, num];
    setSelected(newSelected);
    const lines = countLines(playerBoard, newSelected);
    if (lines > playerLines && lines > 0) sfx.line();
    setPlayerLines(lines);
    if (lines >= WIN_LINES) {
      endGame(true, newSelected);
      return;
    }
    setIsMyTurn(false);
    runBotTurn(newSelected);
  };

  const runBotTurn = (currentSelected) => {
    const delay = { easy: 500, medium: 800, hard: 1000, expert: 1200, nightmare: 1400, godmode: 1600 }[level] || 800;
    setBotThinking(true);
    setTimeout(() => {
      setBotThinking(false);
      const botMove = getAIMove(level, currentSelected, playerBoard, botBoard);
      if (botMove == null) { setIsMyTurn(true); return; }
      sfx.cross();
      const newBotSel = [...currentSelected, botMove];
      // Note: in this game design, bot also marks on the shared pool
      // But each player has their own board layout
      const newSelected2 = newBotSel;
      setSelected(newSelected2);
      const bLines = countLines(botBoard, newSelected2);
      if (bLines > botLines && bLines > 0) sfx.line();
      setBotLines(bLines);
      if (bLines >= WIN_LINES) {
        endGame(false, newSelected2);
        return;
      }
      setIsMyTurn(true);
    }, delay);
  };

  const endGame = async (playerWon, finalSelected) => {
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    const phrases = playerWon
      ? ["Domination! 👑", "You crushed it! 🔥", "GG! Lethal ⚡", "Champion energy! 💎"]
      : ["Bot outsmarted you 🤖", "GG, rematch? 💪", "Bot.exe wins 😤"];
    setWinData({
      won: playerWon,
      title: playerWon ? "🎉 YOU WIN!" : "🤖 BOT WINS!",
      sub: phrases[Math.floor(Math.random() * phrases.length)]
    });
    playerWon ? sfx.win() : sfx.lose();
    setPhase("over");
    if (user) {
      await recordResult(user.uid, playerWon);
      const pLines = countLines(playerBoard, finalSelected);
      const bLines = countLines(botBoard, finalSelected);
      await saveMatch({
        p1Uid: user.uid, p2Uid: "bot",
        p1Name: profile?.displayName || "Player",
        p2Name: BOT_NAMES[level],
        winner: playerWon ? user.uid : "bot",
        p1Lines: pLines, p2Lines: bLines,
        duration, mode: "bot", botLevel: level
      });
    }
  };

  // UI
  if (phase === "select") {
    return (
      <div className="screen" style={{ paddingBottom: 80 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 440, marginBottom: 20, paddingTop: 8 }}>
          <button className="btn btn-ghost" style={{ padding: "6px 12px" }} onClick={() => nav("/")}>← Back</button>
          <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, letterSpacing: 2 }}>🤖 VS BOT</span>
        </div>

        <div className="card" style={{ maxWidth: 440 }}>
          <div className="card-body">
            <div className="label" style={{ marginBottom: 14 }}>Choose Difficulty</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
              {LEVELS.map(l => (
                <button key={l.id}
                  className={`diff-btn ${level === l.id ? "active" : ""}`}
                  style={{ borderColor: level === l.id ? l.color : undefined, color: level === l.id ? l.color : undefined }}
                  onClick={() => { setLevel(l.id); sfx.click(); }}>
                  <span style={{ fontSize: 20 }}>{l.icon}</span>
                  {l.label}
                </button>
              ))}
            </div>
            <div style={{ background: "var(--panel2)", borderRadius: "var(--r)", padding: 12, marginBottom: 20 }}>
              {LEVELS.find(l => l.id === level) && (
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: 28 }}>{LEVELS.find(l => l.id === level).icon}</span>
                  <div style={{ fontWeight: 700, marginTop: 6 }}>{BOT_NAMES[level]}</div>
                  <div className="muted small" style={{ marginTop: 4 }}>
                    {{
                      easy: "Random moves — good for beginners",
                      medium: "Basic strategy — fair challenge",
                      hard: "Aggressive blocking — tough",
                      expert: "Win-first + blocking — very tough",
                      nightmare: "Lookahead AI — near-unbeatable",
                      godmode: "Maximum difficulty — can you win?"
                    }[level]}
                  </div>
                </div>
              )}
            </div>
            <button className="btn btn-primary btn-full" onClick={startGame}>
              ⚡ Start Game
            </button>
          </div>
        </div>
      </div>
    );
  }

  const timerPct = (timer / MOVE_TIME) * 100;

  return (
    <div className="screen" style={{ paddingTop: 10, paddingBottom: 20 }}>
      {/* Top bar */}
      <div style={{ width: "100%", maxWidth: 440, marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
        <button className="btn btn-ghost" style={{ padding: "5px 10px", fontSize: 11 }} onClick={() => nav("/")}>🏠</button>
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 14, letterSpacing: 2, color: "var(--c1)" }}>
            {LEVELS.find(l => l.id === level)?.icon} {BOT_NAMES[level].toUpperCase()}
          </span>
        </div>
        <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 18 }}>
          <span style={{ color: "var(--c1)" }}>{playerLines}</span>
          <span style={{ color: "var(--ink3)", margin: "0 6px" }}>·</span>
          <span style={{ color: "var(--c2)" }}>{botLines}</span>
        </div>
      </div>

      {/* Player row */}
      <div className="player-row" style={{ maxWidth: 440, marginBottom: 8 }}>
        <span style={{ fontSize: 28 }}>{profile?.avatar || "🎯"}</span>
        <div>
          <div className="player-name">{profile?.displayName || "You"}</div>
          <div className="player-lines">{playerLines} / {WIN_LINES} lines</div>
        </div>
        {isMyTurn && !botThinking && <span className="turn-badge" style={{ marginLeft: "auto" }}>YOUR TURN</span>}
      </div>

      {/* Timer */}
      {isMyTurn && !botThinking && (
        <div className="timer-bar-wrap" style={{ maxWidth: 440, marginBottom: 8 }}>
          <div className="timer-bar" style={{ width: `${timerPct}%`, background: timer <= 5 ? "var(--c2)" : "var(--c1)" }} />
        </div>
      )}
      {botThinking && (
        <div style={{ textAlign: "center", fontSize: 12, color: "var(--ink2)", marginBottom: 8, letterSpacing: 2, textTransform: "uppercase" }}>
          🤖 Bot is thinking…
        </div>
      )}

      {/* Player board */}
      <GameBoard board={playerBoard} selected={selected} onCellClick={handlePlayerPick} disabled={!isMyTurn || botThinking || !!winData} />

      {/* Bot row */}
      <div className="player-row" style={{ maxWidth: 440, marginTop: 14 }}>
        <span style={{ fontSize: 28 }}>{LEVELS.find(l => l.id === level)?.icon}</span>
        <div>
          <div className="player-name">{BOT_NAMES[level]}</div>
          <div className="player-lines">{botLines} / {WIN_LINES} lines</div>
        </div>
        {!isMyTurn && botThinking && <span className="turn-badge" style={{ marginLeft: "auto", background: "var(--c2)" }}>BOT TURN</span>}
      </div>

      {/* Bot board (display only) */}
      <div style={{ marginTop: 8, opacity: 0.6 }}>
        <GameBoard board={botBoard} selected={selected} disabled />
      </div>

      {/* Win overlay */}
      <WinOverlay
        show={!!winData}
        isWin={winData?.won}
        title={winData?.title}
        sub={winData?.sub}
        onPlayAgain={startGame}
        onHome={() => nav("/")}
      />
    </div>
  );
}
