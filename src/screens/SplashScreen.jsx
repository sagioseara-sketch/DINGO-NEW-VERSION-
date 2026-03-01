// src/screens/SplashScreen.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const nav = useNavigate();
  const [showHTP, setShowHTP] = useState(false);

  const steps = [
    { icon: '🎯', title: 'Your Board', desc: 'You get a 5×5 grid of numbers 1–25 in random order. Your opponent gets a different random board.' },
    { icon: '👆', title: 'Pick a Number', desc: 'Tap any number on YOUR board to mark it. You and your opponent take turns picking.' },
    { icon: '📏', title: 'Complete Lines', desc: 'Get 5 numbers in a row — across, down, or diagonally — to complete a line.' },
    { icon: '🏆', title: 'Win!', desc: 'First player to complete 5 full lines wins the match!' },
    { icon: '🤖', title: 'vs Bot', desc: 'Play solo against 6 AI difficulty levels from Easy to GodMode.' },
    { icon: '⚡', title: 'Multiplayer', desc: 'Use Play Now for instant auto-match, or create a private room and share the code with a friend.' },
    { icon: '🎁', title: 'Lifelines', desc: 'Each game you get 5 lifelines: +20s, Hint, Double Pick, 50/50, and Shield. Use them wisely!' },
  ];

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '24px 20px', overflowY: 'auto'
    }}>

      {/* Logo */}
      <div style={{ position: 'relative', textAlign: 'center', marginBottom: 6 }}>
        <div style={{
          fontFamily: "'Black Han Sans',sans-serif",
          fontSize: 'clamp(82px,22vw,130px)',
          color: 'var(--ink)', lineHeight: 0.9, letterSpacing: -2,
          position: 'relative', zIndex: 1
        }}>
          DiNGo
        </div>
        <div style={{
          fontFamily: "'Black Han Sans',sans-serif",
          fontSize: 'clamp(82px,22vw,130px)',
          color: 'var(--c1)', lineHeight: 0.9, letterSpacing: -2,
          position: 'absolute', top: 4, left: 4, right: 0,
          opacity: 0.3, zIndex: 0
        }}>
          DiNGo
        </div>
      </div>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        background: 'var(--panel2)', border: '2px solid var(--c1)',
        borderRadius: 'var(--r)', padding: '4px 14px',
        fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
        fontWeight: 700, color: 'var(--c1)', marginBottom: 24
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--c1)', animation: 'blink 1.4s infinite' }} />
        LIVE MULTIPLAYER BINGO
      </div>

      <p style={{ fontSize: 14, color: 'var(--ink2)', maxWidth: 280, lineHeight: 1.7, marginBottom: 28, textAlign: 'center' }}>
        Build <strong style={{ color: 'var(--ink)' }}>5 lines</strong> before your opponent.<br />
        Every board is different. Every move counts.
      </p>

      {/* Stats */}
      <div style={{
        display: 'flex', border: '2px solid var(--edge2)',
        borderRadius: 'var(--r)', overflow: 'hidden',
        marginBottom: 32, width: '100%', maxWidth: 320
      }}>
        {[{ num: '5×5', lbl: 'Grid' }, { num: '6', lbl: 'AI Levels' }, { num: '∞', lbl: 'Players' }].map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: '12px 0', textAlign: 'center',
            background: 'var(--panel)',
            borderRight: i < 2 ? '2px solid var(--edge2)' : 'none'
          }}>
            <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, color: 'var(--ink)' }}>{s.num}</div>
            <div style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink3)', fontWeight: 700 }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div style={{ width: '100%', maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button className="btn btn-primary btn-full"
          style={{ fontSize: 15, padding: 14 }}
          onClick={() => nav('/login')}>
          🎮 Get Started
        </button>
        <button className="btn btn-ghost btn-full"
          style={{ borderColor: 'rgba(0,255,204,0.4)', color: 'var(--c1)' }}
          onClick={() => setShowHTP(true)}>
          📖 How to Play
        </button>
      </div>

      {/* How to Play Modal */}
      {showHTP && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 900,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            padding: '0 0 0 0'
          }}
          onClick={() => setShowHTP(false)}
        >
          <div
            style={{
              background: 'var(--panel)', borderRadius: '20px 20px 0 0',
              width: '100%', maxWidth: 480,
              border: '2px solid var(--edge2)', borderBottom: 'none',
              maxHeight: '85vh', overflowY: 'auto',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top accent line */}
            <div style={{ height: 3, background: 'linear-gradient(90deg,var(--c1),var(--c2),var(--c3))', borderRadius: '20px 20px 0 0' }} />

            <div style={{ padding: '20px 20px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, letterSpacing: 3 }}>HOW TO PLAY</span>
                <button onClick={() => setShowHTP(false)}
                  style={{ background: 'none', border: '2px solid var(--edge2)', color: 'var(--ink2)', width: 32, height: 32, borderRadius: 7, cursor: 'pointer', fontSize: 14 }}>
                  ✕
                </button>
              </div>

              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 18, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 30, flexShrink: 0, lineHeight: 1 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55 }}>{s.desc}</div>
                  </div>
                </div>
              ))}

              <button className="btn btn-primary btn-full"
                style={{ marginTop: 8 }}
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
