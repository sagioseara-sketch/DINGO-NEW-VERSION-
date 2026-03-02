// src/screens/FriendsScreen.jsx
//
// INVITE FLOW EXPLAINED:
// When you click "⚔️ Challenge" on a friend:
//   1. A random board is generated for you (you can customise it in the Room flow,
//      but quick-challenge uses random to keep the UX frictionless).
//   2. sendInvite() creates a real room in Firebase RTDB with you as p1,
//      then writes an invite record at invites/{friendUid}/{inviteId}.
//   3. Your friend's InviteBanner (mounted globally in App.jsx) fires immediately
//      because they're already listening on invites/{theirUid}.
//   4. Meanwhile, THIS screen starts listenRoom() on the new roomId so it knows
//      the moment the friend accepts (p2 joins).
//   5. When p2 joins → both navigate to /game/:roomId.
//   6. If the friend declines or the 45s timer runs out → the invite is cleaned up,
//      the waiting badge disappears, and you can try again.

import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  sendFriendRequest, acceptRequest, declineRequest,
  removeFriend, listenPendingRequests, getFriendsList,
} from '../firebase/friends';
import { searchUserByName } from '../firebase/userService';
import { showToast } from '../firebase/notifications';
import { sendInvite, cancelInvite } from '../firebase/invites';
import { listenRoom, cleanupRoom } from '../firebase/roomService';
import { genRandomBoard } from '../game/aiLogic';
import { getSFX } from '../sounds/sfxThemes';

