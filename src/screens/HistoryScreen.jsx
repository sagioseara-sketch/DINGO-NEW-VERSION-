// src/screens/HistoryScreen.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getMyHistory } from "../firebase/history";

function fmtDuration(sec) {
  if (!sec) return "—";
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function fmtDate(ts) {
  if (!ts) return "—";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

export default function HistoryScreen() {
  const { user } = useAuth();
  const nav = useNavigate();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getMyHistory(user.uid).then(d => { setHistory(d); setLoading(false); });
  }, [user]);

  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 440, marginBottom: 16, paddingTop: 8 }}>
        <button className="btn btn-ghost" style={{ padding: "6px 12px" }} onClick={() => nav("/")}>← Back</button>
        <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, letterSpacing: 2 }}>📊 HISTORY</span>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 40 }}>
          <div className="spinner" />
        </div>
      ) : history.length === 0 ? (
        <div style={{ textAlign: "center", color: "var(--ink2)", paddingTop: 60 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎮</div>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>No games yet</div>
          <div style={{ fontSize: 13 }}>Play your first game to see history here!</div>
        </div>
      ) : (
        <div className="card" style={{ maxWidth: 440 }}>
          {history.map(m => {
            const iWon = m.winner === user.uid;
            const isP1 = m.p1Uid === user.uid;
            const myLines   = isP1 ? m.p1Lines   : m.p2Lines;
            const oppLines  = isP1 ? m.p2Lines   : m.p1Lines;
            const oppName   = isP1 ? m.p2Name    : m.p1Name;

            return (
              <div key={m.id} className="history-row">
                {/* Result icon */}
                <div style={{ fontSize: 28, width: 36, textAlign: "center" }}>
                  {iWon ? "🏆" : "💀"}
                </div>
                {/* Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>
                    vs {oppName || (m.mode === "bot" ? `🤖 ${m.botLevel || "Bot"}` : "Unknown")}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--ink2)", marginTop: 2 }}>
                    {fmtDate(m.timestamp)} · {fmtDuration(m.duration)}
                  </div>
                </div>
                {/* Lines score */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 18 }}>
                    <span style={{ color: "var(--c1)" }}>{myLines || 0}</span>
                    <span style={{ color: "var(--ink3)", margin: "0 4px" }}>–</span>
                    <span style={{ color: "var(--c2)" }}>{oppLines || 0}</span>
                  </div>
                  <div className={iWon ? "result-win" : "result-loss"}>
                    {iWon ? "WIN" : "LOSS"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
