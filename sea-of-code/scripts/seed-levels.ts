import { doc, setDoc } from 'firebase/firestore';
import { db } from '../src/firebase/config';

import { levelsByTopic } from './levels';
import type { Level } from '../src/types/level';

export const seedLevels = async () => {
  try {
    const allLevels: Level[] = Object.values(levelsByTopic).flat();

    for (const level of allLevels) {
      await setDoc(doc(db, 'levels', level.id), level);
      console.log(`Uploaded level: ${level.id}`);
    }

    console.log('All levels uploaded successfully');
  } catch (error) {
    console.error('Error uploading levels:', error);
  }
};
