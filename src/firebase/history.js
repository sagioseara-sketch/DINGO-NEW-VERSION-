// src/firebase/history.js
//
// AUTO-TRIM FIX:
// After every match is saved, we trim old matches for that player so no user
// ever accumulates more than 10 entries. This runs client-side (p1 triggers it)
// and is safe to call concurrently — deleteDoc() is idempotent.
// We query up to 25 docs per player, sort by tsNum descending, and delete any beyond 10.
// We avoid composite indexes by fetching without orderBy and sorting client-side.

import {
  collection, addDoc, query,
  where, limit, getDocs, deleteDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './config';

export async function saveMatch({
  p1Uid, p2Uid, p1Name, p2Name,
  winner, p1Lines, p2Lines,
  duration, mode, botLevel,
}) {
  try {
    await addDoc(collection(db, 'matches'), {
      p1Uid, p2Uid, p1Name, p2Name,
      winner,
      p1Lines, p2Lines,
      duration:  duration  || 0,
      mode:      mode      || 'multiplayer',
      botLevel:  botLevel  || null,
      timestamp: serverTimestamp(),
      tsNum:     Date.now(), // numeric fallback for client-side sorting
    });

    // Only p1 triggers the cleanup to avoid both players deleting simultaneously.
    // trimUserHistory is fire-and-forget — errors are caught internally.
    if (mode !== 'bot') {
      trimUserHistory(p1Uid);
      trimUserHistory(p2Uid);
    } else {
      trimUserHistory(p1Uid);
    }
  } catch (e) {
    console.error('saveMatch error:', e);
  }
}

// Keeps at most 10 matches for the given uid. Deletes the oldest ones.
// Uses two separate queries (one for p1Uid, one for p2Uid) to avoid a composite
// index, then merges and sorts client-side before deleting.
async function trimUserHistory(uid) {
  try {
    const [s1, s2] = await Promise.all([
      getDocs(query(collection(db, 'matches'), where('p1Uid', '==', uid), limit(25))),
      getDocs(query(collection(db, 'matches'), where('p2Uid', '==', uid), limit(25))),
    ]);

    const seen = new Set();
    const all  = [];
    [...s1.docs, ...s2.docs].forEach(d => {
      if (!seen.has(d.id)) {
        seen.add(d.id);
        all.push(d);
      }
    });

    // Sort newest-first by numeric timestamp
    all.sort((a, b) => (b.data().tsNum || 0) - (a.data().tsNum || 0));

    // Delete any entries beyond the 10-match cap
    const toDelete = all.slice(10);
    if (toDelete.length > 0) {
      await Promise.all(toDelete.map(d => deleteDoc(d.ref)));
    }
  } catch (e) {
    // Non-critical — log but don't crash
    console.warn('trimUserHistory error:', e);
  }
}

// Returns the user's 10 most recent multiplayer matches.
// Uses two separate single-field queries to avoid the composite index
// requirement that WHERE + ORDER BY together would create.
export async function getMyHistory(uid) {
  try {
    const [s1, s2] = await Promise.all([
      getDocs(query(collection(db, 'matches'), where('p1Uid', '==', uid), limit(15))),
      getDocs(query(collection(db, 'matches'), where('p2Uid', '==', uid), limit(15))),
    ]);

    const seen = new Set();
    const all  = [];
    [...s1.docs, ...s2.docs].forEach(d => {
      if (!seen.has(d.id)) {
        seen.add(d.id);
        all.push({ id: d.id, ...d.data() });
      }
    });

    return all.sort((a, b) => {
      const ta = a.tsNum || (a.timestamp?.seconds || 0) * 1000;
      const tb = b.tsNum || (b.timestamp?.seconds || 0) * 1000;
      return tb - ta;
    }).slice(0, 10);
  } catch (e) {
    console.error('getMyHistory error:', e);
    return [];
  }
}
