// src/screens/HistoryScreen.jsx
// Only shows multiplayer matches (mode !== 'bot' and p2Uid !== 'bot').
// Includes an "Add Friend" button on each match row.
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
    return d.toLocaleDateString('en-US', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
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
  const [history,      setHistory]     = useState([]);
  const [loading,      setLoading]     = useState(true);
  const [addingFriend, setAddingFriend] = useState({});

  useEffect(() => {
    if (!user) return;
    getMyHistory(user.uid)
      .then(all => {
        // Filter out bot matches — only show real multiplayer games
        const multi = all.filter(m => m.mode !== 'bot' && m.p2Uid !== 'bot' && m.p2Uid !== 'BOT');
        setHistory(multi);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  const handleAddFriend = async (match) => {
    const isP1    = match.p1Uid === user.uid;
    const oppUid  = isP1 ? match.p2Uid  : match.p1Uid;
    const oppName = isP1 ? match.p2Name : match.p1Name;
    if (!oppUid || oppUid === user.uid) return;

    setAddingFriend(prev => ({ ...prev, [match.id]: 'loading' }));
    const res = await sendFriendRequest(user.uid, oppUid, profile?.displayName || 'Player');
    if (res.error) {
      showToast('Already sent', res.error, 'info');
      setAddingFriend(prev => ({ ...prev, [match.id]: 'done' }));
    } else {
      showToast('✅ Request Sent!', `Friend request sent to ${oppName}`, 'success');
      setAddingFriend(prev => ({ ...prev, [match.id]: 'done' }));
    }
  };

  return (
    <div className="screen" style={{ paddingBottom:80 }}>
      <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:440, marginBottom:16, paddingTop:8 }}>
        <button className="btn btn-ghost" style={{ padding:'6px 12px' }} onClick={() => nav('/')}>← Back</button>
        <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, letterSpacing:2 }}>📊 HISTORY</span>
      </div>

      {loading ? (
        <div style={{ display:'flex', justifyContent:'center', paddingTop:40 }}><div className="spinner" /></div>
      ) : history.length === 0 ? (
        <div style={{ textAlign:'center', color:'var(--ink2)', paddingTop:60 }}>
          <div style={{ fontSize:52, marginBottom:14 }}>🎮</div>
          <div style={{ fontWeight:700, fontSize:16, marginBottom:6 }}>No multiplayer games yet!</div>
          <div style={{ fontSize:13 }}>Play against real opponents — your match history appears here.</div>
          <button className="btn btn-primary" style={{ marginTop:20 }} onClick={() => nav('/')}>Play Now</button>
        </div>
      ) : (
        <div className="card" style={{ maxWidth:440 }}>
          {history.map(m => {
            const isP1    = m.p1Uid === user.uid;
            const iWon    = m.winner === user.uid;
            const myLines = isP1 ? m.p1Lines : m.p2Lines;
            const opLines = isP1 ? m.p2Lines : m.p1Lines;
            const oppName = isP1 ? m.p2Name  : m.p1Name;
            const oppUid  = isP1 ? m.p2Uid   : m.p1Uid;
            const addState = addingFriend[m.id]; // undefined | 'loading' | 'done'

            return (
              <div key={m.id} style={{ display:'flex', alignItems:'center', gap:10, padding:'12px 14px', borderBottom:'1px solid var(--edge)' }}>
                {/* Result icon */}
                <div style={{ fontSize:26, width:34, textAlign:'center', flexShrink:0 }}>
                  {iWon ? '🏆' : '💀'}
                </div>

                {/* Info */}
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:700, fontSize:13, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                    vs {oppName || 'Unknown'}
                  </div>
                  <div style={{ fontSize:11, color:'var(--ink2)', marginTop:2 }}>
                    {fmtDate(m.timestamp || m.tsNum)} · {fmtDuration(m.duration)}
                  </div>
                </div>

                {/* Score */}
                <div style={{ textAlign:'right', marginRight:6 }}>
                  <div style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:16 }}>
                    <span style={{ color:'var(--c1)' }}>{myLines ?? '—'}</span>
                    <span style={{ color:'var(--ink3)', margin:'0 3px' }}>–</span>
                    <span style={{ color:'var(--c2)' }}>{opLines ?? '—'}</span>
                  </div>
                  <div style={{ fontSize:10, fontWeight:800, color: iWon ? 'var(--c1)' : 'var(--c2)', letterSpacing:1 }}>
                    {iWon ? 'WIN' : 'LOSS'}
                  </div>
                </div>

                {/* Add friend button */}
                {oppUid && oppUid !== user.uid && (
                  <button
                    onClick={() => handleAddFriend(m)}
                    disabled={addState === 'loading' || addState === 'done'}
                    title={`Add ${oppName} as friend`}
                    style={{
                      fontSize:16, background:'none',
                      border:'2px solid var(--edge2)', borderRadius:7,
                      padding:'5px 8px', cursor: addState ? 'not-allowed' : 'pointer',
                      color: addState === 'done' ? 'var(--c1)' : 'var(--c4)',
                      flexShrink:0,
                      WebkitTapHighlightColor:'transparent',
                      opacity: addState === 'done' ? 0.5 : 1,
                    }}>
                    {addState === 'loading' ? '⏳' : addState === 'done' ? '✅' : '👥+'}
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
