// src/game/WinOverlay.jsx
// Handles three outcomes: win (🎉), loss (💀), and tie (🤝)
// The `tie` prop must be passed explicitly — when true, isWin is ignored for emoji/color
export default function WinOverlay({ show, isWin, tie, title, sub, onPlayAgain, onHome, showPlayAgain = true }) {
  const emoji      = tie ? '🤝' : isWin ? '🎉' : '💀';
  const titleColor = tie ? 'var(--c3)' : isWin ? 'var(--c1)' : 'var(--c2)';

  return (
    <div className={`win-overlay ${show ? 'show' : ''}`}>
      <div className="win-card">
        <div className="win-emoji">{emoji}</div>
        <div className="win-title" style={{ color: titleColor }}>{title}</div>
        <div className="win-sub">{sub}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
