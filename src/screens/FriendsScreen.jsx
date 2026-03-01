// src/screens/FriendsScreen.jsx
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { sendFriendRequest, acceptRequest, declineRequest, removeFriend, listenPendingRequests, getFriendsList } from '../firebase/friends';
import { searchUserByName } from '../firebase/userService';
import { showToast } from '../firebase/notifications';

export default function FriendsScreen() {
  const { user, profile, refreshProfile } = useAuth();
  const nav = useNavigate();
  const [tab, setTab]           = useState('friends');
  const [friends, setFriends]   = useState([]);
  const [requests, setRequests] = useState([]);
  const [searchVal, setSearch]  = useState('');
  const [results, setResults]   = useState([]);
  const [searching, setSearching] = useState(false);
  const [loading, setLoading]   = useState(true);
  const unsubRef = useRef(null);

  // Load friends list
  useEffect(() => {
    if (!profile?.friends) { setLoading(false); return; }
    getFriendsList(profile.friends)
      .then(f => { setFriends(f); setLoading(false); })
      .catch(() => setLoading(false));
  }, [profile?.friends?.length]);

  // Listen for pending requests
  useEffect(() => {
    if (!user) return;
    const unsub = listenPendingRequests(user.uid, reqs => {
      setRequests(reqs);
    });
    unsubRef.current = unsub;
    return () => { if (unsubRef.current) unsubRef.current(); };
  }, [user?.uid]);

  const doSearch = async () => {
    if (!searchVal.trim()) return;
    setSearching(true); setResults([]);
    try {
      const res = await searchUserByName(searchVal.trim());
      setResults(res.filter(u => u.uid !== user.uid));
    } catch (e) {
      showToast('Search failed', 'Try again', 'error');
    }
    setSearching(false);
  };

  const handleSend = async (toUser) => {
    const res = await sendFriendRequest(user.uid, toUser.uid, profile?.displayName || 'Player');
    if (res.error) showToast('⚠️ ' + res.error, '', 'info');
    else showToast('✅ Request Sent!', `Sent to ${toUser.displayName}`, 'success');
  };

  const handleAccept = async (req) => {
    await acceptRequest(req.id, user.uid, req.from);
    await refreshProfile(user.uid);
    showToast('👥 Friends!', `You and ${req.fromName} are now friends`, 'success');
  };

  const handleDecline = async (req) => {
    await declineRequest(req.id);
  };

  const handleRemove = async (friendUid) => {
    await removeFriend(user.uid, friendUid);
    await refreshProfile(user.uid);
    setFriends(prev => prev.filter(f => f.uid !== friendUid));
  };

  const TABS = [
    { id: 'friends',  label: `Friends (${friends.length})` },
    { id: 'requests', label: `Requests ${requests.length > 0 ? `(${requests.length})` : ''}`, badge: requests.length },
    { id: 'search',   label: '🔍 Find' },
  ];

  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:440, marginBottom:14, paddingTop:8 }}>
        <button className="btn btn-ghost" style={{ padding:'6px 12px' }} onClick={() => nav('/')}>← Back</button>
        <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, letterSpacing:2 }}>👥 FRIENDS</span>
      </div>

      {/* Tabs */}
      <div style={{ display:'flex', gap:6, width:'100%', maxWidth:440, marginBottom:14 }}>
        {TABS.map(t => (
          <button key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex:1, padding:'9px 6px', border:'2px solid',
              borderColor: tab === t.id ? 'var(--c1)' : 'var(--edge2)',
              borderRadius:'var(--r)', background: tab === t.id ? 'rgba(0,255,204,0.1)' : 'var(--panel)',
              color: tab === t.id ? 'var(--c1)' : 'var(--ink2)',
              fontSize:11, fontWeight:700, cursor:'pointer',
              WebkitTapHighlightColor:'transparent',
              position:'relative'
            }}>
            {t.label}
            {t.badge > 0 && tab !== t.id && (
              <span style={{
                position:'absolute', top:-6, right:-4,
                background:'var(--c2)', color:'#fff',
                fontSize:10, fontWeight:700, borderRadius:'50%',
                width:17, height:17, display:'flex', alignItems:'center', justifyContent:'center'
              }}>{t.badge}</span>
            )}
          </button>
        ))}
      </div>

      {/* ── FRIENDS TAB ── */}
      {tab === 'friends' && (
        <div className="card" style={{ maxWidth:440 }}>
          {loading ? (
            <div style={{ display:'flex', justifyContent:'center', padding:32 }}><div className="spinner" /></div>
          ) : friends.length === 0 ? (
            <div style={{ textAlign:'center', padding:32, color:'var(--ink2)' }}>
              <div style={{ fontSize:40, marginBottom:10 }}>👥</div>
              <div style={{ fontWeight:700 }}>No friends yet</div>
              <div style={{ fontSize:13, marginTop:4 }}>Search to find and add players!</div>
              <button className="btn btn-primary" style={{ marginTop:14 }} onClick={() => setTab('search')}>
                Find Players
              </button>
            </div>
          ) : friends.map(f => (
            <div key={f.uid} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 14px', borderBottom:'1px solid var(--edge)' }}>
              <span style={{ fontSize:26 }}>{f.avatar || '🎯'}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:700, fontSize:14 }}>{f.displayName}</div>
                <div style={{ fontSize:11, color:'var(--ink2)', marginTop:2 }}>
                  {f.wins || 0}W · {f.losses || 0}L
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{
                  width:8, height:8, borderRadius:'50%',
                  background: f.isOnline ? 'var(--c1)' : 'var(--ink3)',
                  boxShadow: f.isOnline ? '0 0 6px var(--c1)' : 'none'
                }} />
                <span style={{ fontSize:10, color:'var(--ink3)' }}>{f.isOnline ? 'Online' : 'Offline'}</span>
              </div>
              <button onClick={() => handleRemove(f.uid)}
                style={{ background:'none', border:'2px solid var(--edge2)', borderRadius:6, padding:'4px 10px', fontSize:11, color:'var(--ink3)', cursor:'pointer' }}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ── REQUESTS TAB ── */}
      {tab === 'requests' && (
        <div className="card" style={{ maxWidth:440 }}>
          {requests.length === 0 ? (
            <div style={{ textAlign:'center', padding:32, color:'var(--ink2)' }}>
              <div style={{ fontSize:40, marginBottom:10 }}>📭</div>
              <div style={{ fontWeight:700 }}>No pending requests</div>
              <div style={{ fontSize:13, marginTop:4 }}>When someone adds you, it appears here.</div>
            </div>
          ) : requests.map(req => (
            <div key={req.id} style={{ display:'flex', alignItems:'center', gap:12, padding:'14px', borderBottom:'1px solid var(--edge)' }}>
              <span style={{ fontSize:28 }}>🎯</span>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:14 }}>{req.fromName || 'Unknown'}</div>
                <div style={{ fontSize:12, color:'var(--ink2)', marginTop:2 }}>Wants to be friends</div>
              </div>
              <button onClick={() => handleAccept(req)}
                style={{ background:'var(--c1)', color:'#000', border:'none', borderRadius:7, padding:'8px 14px', fontWeight:700, fontSize:12, cursor:'pointer', marginRight:4 }}>
                ✓ Accept
              </button>
              <button onClick={() => handleDecline(req)}
                style={{ background:'none', border:'2px solid var(--edge2)', borderRadius:7, padding:'8px 10px', fontSize:12, color:'var(--ink2)', cursor:'pointer' }}>
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ── SEARCH TAB ── */}
      {tab === 'search' && (
        <div style={{ width:'100%', maxWidth:440 }}>
          <div style={{ display:'flex', gap:8, marginBottom:14 }}>
            <input type="text" placeholder="Search username…"
              value={searchVal}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && doSearch()}
              style={{ flex:1 }}
            />
            <button className="btn btn-primary" onClick={doSearch} disabled={searching} style={{ padding:'0 16px' }}>
              {searching ? '…' : '🔍'}
            </button>
          </div>

          {results.length > 0 && (
            <div className="card">
              {results.map(u => (
                <div key={u.uid} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 14px', borderBottom:'1px solid var(--edge)' }}>
                  <span style={{ fontSize:26 }}>{u.avatar || '🎯'}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:700, fontSize:14 }}>{u.displayName}</div>
                    <div style={{ fontSize:11, color:'var(--ink2)' }}>{u.wins || 0}W · {u.losses || 0}L</div>
                  </div>
                  <button onClick={() => handleSend(u)}
                    style={{ background:'var(--c4)', color:'#fff', border:'none', borderRadius:7, padding:'8px 14px', fontWeight:700, fontSize:12, cursor:'pointer' }}>
                    + Add
                  </button>
                </div>
              ))}
            </div>
          )}
          {searchVal && !searching && results.length === 0 && (
            <div style={{ textAlign:'center', color:'var(--ink2)', padding:24, fontSize:14 }}>
              No players found for "{searchVal}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
