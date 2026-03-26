import type { QuizQuestion } from '../../../../../../types/quiz';
import { OptionItem } from './OptionItem';

interface MultipleChoiceProps {
  question: QuizQuestion;
  selected: string | null;
  submitted: boolean;
  onSelect: (id: string) => void;
}

export const MultipleChoice = ({ question, selected, submitted, onSelect }: MultipleChoiceProps) => (
  <div className='flex flex-col gap-4 flex-1'>
    {question.options.map((option) => (
      <OptionItem
        key={option.id}
        opt={option}
        correct={question.correct}
        selected={selected}
        submitted={submitted}
        onSelect={onSelect}
      />
    ))}
  </div>
);