export default function FriendsScreen() {
  const { user, profile, refreshProfile } = useAuth();
  const nav = useNavigate();
  const sfx = getSFX();

  const [tab,       setTab]      = useState('friends');
  const [friends,   setFriends]  = useState([]);
  const [requests,  setRequests] = useState([]);
  const [searchVal, setSearch]   = useState('');
  const [results,   setResults]  = useState([]);
  const [searching, setSearching] = useState(false);
  const [loading,   setLoading]  = useState(true);

  // inviteState: maps friendUid → { status: 'sending'|'waiting'|'idle', roomId, inviteId }
  const [inviteState, setInviteState] = useState({});

  // Active room listeners — keyed by roomId so we can clean up per-invite
  const roomUnsubRefs = useRef({});
  const unsubRef      = useRef(null);

  // ── Load friends ──────────────────────────────────────────────
  useEffect(() => {
    if (!profile?.friends) { setLoading(false); return; }
    getFriendsList(profile.friends)
      .then(f => { setFriends(f); setLoading(false); })
      .catch(() => setLoading(false));
  }, [profile?.friends?.length]);

  // ── Listen for incoming friend requests ───────────────────────
  useEffect(() => {
    if (!user) return;
    const unsub = listenPendingRequests(user.uid, reqs => setRequests(reqs));
    unsubRef.current = unsub;
    return () => unsub?.();
  }, [user?.uid]);

  // Clean up any open room listeners when unmounting
  useEffect(() => {
    return () => {
      Object.values(roomUnsubRefs.current).forEach(fn => fn?.());
    };
  }, []);

  // ── Send a match challenge to a friend ────────────────────────
  const handleChallenge = async (friend) => {
    const st = inviteState[friend.uid];
    // If already waiting — cancel the pending invite
    if (st?.status === 'waiting') {
      roomUnsubRefs.current[st.roomId]?.();
      delete roomUnsubRefs.current[st.roomId];
      await cancelInvite(friend.uid, st.inviteId).catch(() => {});
      await cleanupRoom(st.roomId).catch(() => {});
      setInviteState(prev => ({ ...prev, [friend.uid]: { status:'idle' } }));
      return;
    }

    // Start sending
    setInviteState(prev => ({ ...prev, [friend.uid]: { status:'sending' } }));
    sfx.click?.();

    try {
      const myBoard  = genRandomBoard();
      const fromData = {
        uid:    user.uid,
        name:   profile?.displayName || 'Player',
        avatar: profile?.avatar || '🎯',
        role:   'p1',
      };
      const { roomId, inviteId } = await sendInvite(friend.uid, fromData, myBoard);

      setInviteState(prev => ({ ...prev, [friend.uid]: { status:'waiting', roomId, inviteId } }));
      showToast('⚔️ Invite sent!', `Waiting for ${friend.displayName}…`, 'success');

      // Listen for the friend joining the room (they called joinRoom on accept)
      const roomUnsub = listenRoom(roomId, roomData => {
        if (!roomData?.players?.p2) return; // still waiting
        // p2 has joined — navigate to the game
        roomUnsub();
        delete roomUnsubRefs.current[roomId];
        setInviteState(prev => ({ ...prev, [friend.uid]: { status:'idle' } }));
        nav(`/game/${roomId}`, { state: { role:'p1', board: myBoard } });
      });
      roomUnsubRefs.current[roomId] = roomUnsub;

      // Auto-cancel after 47s (slightly longer than the 45s invite window)
      setTimeout(async () => {
        const cur = inviteState[friend.uid]; // stale, use functional update
        setInviteState(prev => {
          if (prev[friend.uid]?.roomId !== roomId) return prev; // already resolved
          roomUnsubRefs.current[roomId]?.();
          delete roomUnsubRefs.current[roomId];
          cleanupRoom(roomId).catch(() => {});
          showToast('⏰ Invite expired', `${friend.displayName} didn't respond`, 'info');
          return { ...prev, [friend.uid]: { status:'idle' } };
        });
      }, 47_000);

    } catch (e) {
      console.error('Challenge error:', e);
      setInviteState(prev => ({ ...prev, [friend.uid]: { status:'idle' } }));
      showToast('Error', 'Could not send invite. Try again.', 'error');
    }
  };

  // ── Friend request actions ────────────────────────────────────
  const doSearch = async () => {
    if (!searchVal.trim()) return;
    setSearching(true); setResults([]);
    try {
      const res = await searchUserByName(searchVal.trim());
      setResults(res.filter(u => u.uid !== user.uid));
    } catch {
      showToast('Search failed', 'Try again', 'error');
    }
    setSearching(false);
  };

  const handleSendRequest = async (toUser) => {
    const res = await sendFriendRequest(user.uid, toUser.uid, profile?.displayName || 'Player');
    if (res.error) showToast('⚠️ ' + res.error, '', 'info');
    else showToast('✅ Request Sent!', `Sent to ${toUser.displayName}`, 'success');
  };

  const handleAccept = async (req) => {
    await acceptRequest(req.id, user.uid, req.from);
    await refreshProfile(user.uid);
    showToast('👥 Friends!', `You and ${req.fromName} are now friends`, 'success');
  };

  const handleDecline  = async (req)       => declineRequest(req.id);
  const handleRemove   = async (friendUid) => {
    await removeFriend(user.uid, friendUid);
    await refreshProfile(user.uid);
    setFriends(prev => prev.filter(f => f.uid !== friendUid));
  };

  // ── Tab config ────────────────────────────────────────────────
  const TABS = [
    { id:'friends',  label:`Friends (${friends.length})` },
    { id:'requests', label:`Requests${requests.length > 0 ? ` (${requests.length})` : ''}`, badge:requests.length },
    { id:'search',   label:'🔍 Find' },
  ];

  return (
    <div className="screen" style={{ paddingBottom:80 }}>

      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', gap:10, width:'100%', maxWidth:440, marginBottom:14, paddingTop:8 }}>
        <button className="btn btn-ghost" style={{ padding:'6px 12px' }} onClick={() => nav('/')}>← Back</button>
        <span style={{ fontFamily:"'Black Han Sans',sans-serif", fontSize:22, letterSpacing:2 }}>👥 FRIENDS</span>
      </div>

      {/* Tabs */}
      <div style={{ display:'flex', gap:6, width:'100%', maxWidth:440, marginBottom:14 }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex:1, padding:'9px 6px', border:'2px solid',
            borderColor: tab===t.id ? 'var(--c1)' : 'var(--edge2)',
            borderRadius:'var(--r)',
            background:  tab===t.id ? 'rgba(0,255,204,0.1)' : 'var(--panel)',
            color:       tab===t.id ? 'var(--c1)' : 'var(--ink2)',
            fontSize:11, fontWeight:700, cursor:'pointer',
            WebkitTapHighlightColor:'transparent', position:'relative',
          }}>
            {t.label}
            {t.badge > 0 && tab !== t.id && (
              <span style={{ position:'absolute', top:-6, right:-4, background:'var(--c2)', color:'#fff', fontSize:10, fontWeight:700, borderRadius:'50%', width:17, height:17, display:'flex', alignItems:'center', justifyContent:'center' }}>
                {t.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ═══ FRIENDS TAB ════════════════════════════════════════ */}
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
          ) : friends.map(f => {
            const st = inviteState[f.uid];
            const isWaiting = st?.status === 'waiting';
            const isSending = st?.status === 'sending';

            return (
              <div key={f.uid} style={{ display:'flex', alignItems:'center', gap:10, padding:'12px 14px', borderBottom:'1px solid var(--edge)', flexWrap:'wrap' }}>

                {/* Avatar */}
                <span style={{ fontSize:26, flexShrink:0 }}>{f.avatar || '🎯'}</span>

                {/* Name + stats */}
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:700, fontSize:13, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                    {f.displayName}
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:2 }}>
                    {/* Online dot */}
                    <div style={{ width:7, height:7, borderRadius:'50%', flexShrink:0, background: f.isOnline ? 'var(--c1)' : 'var(--ink3)', boxShadow: f.isOnline ? '0 0 5px var(--c1)' : 'none' }} />
                    <span style={{ fontSize:10, color:'var(--ink3)' }}>{f.isOnline ? 'Online' : 'Offline'}</span>
                    <span style={{ fontSize:10, color:'var(--ink3)' }}>· {f.wins||0}W</span>
                  </div>
                  {/* Waiting badge — shown while invite is live */}
                  {(isWaiting || isSending) && (
                    <div style={{ marginTop:4, display:'flex', alignItems:'center', gap:5, background:'rgba(255,204,0,0.1)', border:'1px solid rgba(255,204,0,0.35)', borderRadius:6, padding:'3px 8px', display:'inline-flex' }}>
                      <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--c3)', animation:'blink 1s infinite' }} />
                      <span style={{ fontSize:10, color:'var(--c3)', fontWeight:700 }}>
                        {isSending ? 'Sending…' : 'Waiting for response…'}
                      </span>
                    </div>
                  )}
                </div>

                {/* ⚔️ Challenge button */}
                <button
                  onClick={() => handleChallenge(f)}
                  disabled={isSending}
                  title={isWaiting ? 'Cancel invite' : f.isOnline ? 'Challenge to a match' : 'Player is offline'}
                  style={{
                    flexShrink:0,
                    background: isWaiting ? 'rgba(255,204,0,0.15)' : f.isOnline ? 'rgba(0,255,204,0.1)' : 'transparent',
                    border: `2px solid ${isWaiting ? 'var(--c3)' : f.isOnline ? 'var(--c1)' : 'var(--edge2)'}`,
                    borderRadius:8, padding:'6px 10px',
                    fontSize:12, fontWeight:800,
                    color: isWaiting ? 'var(--c3)' : f.isOnline ? 'var(--c1)' : 'var(--ink3)',
                    cursor: isSending ? 'not-allowed' : 'pointer',
                    WebkitTapHighlightColor:'transparent',
                    opacity: isSending ? 0.5 : 1,
                    letterSpacing:0.5,
                  }}>
                  {isSending ? '⏳' : isWaiting ? '✕ Cancel' : '⚔️ Challenge'}
                </button>

                {/* Remove button */}
                <button onClick={() => handleRemove(f.uid)} title="Remove friend" style={{
                  flexShrink:0, background:'none',
                  border:'2px solid var(--edge2)', borderRadius:6,
                  padding:'6px 8px', fontSize:11, color:'var(--ink3)',
                  cursor:'pointer', WebkitTapHighlightColor:'transparent',
                }}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* ═══ REQUESTS TAB ═══════════════════════════════════════ */}
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
              <button onClick={() => handleAccept(req)} style={{ background:'var(--c1)', color:'#000', border:'none', borderRadius:7, padding:'8px 14px', fontWeight:700, fontSize:12, cursor:'pointer', marginRight:4 }}>
                ✓ Accept
              </button>
              <button onClick={() => handleDecline(req)} style={{ background:'none', border:'2px solid var(--edge2)', borderRadius:7, padding:'8px 10px', fontSize:12, color:'var(--ink2)', cursor:'pointer' }}>
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ═══ SEARCH TAB ═════════════════════════════════════════ */}
      {tab === 'search' && (
        <div style={{ width:'100%', maxWidth:440 }}>
          <div style={{ display:'flex', gap:8, marginBottom:14 }}>
            <input type="text" placeholder="Search by username…"
              value={searchVal}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && doSearch()}
              style={{ flex:1 }} enterKeyHint="search"
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
                    <div style={{ fontSize:11, color:'var(--ink2)' }}>{u.wins||0}W · {u.losses||0}L</div>
                  </div>
                  <button onClick={() => handleSendRequest(u)} style={{ background:'var(--c4)', color:'#fff', border:'none', borderRadius:7, padding:'8px 14px', fontWeight:700, fontSize:12, cursor:'pointer' }}>
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
