import { doc, runTransaction, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import type { FirestoreUser } from '../types/types';

let lastCheckTime = 0;

export const tryUpdateLoginStreak = async (uid: string) => {
  const nowTime = Date.now();

  if (nowTime - lastCheckTime < 10000) return;

  lastCheckTime = nowTime;

  const userRef = doc(db, 'users', uid);

  await runTransaction(db, async transaction => {
    const snap = await transaction.get(userRef);
    if (!snap.exists()) return;

    const data = snap.data() as FirestoreUser;
    const stats = data.stats;

    const now = new Date();

    const getUTCDay = (date: Date) =>
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

    const today = getUTCDay(now);
    const lastLogin = stats.lastLoginDate?.toDate();
    const lastDay = lastLogin ? getUTCDay(lastLogin) : null;

    let newStreak = 1;

    if (lastDay !== null) {
      const diffDays = (today - lastDay) / 86400000;

      if (diffDays === 0) return;

      if (diffDays === 1) {
        newStreak = stats.streak + 1;
      } else {
        newStreak = 1;
      }
    }

    transaction.update(userRef, {
      'stats.streak': newStreak,
      'stats.lastLoginDate': Timestamp.fromDate(now),
    });
  });
};
