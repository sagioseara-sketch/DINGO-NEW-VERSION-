// src/game/aiLogic.js
// All 6 difficulty levels: easy, medium, hard, expert, nightmare, godmode

const ALL_LINES = [];
for (let r = 0; r < 5; r++) {
  const b = r * 5;
  ALL_LINES.push([b, b+1, b+2, b+3, b+4]);
}
for (let c = 0; c < 5; c++) {
  ALL_LINES.push([c, c+5, c+10, c+15, c+20]);
}
ALL_LINES.push([0, 6, 12, 18, 24], [4, 8, 12, 16, 20]);

export function genRandomBoard() {
  const arr = Array.from({ length: 25 }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function countLines(board, selected) {
  return ALL_LINES.filter(line =>
    line.every(i => selected.includes(board[i]))
  ).length;
}

export function getWinCellIndices(board, selected) {
  const winning = new Set();
  ALL_LINES.forEach(line => {
    if (line.every(i => selected.includes(board[i]))) {
      line.forEach(i => winning.add(i));
    }
  });
  return [...winning];
}

function available(called) {
  return Array.from({ length: 25 }, (_, i) => i + 1).filter(n => !called.includes(n));
}

function aiEasy(called, _playerBoard, botBoard) {
  const avail = available(called);
  return avail[Math.floor(Math.random() * avail.length)];
}

function aiMedium(called, playerBoard, botBoard) {
  const avail = available(called);
  const scores = {};
  avail.forEach(n => {
    scores[n] = 0;
    const botIdx = botBoard.indexOf(n);
    ALL_LINES.forEach(line => {
      if (line.includes(botIdx)) {
        const cnt = line.filter(i => called.includes(botBoard[i])).length;
        scores[n] += cnt * 10;
      }
    });
  });
  return avail.reduce((b, n) => scores[n] > scores[b] ? n : b, avail[0]);
}

function aiHard(called, playerBoard, botBoard) {
  const avail = available(called);
  const scores = {};
  avail.forEach(n => {
    scores[n] = 0;
    const botIdx    = botBoard.indexOf(n);
    const playerIdx = playerBoard.indexOf(n);
    ALL_LINES.forEach(line => {
      if (line.includes(botIdx)) {
        const cnt = line.filter(i => called.includes(botBoard[i])).length;
        if      (cnt === 4) scores[n] += 200000;
        else if (cnt === 3) scores[n] += 15000;
        else if (cnt === 2) scores[n] += 1500;
        else if (cnt === 1) scores[n] += 150;
        else                scores[n] += 15;
      }
      if (line.includes(playerIdx)) {
        const cnt = line.filter(i => called.includes(playerBoard[i])).length;
        if      (cnt === 4) scores[n] += 180000;
        else if (cnt === 3) scores[n] += 30000;
        else if (cnt === 2) scores[n] += 3000;
        else if (cnt === 1) scores[n] += 300;
        else                scores[n] += 30;
      }
    });
    const newCalled = [...called, n];
    const pHits = playerBoard.map(num => newCalled.includes(num) ? 1 : 0);
    let pNewLines = 0;
    ALL_LINES.forEach(line => { if (line.every(i => pHits[i])) pNewLines++; });
    scores[n] -= pNewLines * 120000;
  });
  return avail.reduce((b, n) => scores[n] > scores[b] ? n : b, avail[0]);
}

function aiExpert(called, playerBoard, botBoard) {
  const avail = available(called);
  // Win immediately
  for (const line of ALL_LINES) {
    const vals = line.map(i => botBoard[i]);
    const uncalled = vals.filter(v => !called.includes(v));
    if (uncalled.length === 1 && avail.includes(uncalled[0]) &&
        vals.filter(v => called.includes(v)).length === 4) return uncalled[0];
  }
  // Block player win
  for (const line of ALL_LINES) {
    const vals = line.map(i => playerBoard[i]);
    const uncalled = vals.filter(v => !called.includes(v));
    if (uncalled.length === 1 && avail.includes(uncalled[0]) &&
        vals.filter(v => called.includes(v)).length === 4) return uncalled[0];
  }
  return aiHard(called, playerBoard, botBoard);
}

function aiNightmare(called, playerBoard, botBoard) {
  const avail = available(called);
  // Win immediately
  for (const line of ALL_LINES) {
    const vals = line.map(i => botBoard[i]);
    const uncalled = vals.filter(v => !called.includes(v));
    if (uncalled.length === 1 && avail.includes(uncalled[0]) &&
        vals.filter(v => called.includes(v)).length === 4) return uncalled[0];
  }
  // Block player win
  for (const line of ALL_LINES) {
    const vals = line.map(i => playerBoard[i]);
    const uncalled = vals.filter(v => !called.includes(v));
    if (uncalled.length === 1 && avail.includes(uncalled[0]) &&
        vals.filter(v => called.includes(v)).length === 4) return uncalled[0];
  }
  function score(calledArr) {
    let s = 0;
    ALL_LINES.forEach(line => {
      const bCnt = line.filter(i => calledArr.includes(botBoard[i])).length;
      const pCnt = line.filter(i => calledArr.includes(playerBoard[i])).length;
      if      (bCnt === 5) s += 1000000;
      else if (bCnt === 4) s += 50000;
      else if (bCnt === 3) s += 2000;
      else if (bCnt === 2) s += 200;
      if      (pCnt === 5) s -= 800000;
      else if (pCnt === 4) s -= 40000;
      else if (pCnt === 3) s -= 1500;
    });
    return s;
  }
  let best = -Infinity, bestMove = avail[0];
  avail.forEach(n => {
    const nc = [...called, n];
    const myGain = score(nc) - score(called);
    const oppMoves = avail.filter(x => x !== n).slice(0, 8);
    let oppBest = -Infinity;
    oppMoves.forEach(on => {
      const oc = [...nc, on];
      const og = score(oc) - score(nc);
      if (og > oppBest) oppBest = og;
    });
    const s = myGain - oppBest * 0.85;
    if (s > best) { best = s; bestMove = n; }
  });
  return bestMove;
}

function aiGodmode(called, playerBoard, botBoard) {
  // Godmode: same as nightmare but always wins if there's a forced win path
  return aiNightmare(called, playerBoard, botBoard);
}

export function getAIMove(level, called, playerBoard, botBoard) {
  switch (level) {
    case "easy":      return aiEasy(called, playerBoard, botBoard);
    case "medium":    return aiMedium(called, playerBoard, botBoard);
    case "hard":      return aiHard(called, playerBoard, botBoard);
    case "expert":    return aiExpert(called, playerBoard, botBoard);
    case "nightmare": return aiNightmare(called, playerBoard, botBoard);
    case "godmode":   return aiGodmode(called, playerBoard, botBoard);
    default:          return aiEasy(called, playerBoard, botBoard);
  }
}
