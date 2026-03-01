// src/screens/RoomScreen.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { genRoomId, createRoom, joinRoom, listenRoom, cleanupRoom } from "../firebase/roomService";
import { genRandomBoard } from "../game/aiLogic";
import { getSFX } from "../sounds/sfxThemes";

export default function RoomScreen() {
  const { mode } = useParams(); // "create" | "join"
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const [roomId, setRoomId]     = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [status, setStatus]     = useState("idle"); // idle | waiting | joining | ready | error
  const [error, setError]       = useState("");
  const myBoard = useState(() => genRandomBoard())[0];

  const myData = {
    uid:  user?.uid,
    name: profile?.displayName || "Player",
    avatar: profile?.avatar || "🎯"
  };

  // Create room
  const handleCreate = async () => {
    setStatus("waiting");
    const id = genRoomId();
    setRoomId(id);
    await createRoom(id, myData, myBoard);
    sfx.click();
    // Listen for opponent joining
    const unsub = listenRoom(id, (room) => {
      if (room?.players?.p2 && room?.gameState?.status === "playing") {
        unsub();
        nav(`/game/${id}`, { state: { role: "p1", board: myBoard, roomData: room } });
      }
      if (!room) { setStatus("error"); setError("Room expired."); }
    });
  };

  // Join room
  const handleJoin = async () => {
    const code = joinCode.trim().toUpperCase();
    if (code.length !== 4) { setError("Enter a 4-character room code."); return; }
    setStatus("joining"); setError("");
    try {
      const room = await joinRoom(code, myData, myBoard);
      sfx.click();
      nav(`/game/${code}`, { state: { role: "p2", board: myBoard, roomData: room } });
    } catch (err) {
      setStatus("idle");
      setError(err.message || "Could not join room. Check the code.");
    }
  };

  const handleCancel = async () => {
    if (roomId) await cleanupRoom(roomId);
    nav("/");
  };

  if (mode === "create") {
    return (
      <div className="screen" style={{ justifyContent: "center", paddingBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 440, marginBottom: 20 }}>
          <button className="btn btn-ghost" style={{ padding: "6px 12px" }} onClick={handleCancel}>← Back</button>
          <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, letterSpacing: 2 }}>⚡ CREATE ROOM</span>
        </div>

        <div className="card" style={{ maxWidth: 440 }}>
          <div className="card-body" style={{ textAlign: "center" }}>
            {status === "idle" && (
              <>
                <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Create a Private Room</div>
                <div className="muted small" style={{ marginBottom: 24 }}>Share the code with a friend. They join, you battle!</div>
                <button className="btn btn-primary btn-full" onClick={handleCreate}>
                  🎮 Create Room
                </button>
              </>
            )}
            {status === "waiting" && (
              <>
                <div className="label" style={{ marginBottom: 8 }}>ROOM CODE</div>
                <div className="room-code-display">{roomId}</div>
                <div className="room-status">Share this code with your friend</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 20 }}>
                  <div className="spinner" />
                  <span className="muted small">Waiting for opponent…</span>
                </div>
                <button
                  className="btn btn-ghost btn-full"
                  onClick={() => { navigator.clipboard?.writeText(roomId); }}
                  style={{ marginBottom: 10 }}>
                  📋 Copy Code
                </button>
                <button className="btn btn-ghost btn-full" onClick={handleCancel}>
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Join mode
  return (
    <div className="screen" style={{ justifyContent: "center", paddingBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 440, marginBottom: 20 }}>
        <button className="btn btn-ghost" style={{ padding: "6px 12px" }} onClick={() => nav("/")}>← Back</button>
        <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, letterSpacing: 2 }}>🔗 JOIN ROOM</span>
      </div>

      <div className="card" style={{ maxWidth: 440 }}>
        <div className="card-body">
          <div style={{ fontSize: 48, textAlign: "center", marginBottom: 16 }}>🔗</div>
          <div className="label">Room Code</div>
          <input
            type="text"
            placeholder="ABCD"
            value={joinCode}
            onChange={e => setJoinCode(e.target.value.toUpperCase().slice(0, 4))}
            onKeyDown={e => e.key === "Enter" && handleJoin()}
            style={{ textAlign: "center", fontSize: 28, letterSpacing: 10, fontFamily: "'Black Han Sans',sans-serif", marginBottom: 16 }}
          />
          {error && (
            <div style={{ color: "var(--c2)", fontSize: 13, marginBottom: 14, background: "rgba(255,45,85,0.1)", border: "2px solid var(--c2)", borderRadius: "var(--r)", padding: "10px 12px" }}>
              {error}
            </div>
          )}
          <button className="btn btn-primary btn-full" onClick={handleJoin}
            disabled={status === "joining" || joinCode.length !== 4}>
            {status === "joining" ? "⏳ Joining…" : "🎮 Join Game"}
          </button>
        </div>
      </div>
    </div>
  );
}
