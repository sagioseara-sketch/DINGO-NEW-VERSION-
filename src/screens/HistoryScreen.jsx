// src/screens/HistoryScreen.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getMyHistory } from '../firebase/history';
import { sendFriendRequest } from '../firebase/friends';
import { showToast } from '../firebase/notifications';

function fmtDate(ts) {
  if (!ts) return '—';
  try {
    const d = ts?.toDate ? ts.toDate() : ts?.seconds ? new Date(ts.seconds * 1000) : new Date(ts);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch { return '—'; }
}

function fmtDuration(sec) {
  if (!sec) return '—';
  const m = Math.floor(sec / 60), s = sec % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

export default function HistoryScreen() {
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingFriend, setAddingFriend] = useState({});

  useEffect(() => {
    if (!user) return;
    getMyHistory(user.uid)
      .then(d => { setHistory(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [user]);

  const handleAddFriend = async (match) => {
    const isP1   = match.p1Uid === user.uid;
    const oppUid = isP1 ? match.p2Uid : match.p1Uid;
    const oppName= isP1 ? match.p2Name : match.p1Name;
    if (!oppUid || oppUid === 'bot' || oppUid === user.uid) return;

    setAddingFriend(prev => ({ ...prev, [match.id]: true }));
    const res = await sendFriendRequest(user.uid, oppUid, profile?.displayName || 'Player');
    if (res.error) {
      showToast('Already sent', res.error, 'info');
    } else {
      showToast('✅ Request Sent!', `Friend request sent to ${oppName}`, 'success');
    }
    setAddingFriend(prev => ({ ...prev, [match.id]: false }));
  };

  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:440, marginBottom:16, paddingTop:8 }}>
        <button className="btn btn-ghost" style={{ padding:'6px 12px' }} onClick={() => nav('/')}>← Back</button>
        <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, letterSpacing:2 }}>📊 HISTORY</span>
      </div>

      {loading ? (
        <div style={{ display:'flex', justifyContent:'center', paddingTop:40 }}>
          <div className="spinner" />
        </div>
      ) : history.length === 0 ? (
        <div style={{ textAlign:'center', color:'var(--ink2)', paddingTop:60 }}>
          <div style={{ fontSize:52, marginBottom:14 }}>🎮</div>
          <div style={{ fontWeight:700, fontSize:16, marginBottom:6 }}>No games yet!</div>
          <div style={{ fontSize:13 }}>Play your first game — it will appear here.</div>
          <button className="btn btn-primary" style={{ marginTop:20 }} onClick={() => nav('/')}>
            Play Now
          </button>
        </div>
      ) : (
        <div className="card" style={{ maxWidth:440 }}>
          {history.map(m => {
            const isP1   = m.p1Uid === user.uid;
            const iWon   = m.winner === user.uid;
            const myLines  = isP1 ? m.p1Lines  : m.p2Lines;
            const oppLines = isP1 ? m.p2Lines  : m.p1Lines;
            const oppName  = isP1 ? m.p2Name   : m.p1Name;
            const oppUid   = isP1 ? m.p2Uid    : m.p1Uid;
            const isBot    = m.mode === 'bot' || oppUid === 'bot';

            return (
              <div key={m.id} style={{
                display:'flex', alignItems:'center', gap:10,
                padding:'12px 14px', borderBottom:'1px solid var(--edge)'
              }}>
                {/* Result icon */}
                <div style={{ fontSize:28, width:36, textAlign:'center', flexShrink:0 }}>
                  {iWon ? '🏆' : '💀'}
                </div>

                {/* Info */}
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:700, fontSize:13, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                    vs {isBot ? `🤖 ${m.botLevel || 'Bot'}` : (oppName || 'Unknown')}
                  </div>
                  <div style={{ fontSize:11, color:'var(--ink2)', marginTop:2 }}>
                    {fmtDate(m.timestamp || m.tsNum)} · {fmtDuration(m.duration)}
                  </div>
                </div>

                {/* Lines score */}
                <div style={{ textAlign:'right', marginRight:6 }}>
                  <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:17 }}>
                    <span style={{ color:'var(--c1)' }}>{myLines ?? '—'}</span>
                    <span style={{ color:'var(--ink3)', margin:'0 3px' }}>–</span>
                    <span style={{ color:'var(--c2)' }}>{oppLines ?? '—'}</span>
                  </div>
                  <div style={{ fontSize:10, fontWeight:800, color: iWon ? 'var(--c1)' : 'var(--c2)', letterSpacing:1 }}>
                    {iWon ? 'WIN' : 'LOSS'}
                  </div>
                </div>

                {/* Add friend button (multiplayer only) */}
                {!isBot && oppUid && oppUid !== user.uid && (
                  <button
                    onClick={() => handleAddFriend(m)}
                    disabled={addingFriend[m.id]}
                    title={`Add ${oppName} as friend`}
                    style={{
                      fontSize:18, background:'none',
                      border:'2px solid var(--edge2)', borderRadius:7,
                      padding:'4px 7px', cursor:'pointer',
                      color:'var(--c4)', flexShrink:0,
                      WebkitTapHighlightColor:'transparent'
                    }}>
                    {addingFriend[m.id] ? '⏳' : '👥+'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
