// src/screens/RoomScreen.jsx
//
// NEW: Board Setup phase before creating/joining any room.
// Players can either:
//   (a) Click cells one by one to fill numbers 1, 2, 3... in order, OR
//   (b) Hit "Shuffle" for a random arrangement.
// Only after confirming the board do they proceed to create/join the room.

import { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { genRoomId, createRoom, joinRoom, listenRoom, cleanupRoom } from '../firebase/roomService';
import { genRandomBoard } from '../game/aiLogic';
import { getSFX } from '../sounds/sfxThemes';

// Generate a board where user fills cells by clicking — starts all empty (0 = unfilled)
function emptyBoard() { return Array(25).fill(0); }

// BoardSetup: the custom arrangement screen shown before create/join
function BoardSetup({ onConfirm }) {
  const [board, setBoard] = useState(emptyBoard());
  // nextNum: the next number that will be placed when the player clicks a cell
  const nextNum = board.filter(n => n !== 0).length + 1; // 1 through 25

  const handleCell = (idx) => {
    if (board[idx] !== 0) return; // Already filled
    if (nextNum > 25) return;
    const updated = [...board];
    updated[idx] = nextNum;
    setBoard(updated);
  };

  const handleShuffle = () => setBoard(genRandomBoard());
  const handleClear   = () => setBoard(emptyBoard());
  const isComplete    = board.every(n => n !== 0);

  return (
    <div style={{ width:'100%', maxWidth:440, display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
      <div className="card" style={{ width:'100%' }}>
        <div className="card-body">
          <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:18, letterSpacing:2, marginBottom:6 }}>🎲 SET UP YOUR BOARD</div>
          <div style={{ fontSize:12, color:'var(--ink2)', lineHeight:1.6, marginBottom:14 }}>
            Click each cell to fill numbers 1–25 in your chosen order, or hit Shuffle for a random arrangement.
          </div>

          {/* Status */}
          {!isComplete && (
            <div style={{ textAlign:'center', fontSize:13, marginBottom:10 }}>
              <span style={{ color:'var(--c1)', fontWeight:800, fontSize:18 }}>{nextNum}</span>
              <span style={{ color:'var(--ink2)' }}> — click a cell to place this number</span>
            </div>
          )}
          {isComplete && (
            <div style={{ textAlign:'center', fontSize:13, color:'var(--c1)', fontWeight:800, marginBottom:10 }}>
              ✅ Board complete! Ready to play.
            </div>
          )}

          {/* 5x5 grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:5, marginBottom:14 }}>
            {board.map((num, idx) => (
              <button key={idx} onClick={() => handleCell(idx)}
                disabled={num !== 0}
                style={{
                  aspectRatio:'1', border:'2px solid',
                  borderColor: num !== 0 ? 'var(--c1)' : 'var(--edge2)',
                  background: num !== 0 ? 'rgba(0,255,204,0.1)' : 'var(--panel)',
                  borderRadius:8, cursor: num !== 0 ? 'default' : 'pointer',
                  fontFamily:"'Black Han Sans',sans-serif",
                  fontSize: 'clamp(12px,3.5vw,18px)',
                  color: num !== 0 ? 'var(--c1)' : 'var(--ink3)',
                  fontWeight: 700,
                  transition:'all 0.15s',
                  WebkitTapHighlightColor:'transparent',
                }}>
                {num !== 0 ? num : ''}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display:'flex', gap:8 }}>
            <button className="btn btn-ghost" style={{ flex:1 }} onClick={handleClear}>🗑 Clear</button>
            <button className="btn btn-ghost" style={{ flex:1 }} onClick={handleShuffle}>🔀 Shuffle</button>
          </div>
        </div>
      </div>

      <button className="btn btn-primary btn-full"
        disabled={!isComplete}
        onClick={() => onConfirm(board)}
        style={{ fontSize:15, padding:'14px 0', opacity: isComplete ? 1 : 0.4 }}>
        {isComplete ? '✅ Confirm Board & Continue →' : `Fill ${25 - board.filter(n=>n!==0).length} more cells…`}
      </button>
    </div>
  );
}

export default function RoomScreen() {
  const { mode } = useParams(); // 'create' | 'join'
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  // phase: 'setup' → 'action' (waiting/joining)
  const [phase,     setPhase]    = useState('setup');
  const [myBoard,   setMyBoard]  = useState([]);
  const [roomId,    setRoomId]   = useState('');
  const [joinCode,  setJoinCode] = useState('');
  const [status,    setStatus]   = useState('idle');
  const [error,     setError]    = useState('');
  const unsubRef = useRef(null);

  const myData = {
    uid:    user?.uid,
    name:   profile?.displayName || 'Player',
    avatar: profile?.avatar || '🎯',
  };

  // Called when the player confirms their board setup
  const handleBoardConfirmed = async (board) => {
    setMyBoard(board);
    sfx.click?.();
    setPhase('action');

    if (mode === 'create') {
      setStatus('waiting');
      const id = genRoomId();
      setRoomId(id);
      await createRoom(id, myData, board);
      const unsub = listenRoom(id, (room) => {
        if (room?.players?.p2 && room?.gameState?.status === 'playing') {
          unsub();
          nav(`/game/${id}`, { state: { role:'p1', board } });
        }
        if (!room) { setStatus('error'); setError('Room expired.'); }
      });
      unsubRef.current = unsub;
    }
  };

  const handleJoin = async () => {
    const code = joinCode.trim().toUpperCase();
    if (code.length !== 4) { setError('Enter a 4-character room code.'); return; }
    setStatus('joining'); setError('');
    try {
      await joinRoom(code, myData, myBoard);
      sfx.click?.();
      nav(`/game/${code}`, { state: { role:'p2', board: myBoard } });
    } catch (err) {
      setStatus('idle');
      setError(err.message || 'Could not join room. Check the code.');
    }
  };

  const handleCancel = async () => {
    if (unsubRef.current) unsubRef.current();
    if (roomId) await cleanupRoom(roomId);
    nav('/');
  };

  // ── Phase 1: Board setup ──────────────────────────────────────
  if (phase === 'setup') {
    return (
      <div className="screen" style={{ justifyContent:'flex-start', paddingBottom:60 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:440, marginBottom:20, paddingTop:8 }}>
          <button className="btn btn-ghost" style={{ padding:'6px 12px' }} onClick={() => nav('/')}>← Back</button>
          <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, letterSpacing:2 }}>
            {mode === 'create' ? '⚡ CREATE ROOM' : '🔗 JOIN ROOM'}
          </span>
        </div>
        <BoardSetup onConfirm={handleBoardConfirmed} />
      </div>
    );
  }

  // ── Phase 2a: Create — waiting for opponent ───────────────────
  if (mode === 'create') {
    return (
      <div className="screen" style={{ justifyContent:'center', paddingBottom:40 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:440, marginBottom:20 }}>
          <button className="btn btn-ghost" style={{ padding:'6px 12px' }} onClick={handleCancel}>← Cancel</button>
          <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, letterSpacing:2 }}>⚡ CREATE ROOM</span>
        </div>

        <div className="card" style={{ maxWidth:440 }}>
          <div className="card-body" style={{ textAlign:'center' }}>
            <div className="label" style={{ marginBottom:8 }}>ROOM CODE</div>
            <div className="room-code-display">{roomId}</div>
            <div className="room-status">Share this code with your friend</div>
            <div style={{ display:'flex', alignItems:'center', gap:10, justifyContent:'center', marginBottom:20 }}>
              <div className="spinner" />
              <span className="muted small">Waiting for opponent…</span>
            </div>
            <button className="btn btn-ghost btn-full" onClick={() => navigator.clipboard?.writeText(roomId)} style={{ marginBottom:10 }}>
              📋 Copy Code
            </button>
            <button className="btn btn-ghost btn-full" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Phase 2b: Join — enter code ───────────────────────────────
  return (
    <div className="screen" style={{ justifyContent:'center', paddingBottom:40 }}>
      <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:440, marginBottom:20 }}>
        <button className="btn btn-ghost" style={{ padding:'6px 12px' }} onClick={() => nav('/')}>← Back</button>
        <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, letterSpacing:2 }}>🔗 JOIN ROOM</span>
      </div>

      <div className="card" style={{ maxWidth:440 }}>
        <div className="card-body">
          <div style={{ fontSize:48, textAlign:'center', marginBottom:16 }}>🔗</div>
          <div className="label">Room Code</div>
          <input type="text" placeholder="ABCD"
            value={joinCode}
            onChange={e => setJoinCode(e.target.value.toUpperCase().slice(0, 4))}
            onKeyDown={e => e.key === 'Enter' && handleJoin()}
            style={{ textAlign:'center', fontSize:28, letterSpacing:10, fontFamily:"'Black Han Sans',sans-serif", marginBottom:16 }}
          />
          {error && (
            <div style={{ color:'var(--c2)', fontSize:13, marginBottom:14, background:'rgba(255,45,85,0.1)', border:'2px solid var(--c2)', borderRadius:'var(--r)', padding:'10px 12px' }}>
              {error}
            </div>
          )}
          <button className="btn btn-primary btn-full" onClick={handleJoin}
            disabled={status === 'joining' || joinCode.length !== 4}>
            {status === 'joining' ? '⏳ Joining…' : '🎮 Join Game'}
          </button>
        </div>
      </div>
    </div>
  );
}
