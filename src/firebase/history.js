// src/firebase/history.js
import {
  collection, addDoc, query,
  where, limit, getDocs, serverTimestamp
} from 'firebase/firestore';
import { db } from './config';

export async function saveMatch({ p1Uid, p2Uid, p1Name, p2Name, winner, p1Lines, p2Lines, duration, mode, botLevel }) {
  try {
    await addDoc(collection(db, 'matches'), {
      p1Uid, p2Uid, p1Name, p2Name,
      winner, p1Lines, p2Lines,
      duration: duration || 0,
      mode: mode || 'multiplayer',
      botLevel: botLevel || null,
      timestamp: serverTimestamp(),
      tsNum: Date.now()
    });
  } catch (e) {
    console.error('saveMatch error:', e);
  }
}

// FIX: two separate single-field queries instead of array-contains + orderBy
// This avoids the composite index requirement entirely
export async function getMyHistory(uid) {
  try {
    const [s1, s2] = await Promise.all([
      getDocs(query(collection(db, 'matches'), where('p1Uid', '==', uid), limit(15))),
      getDocs(query(collection(db, 'matches'), where('p2Uid', '==', uid), limit(15)))
    ]);

    const seen = new Set();
    const all = [];
    [...s1.docs, ...s2.docs].forEach(d => {
      if (!seen.has(d.id)) {
        seen.add(d.id);
        all.push({ id: d.id, ...d.data() });
      }
    });

    // Sort by timestamp client-side
    return all.sort((a, b) => {
      const ta = a.tsNum || a.timestamp?.seconds * 1000 || 0;
      const tb = b.tsNum || b.timestamp?.seconds * 1000 || 0;
      return tb - ta;
    }).slice(0, 20);
  } catch (e) {
    console.error('getMyHistory error:', e);
    return [];
  }
}
