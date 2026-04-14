import type { Difficulty } from './level';

export type QuestionType = 'multiple-choice' | 'order';

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  correct: string;
  type?: QuestionType;
}

export interface QuestionModalProps {
  topic: string;
  difficulty: Difficulty;
  questionType?: QuestionType;
  answeredIds?: string[];
  onCorrect: (questionId: string) => void;
  onClose: () => void;
}

export interface OptionItemProps {
  opt: QuizOption;
  correct: string;
  selected: string | null;
  submitted: boolean;
  onSelect: (id: string) => void;
}

export interface ActionAreaProps {
  submitted: boolean;
  selected: string | null;
  isCorrect: boolean;
  onFire: () => void;
  isDragDrop?: boolean;
}

export interface DragDropOrderProps {
  question: QuizQuestion;
  order: string;
  submitted: boolean;
  onReorder: (order: string) => void;
}
