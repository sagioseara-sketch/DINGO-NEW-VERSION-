// src/firebase/leaderboard.js
import {
  doc, updateDoc, increment,
  collection, query, orderBy, limit, getDocs
} from "firebase/firestore";
import { db } from "./config";

export async function recordResult(uid, won) {
  const ref = doc(db, "users", uid);
  const newTotal = increment(1);
  const updates = {
    total:  newTotal,
    wins:   won ? increment(1) : increment(0),
    losses: won ? increment(0) : increment(1)
  };
  await updateDoc(ref, updates);
  // Update win rate after
  const { getDoc } = await import("firebase/firestore");
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const d = snap.data();
    const total = (d.total || 0);
    const wins  = (d.wins  || 0);
    const rate  = total > 0 ? Math.round((wins / total) * 100) : 0;
    await updateDoc(ref, { winRate: rate });
  }
}

export async function getLeaderboard() {
  const q = query(
    collection(db, "users"),
    orderBy("wins", "desc"),
    limit(50)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d, i) => ({
    rank: i + 1,
    uid:  d.id,
    ...d.data()
  }));
}
