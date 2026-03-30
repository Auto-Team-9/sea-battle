export type Difficulty = 'Beginner' | 'Junior' | 'Middle' | 'Senior' | 'Expert';

export enum Topics {
  Fundamentals = 'Fundamentals JavaScript',
  FunctionsAndContext = 'Functions & Context',
  DataHandling = 'Data Handling',
  AsyncJavaScript = 'Async JavaScript',
  BrowserJavaScript = 'Browser JavaScript',
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id?: string;
  text: string;
  options: QuizOption[];
  correct: string;
}

export interface QuestionModalProps {
  question?: QuizQuestion;
  topic?: string;
  difficulty?: string;
  onCorrect?: () => void;
  onClose?: () => void;
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
