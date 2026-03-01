// src/sounds/sfxThemes.js
// Web Audio API sound generation — no external files needed.
// Volume is stored in localStorage as 'sfxVolume' (0.0 to 1.0).
// Five levels: Mute(0), Low(0.2), Medium(0.5), High(0.75), Max(1.0).

function createAudioContext() {
  try { return new (window.AudioContext || window.webkitAudioContext)(); }
  catch (_) { return null; }
}

let _ctx = null;
function getCtx() {
  if (!_ctx) _ctx = createAudioContext();
  if (_ctx?.state === 'suspended') _ctx.resume();
  return _ctx;
}

// Read the current volume multiplier (0.0–1.0) from storage
function vol() {
  const v = parseFloat(localStorage.getItem('sfxVolume') ?? '0.75');
  return isNaN(v) ? 0.75 : Math.max(0, Math.min(1, v));
}

// ── Audio primitives ─────────────────────────────────────────────

function playTone(freq, gain = 0.1, type = 'sine', duration = 0.1) {
  const v = vol(); if (v === 0) return;
  const ctx = getCtx(); if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(gain * v, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  o.start(); o.stop(ctx.currentTime + duration);
}

function playSweep(from, to, gain = 0.1, type = 'sine') {
  const v = vol(); if (v === 0) return;
  const ctx = getCtx(); if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = type;
  o.frequency.setValueAtTime(from, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(to, ctx.currentTime + 0.15);
  g.gain.setValueAtTime(gain * v, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
  o.start(); o.stop(ctx.currentTime + 0.15);
}

function playChord(freqs, gain = 0.1, type = 'sine') {
  freqs.forEach((f, i) => setTimeout(() => playTone(f, gain, type, 0.3), i * 60));
}

function playNoise(gain = 0.05, filterFreq = 100) {
  const v = vol(); if (v === 0) return;
  const ctx = getCtx(); if (!ctx) return;
  const buf = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  const f = ctx.createBiquadFilter();
  const g = ctx.createGain();
  src.buffer = buf; f.type = 'highpass'; f.frequency.value = filterFreq;
  src.connect(f); f.connect(g); g.connect(ctx.destination);
  g.gain.setValueAtTime(gain * v, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
  src.start(); src.stop(ctx.currentTime + 0.05);
}

function playFanfare(speed = 1.0) {
  [523, 659, 784, 1047].forEach((f, i) =>
    setTimeout(() => playTone(f, 0.15, 'square', 0.2 / speed), i * 100 / speed)
  );
}

function playLose(speed = 1.0) {
  [400, 320, 250].forEach((f, i) =>
    setTimeout(() => playTone(f, 0.1, 'sawtooth', 0.25 / speed), i * 120 / speed)
  );
}

// ── Theme definitions ────────────────────────────────────────────

const classic = {
  click: () => playTone(880, 0.05, 'square', 0.1),
  cross: () => playTone(660, 0.1,  'square', 0.15),
  line:  () => playChord([523, 659, 784], 0.2),
  win:   () => playFanfare(),
  lose:  () => playLose(),
  ping:  () => playTone(1200, 0.05, 'sine', 0.08),
};

const ninja = {
  click: () => playNoise(0.03, 80),
  cross: () => playSweep(800, 200, 0.12, 'sawtooth'),
  line:  () => playChord([400, 500, 600], 0.18, 'sawtooth'),
  win:   () => playFanfare(1.2),
  lose:  () => playLose(0.8),
  ping:  () => playTone(1400, 0.03, 'sine', 0.06),
};

const space = {
  click: () => playSweep(300, 600, 0.08, 'sine'),
  cross: () => playSweep(600, 100, 0.15, 'sine'),
  line:  () => playChord([261, 329, 392], 0.25, 'sine'),
  win:   () => playFanfare(0.9),
  lose:  () => playLose(0.7),
  ping:  () => playSweep(800, 1200, 0.06, 'sine'),
};

const lofi = {
  click: () => playTone(220, 0.04, 'sine', 0.2),
  cross: () => playTone(330, 0.06, 'sine', 0.25),
  line:  () => playChord([261, 329, 392], 0.12, 'sine'),
  win:   () => playFanfare(0.6),
  lose:  () => playLose(0.5),
  ping:  () => playTone(440, 0.03, 'sine', 0.15),
};

const arcade = {
  click: () => playSweep(400, 800,  0.08, 'square'),
  cross: () => playSweep(200, 1000, 0.12, 'square'),
  line:  () => playChord([523, 784, 1047], 0.18, 'square'),
  win:   () => playFanfare(1.4),
  lose:  () => playLose(1.2),
  ping:  () => playSweep(600, 1400, 0.05, 'square'),
};

const THEMES = { classic, ninja, space, lofi, arcade };

export const THEME_INFO = [
  { id: 'classic', name: 'Classic',  icon: '🎮', desc: 'Retro 8-bit bleeps'   },
  { id: 'ninja',   name: 'Ninja',    icon: '🥷', desc: 'Sharp sword slashes'  },
  { id: 'space',   name: 'Space',    icon: '🌌', desc: 'Sci-fi laser sounds'  },
  { id: 'lofi',    name: 'LoFi',     icon: '🎵', desc: 'Chill warm tones'     },
  { id: 'arcade',  name: 'Arcade',   icon: '🕹️', desc: 'Classic arcade bleeps'},
];

// Five named volume levels mapped to multipliers
export const VOLUME_LEVELS = [
  { id: 'mute', label: 'Mute', icon: '🔇', value: 0 },
  { id: 'low',  label: 'Low',  icon: '🔈', value: 0.2 },
  { id: 'med',  label: 'Med',  icon: '🔉', value: 0.5 },
  { id: 'high', label: 'High', icon: '🔊', value: 0.75 },
  { id: 'max',  label: 'Max',  icon: '📢', value: 1.0 },
];

export function getSFX() {
  const theme = localStorage.getItem('sfxTheme') || 'classic';
  const t = THEMES[theme] || classic;
  // vol() is read lazily inside each primitive, so changes take effect immediately
  return {
    click: () => t.click(),
    cross: () => t.cross(),
    line:  () => t.line(),
    win:   () => t.win(),
    lose:  () => t.lose(),
    ping:  () => t.ping(),
  };
}

export function setSFXTheme(id) { localStorage.setItem('sfxTheme', id); }

// Set volume by level id ('mute','low','med','high','max') or numeric value
export function setVolume(levelIdOrValue) {
  const lvl = VOLUME_LEVELS.find(l => l.id === levelIdOrValue);
  const v   = lvl ? lvl.value : parseFloat(levelIdOrValue);
  localStorage.setItem('sfxVolume', String(isNaN(v) ? 0.75 : v));
}

export function getVolumeLevel() {
  const v   = parseFloat(localStorage.getItem('sfxVolume') ?? '0.75');
  const lvl = VOLUME_LEVELS.find(l => Math.abs(l.value - v) < 0.01);
  return lvl?.id || 'high';
}

// Legacy toggle — sets to max or mute
export function toggleMute() {
  const muted = vol() === 0;
  setVolume(muted ? 'high' : 'mute');
  return !muted;
}
export function isMuted() { return vol() === 0; }
