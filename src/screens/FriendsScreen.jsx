// src/screens/FriendsScreen.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  sendFriendRequest, acceptRequest, declineRequest,
  removeFriend, listenPendingRequests, getFriendsList
} from "../firebase/friends";
import { searchUserByName } from "../firebase/userService";
import { showToast } from "../firebase/notifications";

export default function FriendsScreen() {
  const { user, profile, refreshProfile } = useAuth();
  const nav = useNavigate();
  const [friends, setFriends]     = useState([]);
  const [requests, setRequests]   = useState([]);
  const [searchVal, setSearch]    = useState("");
  const [results, setResults]     = useState([]);
  const [searching, setSearching] = useState(false);
  const [tab, setTab]             = useState("friends"); // "friends" | "requests" | "search"

  useEffect(() => {
    if (!profile?.friends) return;
    getFriendsList(profile.friends).then(setFriends);
  }, [profile]);

  useEffect(() => {
    if (!user) return;
    const unsub = listenPendingRequests(user.uid, setRequests);
    return unsub;
  }, [user]);

  const doSearch = async () => {
    if (!searchVal.trim()) return;
    setSearching(true);
    const res = await searchUserByName(searchVal.trim());
    setResults(res.filter(u => u.uid !== user.uid));
    setSearching(false);
  };

  const handleSendRequest = async (toUser) => {
    const res = await sendFriendRequest(user.uid, toUser.uid, profile.displayName);
    if (res.error) {
      showToast("⚠️ Already sent", res.error, "info");
    } else {
      showToast("✅ Request Sent", `Friend request sent to ${toUser.displayName}`, "success");
    }
  };

  const handleAccept = async (req) => {
    await acceptRequest(req.id, user.uid, req.from);
    await refreshProfile(user.uid);
    showToast("✅ Friends!", `You and ${req.fromName} are now friends.`, "success");
  };

  const handleDecline = async (req) => {
    await declineRequest(req.id);
  };

  const handleRemove = async (friendUid) => {
    await removeFriend(user.uid, friendUid);
    await refreshProfile(user.uid);
    setFriends(prev => prev.filter(f => f.uid !== friendUid));
  };

  return (
    <div className="screen" style={{ paddingBottom: 80 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 440, marginBottom: 16, paddingTop: 8 }}>
        <button className="btn btn-ghost" style={{ padding: "6px 12px" }} onClick={() => nav("/")}>← Back</button>
        <span style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: 22, letterSpacing: 2 }}>👥 FRIENDS</span>
        {requests.length > 0 && (
          <span style={{ background: "var(--c2)", color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "auto" }}>
            {requests.length}
          </span>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, width: "100%", maxWidth: 440, marginBottom: 16 }}>
        {[
          { id: "friends",  label: `Friends (${friends.length})` },
          { id: "requests", label: `Requests ${requests.length > 0 ? `(${requests.length})` : ""}` },
          { id: "search",   label: "🔍 Find" }
        ].map(t => (
          <button key={t.id} className={`btn ${tab === t.id ? "btn-primary" : "btn-ghost"}`}
            style={{ flex: 1, padding: "8px 6px", fontSize: 11 }}
            onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Friends tab */}
      {tab === "friends" && (
        <div className="card" style={{ maxWidth: 440 }}>
          <div>
            {friends.length === 0 && (
              <div style={{ textAlign: "center", padding: 32, color: "var(--ink2)" }}>
                No friends yet.<br />
                <span style={{ fontSize: 13 }}>Search for players to add!</span>
              </div>
            )}
            {friends.map(f => (
              <div key={f.uid} className="friend-row">
                <div style={{ fontSize: 26 }}>{f.avatar || "🎯"}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{f.displayName}</div>
                  <div style={{ fontSize: 11, color: "var(--ink2)", marginTop: 2 }}>
                    {f.wins || 0}W · {f.losses || 0}L
                  </div>
                </div>
                <div style={{ marginRight: 10 }}>
                  {f.isOnline
                    ? <div className="online-dot" />
                    : <div className="offline-dot" />}
                </div>
                <button className="btn btn-ghost" style={{ padding: "5px 10px", fontSize: 11 }}
                  onClick={() => handleRemove(f.uid)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Requests tab */}
      {tab === "requests" && (
        <div className="card" style={{ maxWidth: 440 }}>
          <div>
            {requests.length === 0 && (
              <div style={{ textAlign: "center", padding: 32, color: "var(--ink2)" }}>No pending requests.</div>
            )}
            {requests.map(req => (
              <div key={req.id} className="friend-row">
                <div style={{ fontSize: 26 }}>🎯</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{req.fromName}</div>
                  <div className="muted small">Wants to be friends</div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button className="btn btn-primary" style={{ padding: "6px 12px", fontSize: 11 }}
                    onClick={() => handleAccept(req)}>✓ Accept</button>
                  <button className="btn btn-ghost" style={{ padding: "6px 10px", fontSize: 11 }}
                    onClick={() => handleDecline(req)}>✕</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search tab */}
      {tab === "search" && (
        <div style={{ width: "100%", maxWidth: 440 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            <input type="text" placeholder="Search by name…" value={searchVal}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === "Enter" && doSearch()}
              style={{ flex: 1 }} />
            <button className="btn btn-primary" onClick={doSearch} disabled={searching}>
              {searching ? "…" : "🔍"}
            </button>
          </div>
          {results.length > 0 && (
            <div className="card">
              {results.map(u => (
                <div key={u.uid} className="friend-row">
                  <div style={{ fontSize: 26 }}>{u.avatar || "🎯"}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{u.displayName}</div>
                    <div className="muted small">{u.wins || 0}W · {u.losses || 0}L</div>
                  </div>
                  <button className="btn btn-primary" style={{ padding: "6px 12px", fontSize: 11 }}
                    onClick={() => handleSendRequest(u)}>
                    + Add
                  </button>
                </div>
              ))}
            </div>
          )}
          {results.length === 0 && searchVal && !searching && (
            <div style={{ textAlign: "center", color: "var(--ink2)", padding: 20 }}>No players found.</div>
          )}
        </div>
      )}
    </div>
  );
}
