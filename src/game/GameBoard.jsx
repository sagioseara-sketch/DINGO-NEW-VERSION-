// src/game/GameBoard.jsx
import { getWinCellIndices } from "./aiLogic";

export default function GameBoard({ board, selected, onCellClick, disabled = false }) {
  const winCells = new Set(getWinCellIndices(board, selected));

  return (
    <div className="board-wrap">
      <div className="board">
        {board.map((num, idx) => {
          const isCrossed = selected.includes(num);
          const isWin     = winCells.has(idx);
          return (
            <div
              key={num}
              className={`cell ${isCrossed ? "crossed" : ""} ${isWin ? "win-line" : ""}`}
              onClick={() => !disabled && !isCrossed && onCellClick && onCellClick(num)}
              style={{ cursor: disabled || isCrossed ? "default" : "pointer" }}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
}
