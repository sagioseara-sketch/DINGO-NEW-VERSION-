// src/sounds/sfxThemes.js
// Sound themes using Web Audio API (no external files needed)
// Each theme generates sounds programmatically

function createAudioContext() {
  try {
    return new (window.AudioContext || window.webkitAudioContext)();
  } catch (_) { return null; }
}

let _ctx = null;
function getCtx() {
  if (!_ctx) _ctx = createAudioContext();
  if (_ctx?.state === "suspended") _ctx.resume();
  return _ctx;
}

// --- Classic (retro beep style) ---
const classic = {
  click: () => playTone(880, 0.05, "square", 0.1),
  cross: () => playTone(660, 0.1,  "square", 0.15),
  line:  () => playChord([523, 659, 784], 0.2),
  win:   () => playFanfare(),
  lose:  () => playLose(),
  ping:  () => playTone(1200, 0.05, "sine", 0.08)
};

// --- Ninja (sharp slashes) ---
const ninja = {
  click: () => playNoise(0.03, 80),
  cross: () => playSweep(800, 200, 0.12, "sawtooth"),
  line:  () => playChord([400, 500, 600], 0.18, "sawtooth"),
  win:   () => playFanfare(1.2),
  lose:  () => playLose(0.8),
  ping:  () => playTone(1400, 0.03, "sine", 0.06)
};

// --- Space (sci-fi) ---
const space = {
  click: () => playSweep(300, 600, 0.08, "sine"),
  cross: () => playSweep(600, 100, 0.15, "sine"),
  line:  () => playChord([261, 329, 392], 0.25, "sine"),
  win:   () => playFanfare(0.9),
  lose:  () => playLose(0.7),
  ping:  () => playSweep(800, 1200, 0.06, "sine")
};

// --- LoFi (soft, warm) ---
const lofi = {
  click: () => playTone(220, 0.04, "sine", 0.2),
  cross: () => playTone(330, 0.06, "sine", 0.25),
  line:  () => playChord([261, 329, 392], 0.12, "sine"),
  win:   () => playFanfare(0.6),
  lose:  () => playLose(0.5),
  ping:  () => playTone(440, 0.03, "sine", 0.15)
};

const THEMES = { classic, ninja, space, lofi };

export const THEME_INFO = [
  { id: "classic", name: "Classic",  icon: "🎮", desc: "Retro 8-bit bleeps" },
  { id: "ninja",   name: "Ninja",    icon: "🥷", desc: "Sharp sword slashes" },
  { id: "space",   name: "Space",    icon: "🌌", desc: "Sci-fi laser sounds" },
  { id: "lofi",    name: "LoFi",     icon: "🎵", desc: "Chill warm tones" }
];

export function getSFX() {
  const theme = localStorage.getItem("sfxTheme") || "classic";
  const t = THEMES[theme] || classic;
  const muted = localStorage.getItem("sfxMuted") === "true";
  return {
    click: () => !muted && t.click(),
    cross: () => !muted && t.cross(),
    line:  () => !muted && t.line(),
    win:   () => !muted && t.win(),
    lose:  () => !muted && t.lose(),
    ping:  () => !muted && t.ping(),
  };
}

export function setSFXTheme(themeId) {
  localStorage.setItem("sfxTheme", themeId);
}

export function toggleMute() {
  const muted = localStorage.getItem("sfxMuted") === "true";
  localStorage.setItem("sfxMuted", String(!muted));
  return !muted;
}

export function isMuted() {
  return localStorage.getItem("sfxMuted") === "true";
}

// --- Audio primitives ---
function playTone(freq, gain = 0.1, type = "sine", duration = 0.1) {
  const ctx = getCtx(); if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(gain, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  o.start(); o.stop(ctx.currentTime + duration);
}

function playSweep(from, to, gain = 0.1, type = "sine") {
  const ctx = getCtx(); if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = type;
  o.frequency.setValueAtTime(from, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(to, ctx.currentTime + 0.15);
  g.gain.setValueAtTime(gain, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
  o.start(); o.stop(ctx.currentTime + 0.15);
}

function playChord(freqs, gain = 0.1, type = "sine") {
  freqs.forEach((f, i) => {
    setTimeout(() => playTone(f, gain, type, 0.3), i * 60);
  });
}

function playNoise(gain = 0.05, filterFreq = 100) {
  const ctx = getCtx(); if (!ctx) return;
  const buf = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  const f = ctx.createBiquadFilter();
  const g = ctx.createGain();
  src.buffer = buf; f.type = "highpass"; f.frequency.value = filterFreq;
  src.connect(f); f.connect(g); g.connect(ctx.destination);
  g.gain.setValueAtTime(gain, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
  src.start(); src.stop(ctx.currentTime + 0.05);
}

function playFanfare(speed = 1.0) {
  const notes = [523, 659, 784, 1047];
  notes.forEach((f, i) => {
    setTimeout(() => playTone(f, 0.15, "square", 0.2 / speed), i * 100 / speed);
  });
}

function playLose(speed = 1.0) {
  const notes = [400, 320, 250];
  notes.forEach((f, i) => {
    setTimeout(() => playTone(f, 0.1, "sawtooth", 0.25 / speed), i * 120 / speed);
  });
}
