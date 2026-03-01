// src/firebase/leaderboard.js
import { doc, updateDoc, increment, getDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './config';

export async function recordResult(uid, won) {
  const ref = doc(db, 'users', uid);
  try {
    await updateDoc(ref, {
      total:  increment(1),
      wins:   won ? increment(1) : increment(0),
      losses: won ? increment(0) : increment(1),
      streak: won ? increment(1) : 0
    });
    // Recalculate win rate
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const d = snap.data();
      const total = d.total || 1;
      const wins  = d.wins  || 0;
      await updateDoc(ref, { winRate: Math.round((wins / total) * 100) });
    }
  } catch (e) {
    console.error('recordResult error:', e);
  }
}

export async function getLeaderboard() {
  try {
    const q = query(collection(db, 'users'), orderBy('wins', 'desc'), limit(50));
    const snap = await getDocs(q);
    return snap.docs.map((d, i) => ({ rank: i + 1, uid: d.id, ...d.data() }));
  } catch (e) {
    console.error('getLeaderboard error:', e);
    return [];
  }
}
