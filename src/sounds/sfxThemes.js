// src/sounds/sfxThemes.js
//
// Web Audio API sound generation — no external files needed.
// Volume is stored in localStorage as 'sfxVolume' (0.0 to 1.0).
// Five levels: Mute(0), Low(0.2), Medium(0.5), High(0.75), Max(1.0).
//
// NEW THEMES in this version: piano, drums, chiptune (8 themes total)

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

// ── Audio primitives ──────────────────────────────────────────────────────────

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
  const buf  = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  const f   = ctx.createBiquadFilter();
  const g   = ctx.createGain();
  src.buffer = buf; f.type = 'highpass'; f.frequency.value = filterFreq;
  src.connect(f); f.connect(g); g.connect(ctx.destination);
  g.gain.setValueAtTime(gain * v, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
  src.start(); src.stop(ctx.currentTime + 0.05);
}

// Noise burst with a longer envelope — good for snare/tom hits
function playPercussion(gain = 0.08, filterFreq = 200, dur = 0.12) {
  const v = vol(); if (v === 0) return;
  const ctx = getCtx(); if (!ctx) return;
  const buf  = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  const f   = ctx.createBiquadFilter();
  const g   = ctx.createGain();
  src.buffer = buf; f.type = 'bandpass'; f.frequency.value = filterFreq;
  src.connect(f); f.connect(g); g.connect(ctx.destination);
  g.gain.setValueAtTime(gain * v, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
  src.start(); src.stop(ctx.currentTime + dur);
}

// Piano-style tone: sine wave with a longer, natural decay
function playPiano(freq, gain = 0.12) {
  const v = vol(); if (v === 0) return;
  const ctx = getCtx(); if (!ctx) return;
  const o  = ctx.createOscillator();
  const g  = ctx.createGain();
  const h  = ctx.createOscillator(); // harmonic (octave up, quieter)
  const hg = ctx.createGain();
  o.connect(g);  g.connect(ctx.destination);
  h.connect(hg); hg.connect(ctx.destination);
  o.type = 'sine'; o.frequency.value = freq;
  h.type = 'sine'; h.frequency.value = freq * 2;
  g.gain.setValueAtTime(gain * v, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
  hg.gain.setValueAtTime(gain * 0.3 * v, ctx.currentTime);
  hg.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
  o.start(); o.stop(ctx.currentTime + 0.8);
  h.start(); h.stop(ctx.currentTime + 0.4);
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

// ── Theme definitions ─────────────────────────────────────────────────────────

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

// NEW: Piano — warm, musical piano tones with natural decay.
// Each note rings out like a real piano key using harmonic layering.
const piano = {
  click: () => playPiano(880,  0.08),
  cross: () => playPiano(659,  0.12),
  line:  () => {
    // Arpeggio: C major chord played one note at a time
    [523, 659, 784].forEach((f, i) => setTimeout(() => playPiano(f, 0.14), i * 80));
  },
  win:   () => {
    // Ascending major scale: C D E F G A B C
    [523, 587, 659, 698, 784, 880, 988, 1047].forEach((f, i) =>
      setTimeout(() => playPiano(f, 0.14), i * 80)
    );
  },
  lose:  () => {
    // Descending minor progression
    [440, 392, 349, 294].forEach((f, i) =>
      setTimeout(() => playPiano(f, 0.12), i * 110)
    );
  },
  ping:  () => playPiano(1100, 0.06),
};

// NEW: Drums — punchy percussion sounds built entirely from filtered noise bursts.
// Hi-hat (high pass) for click, snare (band-pass) for cross, tom (low pass) for lines.
const drums = {
  click: () => playNoise(0.04, 4000),              // Hi-hat: high-freq noise
  cross: () => playPercussion(0.1, 300, 0.15),     // Snare: mid-band
  line:  () => {
    playPercussion(0.14, 120, 0.2);                // Floor tom (low)
    setTimeout(() => playPercussion(0.1, 300, 0.15), 80); // + snare
  },
  win:   () => {
    // Drum roll then crash
    [0, 60, 120, 180, 220, 260].forEach(t => setTimeout(() => playNoise(0.06, 1000), t));
    setTimeout(() => playPercussion(0.2, 800, 0.4), 300);
  },
  lose:  () => {
    playPercussion(0.1, 200, 0.2);
    setTimeout(() => playPercussion(0.08, 150, 0.3), 150);
    setTimeout(() => playPercussion(0.06, 100, 0.4), 350);
  },
  ping:  () => playNoise(0.03, 8000),              // Very high click
};

// NEW: Chiptune — NES/Game Boy style square-wave bleeps.
// Super sharp attack, very short duration for that classic 8-bit feel.
const chiptune = {
  click: () => playTone(1200, 0.06, 'square', 0.04),
  cross: () => {
    playTone(400, 0.1, 'square', 0.05);
    setTimeout(() => playTone(800, 0.1, 'square', 0.05), 50);
  },
  line:  () => {
    // Ascending triad blip sequence
    [523, 659, 784, 1047].forEach((f, i) =>
      setTimeout(() => playTone(f, 0.14, 'square', 0.06), i * 55)
    );
  },
  win: () => {
    // Classic "dun dun DUN!" victory jingle
    const seq = [659, 659, 659, 523, 659, 784, 392];
    seq.forEach((f, i) => setTimeout(() => playTone(f, 0.15, 'square', 0.1), i * 90));
  },
  lose: () => {
    // Descending "wa wa waaa"
    [494, 440, 392, 349, 294].forEach((f, i) =>
      setTimeout(() => playTone(f, 0.1, 'square', 0.12), i * 100)
    );
  },
  ping:  () => playTone(1400, 0.04, 'square', 0.03),
};

// ── Theme registry ────────────────────────────────────────────────────────────

const THEMES = { classic, ninja, space, lofi, arcade, piano, drums, chiptune };

export const THEME_INFO = [
  { id: 'classic',  name: 'Classic',  icon: '🎮', desc: 'Retro 8-bit bleeps'       },
  { id: 'ninja',    name: 'Ninja',    icon: '🥷', desc: 'Sharp sword slashes'      },
  { id: 'space',    name: 'Space',    icon: '🌌', desc: 'Sci-fi laser sounds'      },
  { id: 'lofi',     name: 'LoFi',     icon: '🎵', desc: 'Chill warm tones'         },
  { id: 'arcade',   name: 'Arcade',   icon: '🕹️', desc: 'Classic arcade bleeps'    },
  { id: 'piano',    name: 'Piano',    icon: '🎹', desc: 'Warm musical piano keys'   },
  { id: 'drums',    name: 'Drums',    icon: '🥁', desc: 'Punchy percussion hits'    },
  { id: 'chiptune', name: 'Chiptune', icon: '👾', desc: 'NES / Game Boy 8-bit'     },
];

// Five named volume levels mapped to multipliers
export const VOLUME_LEVELS = [
  { id: 'mute', label: 'Mute', icon: '🔇', value: 0    },
  { id: 'low',  label: 'Low',  icon: '🔈', value: 0.2  },
  { id: 'med',  label: 'Med',  icon: '🔉', value: 0.5  },
  { id: 'high', label: 'High', icon: '🔊', value: 0.75 },
  { id: 'max',  label: 'Max',  icon: '📢', value: 1.0  },
];

export function getSFX() {
  const theme = localStorage.getItem('sfxTheme') || 'classic';
  const t = THEMES[theme] || classic;
  // vol() is read lazily inside each primitive so changes take effect immediately
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

export function toggleMute() {
  const muted = vol() === 0;
  setVolume(muted ? 'high' : 'mute');
  return !muted;
}
export function isMuted() { return vol() === 0; }
