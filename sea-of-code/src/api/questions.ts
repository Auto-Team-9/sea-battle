import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import type { QuizQuestion } from '../types/quiz';

const COLLECTION = 'questions';

export const getRandomQuestion = async (
  topic?: string,
  difficulty?: string,
  questionType?: string,
  excludeIds?: string[],
): Promise<QuizQuestion> => {
  const queryFilters = [
    ...(topic ? [where('topic', '==', topic)] : []),
    ...(difficulty ? [where('difficulty', '==', difficulty)] : []),
    ...(questionType ? [where('type', '==', questionType)] : []),
  ];

  const questionsRef = collection(db, COLLECTION);
  const result = await getDocs(
    queryFilters.length > 0 ? query(questionsRef, ...queryFilters) : questionsRef,
  );

  if (result.empty) throw new Error('No questions found for the given filters');

  const eligible =
    excludeIds?.length
      ? result.docs.filter((d) => !excludeIds.includes(d.id))
      : result.docs;

  const pool = eligible.length > 0 ? eligible : result.docs;
  const randomDoc = pool[Math.floor(Math.random() * pool.length)];
  return { id: randomDoc.id, ...randomDoc.data() } as QuizQuestion;
};
