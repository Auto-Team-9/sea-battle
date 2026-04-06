import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import type { Level } from '../types/level';
import type { TopicId } from '../types/topic';
import { db } from '../firebase/config';

export const getLevelsByTopic = async (topicId: TopicId): Promise<Level[]> => {
  const q = query(collection(db, 'levels'), where('topicId', '==', topicId));

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => doc.data() as Level);
};

export const getLevelById = async (levelId: string): Promise<Level | null> => {
  const ref = doc(db, 'levels', levelId);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return snapshot.data() as Level;
};

export const completeLevel = async (userId: string, levelId: string) => {
  const ref = doc(db, 'users', userId);

  await updateDoc(ref, {
    'stats.completedLevels': arrayUnion(levelId),
  });
};
