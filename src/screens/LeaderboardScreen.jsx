// src/screens/LeaderboardScreen.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLeaderboard } from "../firebase/leaderboard";
import { useAuth } from "../hooks/useAuth";

export default function LeaderboardScreen() {
  const { user } = useAuth();
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLeaderboard().then(d => { setData(d); setLoading(false); });
  }, []);

  const rankStyle = (rank) => {
    if (rank === 1) return { color: "var(--c3)", fontSize: 22 };
    if (rank === 2) return { color: "#aaa",      fontSize: 20 };
    if (rank === 3) return { color: "#cd7f32",   fontSize: 18 };
    return { color: "var(--ink3)", fontSize: 16 };
  };
  const rankIcon = (rank) => rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`;

  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 440, marginBottom: 16, paddingTop: 8 }}>
        <button className="btn btn-ghost" style={{ padding: "6px 12px" }} onClick={() => nav("/")}>← Back</button>
        <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, letterSpacing: 2 }}>🏆 LEADERBOARD</span>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 40 }}>
          <div className="spinner" />
        </div>
      ) : (
        <div className="card" style={{ maxWidth: 440 }}>
          <div style={{ padding: "4px 0" }}>
            {data.length === 0 && (
              <div style={{ textAlign: "center", padding: 32, color: "var(--ink2)" }}>No players yet. Be the first!</div>
            )}
            {data.map((p) => (
              <div key={p.uid} className="lb-row"
                style={{ background: p.uid === user?.uid ? "rgba(0,255,204,0.05)" : "transparent" }}>
                {/* Rank */}
                <div style={{ ...rankStyle(p.rank), fontFamily: "'Black Han Sans',sans-serif", width: 36, textAlign: "center" }}>
                  {rankIcon(p.rank)}
                </div>
                {/* Avatar */}
                <div style={{ fontSize: 24 }}>{p.avatar || "🎯"}</div>
                {/* Name */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>
                    {p.displayName}
                    {p.uid === user?.uid && <span style={{ fontSize: 10, color: "var(--c1)", marginLeft: 6 }}>YOU</span>}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--ink2)" }}>{p.total || 0} games · {p.winRate || 0}% WR</div>
                </div>
                {/* Wins */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 20, color: "var(--c1)" }}>{p.wins || 0}</div>
                  <div style={{ fontSize: 10, color: "var(--ink3)", letterSpacing: 1, textTransform: "uppercase" }}>wins</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
