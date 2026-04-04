export type Difficulty = 'Beginner' | 'Junior' | 'Middle' | 'Senior' | 'Expert';

export enum Topics {
  Fundamentals = 'Fundamentals JavaScript',
  FunctionsAndContext = 'Functions & Context',
  DataHandling = 'Data Handling',
  AsyncJavaScript = 'Async JavaScript',
  BrowserJavaScript = 'Browser JavaScript',
}

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
  onCorrect: () => void;
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
}

export interface DragDropOrderProps {
  question: QuizQuestion;
  order: string;
  submitted: boolean;
  onReorder: (order: string) => void;
}