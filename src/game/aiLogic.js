// src/game/aiLogic.js
//
// AI OVERHAUL — GodMode / Nightmare near-impossible:
//
// The old AI only blocked when opponent was 1 move away from winning (4 lines).
// A skilled player could freely build 3 lines without any interference.
//
// New approach for hard+ levels:
//   1. Immediate win check (always first)
//   2. Block opponent's immediate win
//   3. For expert+: block opponent reaching 4 lines
//   4. For nightmare+: minimax-lite — evaluate each of MY moves, then simulate
//      the OPPONENT'S best response, pick the move that minimises the opponent's
//      best-case score after my pick (1-ply look-ahead)
//   5. For godmode: block opponent at 3 lines AND use 2-ply look-ahead

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

// ── Scoring ───────────────────────────────────────────────────────────────────

// Score a single board position for a given move.
// Higher = better for the board owner.
function scoreForBoard(board, calledSet, num) {
  const test = new Set(calledSet);
  test.add(num);
  let score = 0;
  for (const line of ALL_LINES) {
    const filled = line.filter(i => test.has(board[i])).length;
    if      (filled === 5) score += 10_000_000;
    else if (filled === 4) score +=     80_000;
    else if (filled === 3) score +=      2_000;
    else if (filled === 2) score +=         30;
    else if (filled === 1) score +=          1;
  }
  return score;
}

// Combined score: how good is `num` for me, penalised by how good it is for opponent.
function scoreCombined(myBoard, oppBoard, calledSet, num, blockWeight) {
  return scoreForBoard(myBoard, calledSet, num)
       + scoreForBoard(oppBoard, calledSet, num) * blockWeight;
}

// ── Minimax-lite helpers ──────────────────────────────────────────────────────

// Returns the best score the OPPONENT can achieve from `uncalled` after we play `num`.
// This is a 1-ply look-ahead: "If I play X, what is the best number the player can pick?"
function opponentBestScore(oppBoard, myBoard, calledSet, numPlayed, remainingUncalled) {
  const afterPlay = new Set(calledSet);
  afterPlay.add(numPlayed);
  const oppUncalled = remainingUncalled.filter(n => n !== numPlayed);
  if (oppUncalled.length === 0) return 0;
  let best = -Infinity;
  for (const n of oppUncalled) {
    const s = scoreCombined(oppBoard, myBoard, afterPlay, n, 0);
    if (s > best) best = s;
  }
  return best;
}

// ── Main AI entry point ───────────────────────────────────────────────────────

