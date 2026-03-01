// src/game/aiLogic.js

// All 12 possible winning lines on a 5x5 bingo board (by cell index 0-24)
export const ALL_LINES = [
  // 5 rows
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
  [15,16,17,18,19],
  [20,21,22,23,24],
  // 5 columns
  [0,5,10,15,20],
  [1,6,11,16,21],
  [2,7,12,17,22],
  [3,8,13,18,23],
  [4,9,14,19,24],
  // 2 diagonals
  [0,6,12,18,24],
  [4,8,12,16,20],
];

// Generate a random 5x5 board containing numbers 1-25
export function genRandomBoard() {
  const nums = Array.from({ length: 25 }, (_, i) => i + 1);
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}

// Count how many complete lines a board has, given a set of called/selected numbers.
// Works for both the new shared-calledNumbers system and the old selected system.
export function countLines(board, selected) {
  const marked = new Set(selected);
  return ALL_LINES.filter(line => line.every(idx => marked.has(board[idx]))).length;
}

// Returns the COMPLETE line definitions (arrays of cell indices) that are fully marked.
// Used for glow/coloring effects — each returned line can have its own color.
export function getCompletedLines(board, selected) {
  const marked = new Set(selected);
  return ALL_LINES.filter(line => line.every(idx => marked.has(board[idx])));
}

// Returns a flat set of board cell indices that belong to any complete line.
// Used by GameBoard to highlight winning cells.
export function getWinCellIndices(board, selected) {
  const cells = new Set();
  getCompletedLines(board, selected).forEach(line => line.forEach(i => cells.add(i)));
  return [...cells];
}

// ── AI Bot Logic ─────────────────────────────────────────────────

function scoreMove(board, selected, num) {
  const testSelected = [...selected, num];
  const marked = new Set(testSelected);
  let score = 0;
  for (const line of ALL_LINES) {
    const filled = line.filter(i => marked.has(board[i])).length;
    if (filled === 5) score += 1000000;
    else if (filled === 4) score += 10000;
    else if (filled === 3) score += 100;
    else if (filled === 2) score += 5;
  }
  return score;
}

function getBotMove(board, selected, difficulty) {
  const uncalled = board.filter(n => !selected.includes(n));
  if (uncalled.length === 0) return null;

  if (difficulty === 'easy') {
    return uncalled[Math.floor(Math.random() * uncalled.length)];
  }

  if (difficulty === 'medium') {
    // Pick the move with highest line score
    return uncalled.reduce((best, num) =>
      scoreMove(board, selected, num) > scoreMove(board, selected, best) ? num : best,
      uncalled[0]
    );
  }

  if (difficulty === 'hard' || difficulty === 'expert' || difficulty === 'nightmare' || difficulty === 'godmode') {
    // Check for immediate win
    for (const num of uncalled) {
      if (countLines(board, [...selected, num]) >= 5) return num;
    }
    // Pick highest score move
    return uncalled.reduce((best, num) =>
      scoreMove(board, selected, num) > scoreMove(board, selected, best) ? num : best,
      uncalled[0]
    );
  }

  return uncalled[Math.floor(Math.random() * uncalled.length)];
}

export { getBotMove };
