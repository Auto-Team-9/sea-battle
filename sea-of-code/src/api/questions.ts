import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import type { QuizQuestion } from '../types/quiz';

const COLLECTION = 'questions';

export const getRandomQuestion = async (
  topic?: string,
  difficulty?: string,
  questionType?: string,
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

  const randomDoc = result.docs[Math.floor(Math.random() * result.docs.length)];
  return { id: randomDoc.id, ...randomDoc.data() } as QuizQuestion;
};