export function getAIMove(level, calledNumbers, playerBoard, botBoard) {
  const calledSet = new Set(calledNumbers);
  const uncalled  = Array.from({ length: 25 }, (_, i) => i + 1).filter(n => !calledSet.has(n));
  if (uncalled.length === 0) return null;

  // ── Easy: fully random ────────────────────────────────────────────────────
  if (level === 'easy') {
    return uncalled[Math.floor(Math.random() * uncalled.length)];
  }

  // ── Medium: greedy own-board only, no blocking ────────────────────────────
  if (level === 'medium') {
    return uncalled.reduce((best, n) =>
      scoreForBoard(botBoard, calledSet, n) > scoreForBoard(botBoard, calledSet, best) ? n : best,
      uncalled[0],
    );
  }

  // ── Shared: immediate win / block checks ──────────────────────────────────
  // These apply to hard, expert, nightmare, godmode.

  // 1. Win immediately
  for (const n of uncalled) {
    if (countLines(botBoard, [...calledNumbers, n]) >= 5) return n;
  }
  // 2. Block opponent's winning move
  for (const n of uncalled) {
    if (countLines(playerBoard, [...calledNumbers, n]) >= 5) return n;
  }

  // ── Hard ─────────────────────────────────────────────────────────────────
  if (level === 'hard') {
    // Block opponent from reaching 4 lines
    for (const n of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, n]) >= 4) return n;
    }
    return uncalled.reduce((best, n) =>
      scoreCombined(botBoard, playerBoard, calledSet, n, 0.5) >
      scoreCombined(botBoard, playerBoard, calledSet, best, 0.5) ? n : best,
      uncalled[0],
    );
  }

  // ── Expert ────────────────────────────────────────────────────────────────
  if (level === 'expert') {
    // Block 4th line
    for (const n of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, n]) >= 4) return n;
    }
    // Block 3rd line if we have a defensive incentive
    const block3 = uncalled.filter(n => countLines(playerBoard, [...calledNumbers, n]) >= 3);
    if (block3.length > 0) {
      // Only block 3rd line if there's no equally good offensive move
      const offensiveBest = uncalled.reduce((best, n) =>
        scoreForBoard(botBoard, calledSet, n) > scoreForBoard(botBoard, calledSet, best) ? n : best,
        uncalled[0],
      );
      const offScore = scoreForBoard(botBoard, calledSet, offensiveBest);
      const defScore = scoreCombined(botBoard, playerBoard, calledSet, block3[0], 0.8);
      if (defScore > offScore * 0.7) {
        // Defensive play is compelling — block 3rd line
        return block3.reduce((best, n) =>
          scoreForBoard(playerBoard, calledSet, n) > scoreForBoard(playerBoard, calledSet, best) ? n : best,
          block3[0],
        );
      }
    }
    return uncalled.reduce((best, n) =>
      scoreCombined(botBoard, playerBoard, calledSet, n, 0.8) >
      scoreCombined(botBoard, playerBoard, calledSet, best, 0.8) ? n : best,
      uncalled[0],
    );
  }

  // ── Nightmare ─────────────────────────────────────────────────────────────
  // 1-ply minimax: pick the move that minimises the opponent's best response.
  if (level === 'nightmare') {
    // Block 4th and 3rd line threats
    for (const n of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, n]) >= 4) return n;
    }
    for (const n of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, n]) >= 3) return n;
    }

    // Minimax-lite: maximise my score – opponent's best response
    return uncalled.reduce((best, n) => {
      const myScore  = scoreCombined(botBoard, playerBoard, calledSet, n, 0.9);
      const oppResp  = opponentBestScore(playerBoard, botBoard, calledSet, n, uncalled);
      const netScore = myScore - oppResp * 0.5;

      const bMyScore  = scoreCombined(botBoard, playerBoard, calledSet, best, 0.9);
      const bOppResp  = opponentBestScore(playerBoard, botBoard, calledSet, best, uncalled);
      const bNetScore = bMyScore - bOppResp * 0.5;

      return netScore > bNetScore ? n : best;
    }, uncalled[0]);
  }

  // ── GodMode — near-impossible ─────────────────────────────────────────────
  // Extra blocks: prevent player reaching 3 lines AND 2 lines if compelling.
  // 2-ply minimax: pick move that minimises opponent's best score after my move,
  // then after THEIR move, my best follow-up.
  if (level === 'godmode') {
    // Block 4 lines
    for (const n of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, n]) >= 4) return n;
    }
    // Block 3 lines (always — don't let player reach 3)
    for (const n of uncalled) {
      if (countLines(playerBoard, [...calledNumbers, n]) >= 3) return n;
    }
    // Block 2 lines if opponent is making rapid progress
    const playerCurrentLines = countLines(playerBoard, calledNumbers);
    if (playerCurrentLines >= 1) {
      for (const n of uncalled) {
        if (countLines(playerBoard, [...calledNumbers, n]) >= 2) return n;
      }
    }

    // Full minimax-lite with deep blocking weight
    // For each of my moves: score = myScore - opponent's best score after my move
    return uncalled.reduce((best, n) => {
      const myScore  = scoreCombined(botBoard, playerBoard, calledSet, n, 1.2);
      const oppResp  = opponentBestScore(playerBoard, botBoard, calledSet, n, uncalled);
      // Simulate opponent's move and evaluate my follow-up
      const afterMy   = new Set(calledSet); afterMy.add(n);
      const oppUncalled = uncalled.filter(x => x !== n);
      const oppBest   = oppUncalled.length > 0
        ? oppUncalled.reduce((b2, on) =>
            scoreForBoard(playerBoard, afterMy, on) > scoreForBoard(playerBoard, afterMy, b2) ? on : b2,
            oppUncalled[0])
        : null;
      let myFollowUp = 0;
      if (oppBest) {
        const afterOpp = new Set(afterMy); afterOpp.add(oppBest);
        const myNext   = uncalled.filter(x => x !== n && x !== oppBest);
        if (myNext.length > 0) {
          myFollowUp = myNext.reduce((best2, mn) => {
            const s = scoreForBoard(botBoard, afterOpp, mn);
            return s > best2 ? s : best2;
          }, 0);
        }
      }

      const score = myScore - oppResp * 0.8 + myFollowUp * 0.3;

      const bMyScore = scoreCombined(botBoard, playerBoard, calledSet, best, 1.2);
      const bOppResp = opponentBestScore(playerBoard, botBoard, calledSet, best, uncalled);
      const afterB    = new Set(calledSet); afterB.add(best);
      const bOppUncalled = uncalled.filter(x => x !== best);
      const bOppBest  = bOppUncalled.length > 0
        ? bOppUncalled.reduce((b2, on) =>
            scoreForBoard(playerBoard, afterB, on) > scoreForBoard(playerBoard, afterB, b2) ? on : b2,
            bOppUncalled[0])
        : null;
      let bMyFollowUp = 0;
      if (bOppBest) {
        const afterBOpp = new Set(afterB); afterBOpp.add(bOppBest);
        const bMyNext   = uncalled.filter(x => x !== best && x !== bOppBest);
        if (bMyNext.length > 0) {
          bMyFollowUp = bMyNext.reduce((best2, mn) => {
            const s = scoreForBoard(botBoard, afterBOpp, mn);
            return s > best2 ? s : best2;
          }, 0);
        }
      }
      const bScore = bMyScore - bOppResp * 0.8 + bMyFollowUp * 0.3;

      return score > bScore ? n : best;
    }, uncalled[0]);
  }

  // Fallback
  return uncalled[Math.floor(Math.random() * uncalled.length)];
}

// Legacy alias used by BotGameScreen
export function getBotMove(board, calledNumbers, difficulty) {
  return getAIMove(difficulty, calledNumbers, [], board);
}
