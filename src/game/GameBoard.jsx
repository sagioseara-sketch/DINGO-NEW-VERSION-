// src/game/GameBoard.jsx
import { getCompletedLines, getWinCellIndices } from './aiLogic';

// Colors for each completed line — 1st line cyan, 2nd pink, 3rd gold, 4th purple, 5th white
const LINE_COLORS = ['#00ffcc', '#ff2d55', '#ffcc00', '#7b61ff', '#ffffff'];

export default function GameBoard({ board, selected, onCellClick, disabled = false, highlightCells = [] }) {
  // Get which cells are in winning lines
  const winCellSet   = new Set(getWinCellIndices(board, selected));
  const completedLines = getCompletedLines(board, selected);
  const highlightSet   = new Set(highlightCells);

  // Map each board index to the color of the first completed line it belongs to
  const cellLineColor = {};
  completedLines.forEach((line, lineIdx) => {
    line.forEach(cellIdx => {
      if (!cellLineColor[cellIdx]) {
        cellLineColor[cellIdx] = LINE_COLORS[Math.min(lineIdx, LINE_COLORS.length - 1)];
      }
    });
  });

  return (
    <div className="board-wrap">
      <div className="board">
        {board.map((num, idx) => {
          const isCrossed = selected.includes(num);
          const isWin     = winCellSet.has(idx);
          const isHint    = highlightSet.has(num);
          const lineColor = cellLineColor[idx];

          return (
            <div
              key={num}
              className={`cell ${isCrossed ? 'crossed' : ''}`}
              style={{
                cursor: disabled || isCrossed ? 'default' : 'pointer',
                // Glow effect uses the specific line color
                background: isWin
                  ? `rgba(${lineColor === '#00ffcc' ? '0,255,204' : lineColor === '#ff2d55' ? '255,45,85' : lineColor === '#ffcc00' ? '255,204,0' : lineColor === '#7b61ff' ? '123,97,255' : '255,255,255'}, 0.15)`
                  : undefined,
                borderColor: isWin ? lineColor : isHint ? 'var(--c3)' : undefined,
                color: isWin ? lineColor : isHint && !isCrossed ? 'var(--c3)' : undefined,
                boxShadow: isWin
                  ? `0 0 12px ${lineColor}88, inset 0 0 8px ${lineColor}22`
                  : isHint
                  ? '0 0 0 3px var(--c3), 0 0 14px rgba(255,204,0,0.5)'
                  : undefined,
                animation: isWin ? 'winPulse 2s ease-in-out infinite' : isHint ? 'winPulse 0.9s ease infinite' : undefined,
                fontWeight: isWin || isHint ? 900 : undefined,
                transition: 'all 0.3s ease',
              }}
              onClick={() => !disabled && !isCrossed && onCellClick && onCellClick(num)}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
}
