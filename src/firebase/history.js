// src/firebase/history.js
import {
  collection, addDoc, query,
  where, orderBy, limit, getDocs, serverTimestamp
} from "firebase/firestore";
import { db } from "./config";

export async function saveMatch({
  p1Uid, p2Uid, p1Name, p2Name,
  winner, p1Lines, p2Lines,
  duration, mode, botLevel
}) {
  await addDoc(collection(db, "matches"), {
    players:   [p1Uid, p2Uid],
    p1Uid, p2Uid, p1Name, p2Name,
    winner,    // uid of winner
    p1Lines,   p2Lines,
    duration,  // seconds
    mode,      // "multiplayer" | "bot"
    botLevel:  botLevel || null,
    timestamp: serverTimestamp()
  });
}

export async function getMyHistory(uid) {
  const q = query(
    collection(db, "matches"),
    where("players", "array-contains", uid),
    orderBy("timestamp", "desc"),
    limit(20)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
