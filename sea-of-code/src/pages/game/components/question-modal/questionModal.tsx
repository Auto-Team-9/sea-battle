import { useEffect, useState } from 'react';
import type { QuizQuestion, QuestionModalProps } from '../../../../types/types';
import { actionAreaStyle } from './questionModal.styles';
import { ModalShell } from './components/ModalShell';
import { ActionArea } from './components/ActionArea';
import { MultipleChoice } from './components/question-types/MultipleChoice';

const SAMPLE_QUESTION: QuizQuestion = {
  text: 'Which array method creates a new array by applying a function to each element?',
  options: [
    { id: 'a', text: 'forEach()' },
    { id: 'b', text: 'map()' },
    { id: 'c', text: 'filter()' },
  ],
  correct: 'b',
};

export const QuestionModal = ({ question = SAMPLE_QUESTION, onCorrect, onClose }: QuestionModalProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = submitted && selected === question.correct;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const handleFire = () => {
    if (!selected || submitted) return;
    setSubmitted(true);
    if (selected === question.correct) onCorrect?.();
    setTimeout(() => onClose?.(), 1000);
  };

  return (
    <ModalShell question={question}>
      <MultipleChoice
        question={question}
        selected={selected}
        submitted={submitted}
        onSelect={setSelected}
      />
      <div className='mt-5 flex items-center justify-center' style={actionAreaStyle}>
        <ActionArea submitted={submitted} selected={selected} isCorrect={isCorrect} onFire={handleFire} />
      </div>
    </ModalShell>
  );
};

