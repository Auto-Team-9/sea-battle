import { doc, runTransaction, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import type { FirestoreUser } from '../types/types';

export const tryUpdateLoginStreak = async (uid: string) => {
  const userRef = doc(db, 'users', uid);

  await runTransaction(db, async transaction => {
    const snap = await transaction.get(userRef);
    if (!snap.exists()) return;

    const data = snap.data() as FirestoreUser;
    const stats = data.stats;

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const last = stats.lastLoginDate?.toDate();

    if (last) {
      const lastDay = new Date(last.getFullYear(), last.getMonth(), last.getDate());

      const diffDays = (today.getTime() - lastDay.getTime()) / (1000 * 60 * 60 * 24);

      if (diffDays === 0) {
        return;
      }

      if (diffDays === 1) {
        stats.streak += 1;
      } else {
        stats.streak = 1;
      }
    } else {
      stats.streak = 1;
    }

    stats.lastLoginDate = Timestamp.fromDate(now);

    transaction.update(userRef, {
      stats,
    });
  });
};
