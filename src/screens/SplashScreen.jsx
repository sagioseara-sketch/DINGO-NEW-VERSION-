// src/screens/SplashScreen.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HOW_TO_PLAY = [
  { icon: '🎯', title: 'Your Unique Board', desc: 'You and your opponent each get a 5×5 grid with the same 25 numbers (1–25) arranged in different random positions.' },
  { icon: '📣', title: 'Call a Number', desc: 'On your turn, tap any number on your board to "call" it. That number instantly gets marked on BOTH boards — wherever it appears.' },
  { icon: '📏', title: 'Complete Lines', desc: 'Mark 5 numbers in a row — horizontally, vertically, or diagonally — to complete a line. Each player is racing to form lines on their own board layout.' },
  { icon: '🏆', title: 'Win the Match', desc: 'First player to complete 5 full lines wins! If the last call completes both boards simultaneously, it\'s a TIE and both players earn a point.' },
  { icon: '❤️', title: '5 Chances Per Player', desc: 'Each player has 5 lives. If your timer runs out, you auto-pick a random number and lose one life. Lose all 5 lives and your opponent wins automatically.' },
  { icon: '🎁', title: 'Lifelines', desc: 'Use your 5 lifelines strategically: ⏰ Extra time, 💡 Best move hint, 2️⃣ Pick twice, 🎯 50/50 hints, 🛡️ Shield against timeout.' },
  { icon: '🤖', title: 'Solo vs Bot', desc: 'Not ready for live players? Challenge one of 6 AI difficulty levels — from Easy all the way up to GodMode.' },
];

export default function SplashScreen() {
  const nav = useNavigate();
  const [showHTP, setShowHTP] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 20px 48px',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
    }}>

      {/* ── Glowing logo ── */}
      <div style={{ position: 'relative', marginBottom: 6, textAlign: 'center' }}>
        {/* Shadow copy */}
        <div style={{
          position: 'absolute', top: 6, left: 6, right: 0,
          fontFamily: "'Black Han Sans',sans-serif",
          fontSize: 'clamp(80px,22vw,130px)',
          color: 'var(--c1)',
          lineHeight: 0.9,
          opacity: 0.25,
          letterSpacing: -2,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>DiNGo</div>
        {/* Main logo */}
        <div style={{
          fontFamily: "'Black Han Sans',sans-serif",
          fontSize: 'clamp(80px,22vw,130px)',
          color: 'var(--ink)',
          lineHeight: 0.9,
          letterSpacing: -2,
          position: 'relative',
          textShadow: '0 0 40px rgba(0,255,204,0.2)',
        }}>DiNGo</div>
      </div>

      {/* Live badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        background: 'var(--panel2)', border: '2px solid var(--c1)',
        borderRadius: 'var(--r)', padding: '5px 14px',
        fontSize: 9, letterSpacing: 3, textTransform: 'uppercase',
        fontWeight: 700, color: 'var(--c1)', marginBottom: 28,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c1)', display: 'inline-block', animation: 'blink 1.4s infinite' }} />
        Live Multiplayer Bingo
      </div>

      {/* Tagline */}
      <p style={{ fontSize: 15, color: 'var(--ink2)', textAlign: 'center', maxWidth: 280, lineHeight: 1.75, marginBottom: 32 }}>
        Call numbers. Build lines.<br />
        <strong style={{ color: 'var(--ink)' }}>Beat your opponent to 5.</strong>
      </p>

      {/* Stats strip */}
      <div style={{
        display: 'flex', width: '100%', maxWidth: 340,
        border: '2px solid var(--edge2)', borderRadius: 'var(--r)',
        overflow: 'hidden', marginBottom: 36,
      }}>
        {[{ n: '5×5', l: 'Grid' }, { n: '6', l: 'AI Levels' }, { n: '5', l: 'Lifelines' }].map((s, i) => (
          <div key={i} style={{
            flex: 1, textAlign: 'center', padding: '14px 0',
            background: 'var(--panel)',
            borderRight: i < 2 ? '2px solid var(--edge2)' : 'none',
          }}>
            <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 24, color: 'var(--ink)' }}>{s.n}</div>
            <div style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink3)', fontWeight: 700, marginTop: 3 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div style={{ width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button className="btn btn-primary btn-full"
          style={{ fontSize: 16, padding: '16px 0', letterSpacing: 2, boxShadow: '0 0 24px rgba(0,255,204,0.3), 4px 4px 0 rgba(0,255,204,0.2)' }}
          onClick={() => nav('/login')}>
          🎮 Get Started
        </button>
        <button className="btn btn-ghost btn-full"
          style={{ borderColor: 'rgba(0,255,204,0.35)', color: 'var(--c1)', fontSize: 13 }}
          onClick={() => setShowHTP(true)}>
          📖 How to Play
        </button>
      </div>

      {/* ── How to Play sheet ── */}
      {showHTP && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 900, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
          onClick={() => setShowHTP(false)}
        >
          <div
            style={{
              background: 'var(--panel)', borderRadius: '20px 20px 0 0',
              border: '2px solid var(--edge2)', borderBottom: 'none',
              width: '100%', maxWidth: 480,
              maxHeight: '88vh', overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Accent top bar */}
            <div style={{ height: 4, background: 'linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))', borderRadius: '20px 20px 0 0' }} />
            <div style={{ padding: '18px 18px 36px' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 24, letterSpacing: 3 }}>HOW TO PLAY</span>
                <button onClick={() => setShowHTP(false)} style={{
                  background: 'none', border: '2px solid var(--edge2)',
                  color: 'var(--ink2)', width: 34, height: 34,
                  borderRadius: 8, cursor: 'pointer', fontSize: 15,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>✕</button>
              </div>

              {/* Steps */}
              {HOW_TO_PLAY.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 22, alignItems: 'flex-start' }}>
                  <div style={{
                    fontSize: 32, flexShrink: 0, lineHeight: 1,
                    width: 52, height: 52, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', background: 'var(--panel2)',
                    borderRadius: 12, border: '2px solid var(--edge2)',
                  }}>{s.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}

              <button className="btn btn-primary btn-full"
                style={{ marginTop: 4, fontSize: 14 }}
                onClick={() => setShowHTP(false)}>
                Got it! Let's Play 🎮
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
