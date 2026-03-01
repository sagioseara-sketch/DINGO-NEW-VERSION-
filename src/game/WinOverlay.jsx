// src/game/WinOverlay.jsx
export default function WinOverlay({ show, isWin, title, sub, onPlayAgain, onHome, showPlayAgain = true }) {
  return (
    <div className={`win-overlay ${show ? "show" : ""}`}>
      <div className="win-card">
        <div className="win-emoji">{isWin ? "🎉" : "💀"}</div>
        <div className="win-title" style={{ color: isWin ? "var(--c1)" : "var(--c2)" }}>{title}</div>
        <div className="win-sub">{sub}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {showPlayAgain && (
            <button className="btn btn-primary btn-full" onClick={onPlayAgain}>
              ↺ Play Again
            </button>
          )}
          <button className="btn btn-ghost btn-full" onClick={onHome}>
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
}
