// src/game/aiLogic.js

export const ALL_LINES = [
  [0,1,2,3,4], [5,6,7,8,9], [10,11,12,13,14],
  [15,16,17,18,19], [20,21,22,23,24],
  [0,5,10,15,20], [1,6,11,16,21], [2,7,12,17,22],
  [3,8,13,18,23], [4,9,14,19,24],
  [0,6,12,18,24], [4,8,12,16,20],
];

export function genRandomBoard() {
  const nums = Array.from({ length: 25 }, (_, i) => i + 1);
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}

export function countLines(board, calledNumbers) {
  if (!board || board.length === 0) return 0;
  const marked = new Set(calledNumbers);
  return ALL_LINES.filter(line => line.every(idx => marked.has(board[idx]))).length;
}

export function getCompletedLines(board, calledNumbers) {
  if (!board || board.length === 0) return [];
  const marked = new Set(calledNumbers);
  return ALL_LINES.filter(line => line.every(idx => marked.has(board[idx])));
}

export function getWinCellIndices(board, calledNumbers) {
  const cells = new Set();
  getCompletedLines(board, calledNumbers).forEach(line => line.forEach(i => cells.add(i)));
  return [...cells];
}

// ── AI Scoring ────────────────────────────────────────────────────
//
// The key insight for a hard AI is that it needs to think about
// TWO things simultaneously: advancing its own lines AND blocking
// the opponent from completing theirs. Easy/medium only think about
// themselves. Hard+ also consider what the opponent needs.

function scoreForBoard(board, calledNumbers, num) {
  const test = new Set([...calledNumbers, num]);
  let score = 0;
  for (const line of ALL_LINES) {
    const filled = line.filter(i => test.has(board[i])).length;
    if      (filled === 5) score += 1_000_000;
    else if (filled === 4) score +=    50_000;
    else if (filled === 3) score +=     1_000;
    else if (filled === 2) score +=        20;
    else if (filled === 1) score +=         1;
  }
  return score;
}

// For hard+ levels: score both advancing own board AND blocking opponent
function scoreCombined(myBoard, oppBoard, called, num, blockWeight) {
  const myScore  = scoreForBoard(myBoard,  called, num);
  const oppScore = scoreForBoard(oppBoard, called, num); // how valuable num is FOR the opponent
  // Subtracting opponent score means we pick moves that hurt them too
  return myScore + oppScore * blockWeight;
}

export function getAIMove(level, calledNumbers, playerBoard, botBoard) {
  const uncalled = Array.from({ length: 25 }, (_, i) => i + 1)
    .filter(n => !calledNumbers.includes(n));
  if (uncalled.length === 0) return null;

  // Easy: fully random — very beatable
  if (level === 'easy') {
    return uncalled[Math.floor(Math.random() * uncalled.length)];
  }

  // Medium: greedy — only maximises own lines, ignores opponent
  if (level === 'medium') {
    return uncalled.reduce((best, num) => {
      return scoreForBoard(botBoard, calledNumbers, num) >
             scoreForBoard(botBoard, calledNumbers, best) ? num : best;
    }, uncalled[0]);
  }

  // Hard: win-first, then block opponent if they're close, then advance self
  if (level === 'hard') {
    // 1. Check for an immediate win
    for (const num of uncalled) {
      if (countLines(botBoard, [...calledNumbers, num]) >= 5) return num;
    }
    // 2. Block any number that would give opponent their 5th line
    for (const num of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, num]) >= 5) return num;
    }
    // 3. Greedy advance with light blocking consideration
    return uncalled.reduce((best, num) =>
      scoreCombined(botBoard, playerBoard, calledNumbers, num, 0.4) >
      scoreCombined(botBoard, playerBoard, calledNumbers, best, 0.4) ? num : best,
      uncalled[0]
    );
  }

  // Expert: win-first, block-first, then heavy combined scoring
  if (level === 'expert') {
    for (const num of uncalled) {
      if (countLines(botBoard, [...calledNumbers, num]) >= 5) return num;
    }
    for (const num of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, num]) >= 5) return num;
    }
    // Also block if opponent is one away from 5th line
    for (const num of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, num]) >= 4) return num;
    }
    return uncalled.reduce((best, num) =>
      scoreCombined(botBoard, playerBoard, calledNumbers, num, 0.7) >
      scoreCombined(botBoard, playerBoard, calledNumbers, best, 0.7) ? num : best,
      uncalled[0]
    );
  }

  // Nightmare & GodMode: near-perfect play
  // Win immediately, block opponent finishing, block opponent getting 4th line,
  // then maximise own score while heavily penalising opponent's potential
  if (level === 'nightmare' || level === 'godmode') {
    // Immediate win check
    for (const num of uncalled) {
      if (countLines(botBoard, [...calledNumbers, num]) >= 5) return num;
    }
    // Block immediate opponent win
    for (const num of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, num]) >= 5) return num;
    }

    // For GodMode: also proactively block opponent from reaching 4 or even 3 lines
    if (level === 'godmode') {
      // Find moves that would give opponent their 4th line and block the most urgent
      const blockScores = uncalled.map(num => ({
        num,
        oppLines: countLines(playerBoard, [...calledNumbers, num]),
      })).sort((a, b) => b.oppLines - a.oppLines);
      if (blockScores[0]?.oppLines >= 4) return blockScores[0].num;
    }

    // Full combined scoring with very high blocking weight
    const blockW = level === 'godmode' ? 1.2 : 0.9;
    return uncalled.reduce((best, num) =>
      scoreCombined(botBoard, playerBoard, calledNumbers, num, blockW) >
      scoreCombined(botBoard, playerBoard, calledNumbers, best, blockW) ? num : best,
      uncalled[0]
    );
  }

  // Fallback
  return uncalled[Math.floor(Math.random() * uncalled.length)];
}

export function getBotMove(board, calledNumbers, difficulty) {
  return getAIMove(difficulty, calledNumbers, [], board);
}
