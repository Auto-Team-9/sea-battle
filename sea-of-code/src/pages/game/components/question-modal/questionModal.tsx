import { useEffect, useState } from 'react';
import type { QuizQuestion, QuestionModalProps } from '../../../../types/quiz';
import { getRandomQuestion } from '../../../../api/questions';
import { actionAreaStyle, cardStyle } from './questionModal.styles';
import Message from '../../../../components/ui/Message';
import { ModalShell } from './components/ModalShell';
import { ActionArea } from './components/ActionArea';
import { MultipleChoice } from './components/question-types/MultipleChoice';

export const QuestionModal = ({
  topic = 'fundamentals',
  difficulty = 'Beginner',
  onCorrect,
  onClose,
}: QuestionModalProps) => {
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isCorrect = isSubmitted && selectedAnswer === question?.correct;

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  useEffect(() => {
    getRandomQuestion(topic, difficulty)
      .then((q) => {
        setQuestion(q);
      })
      .catch(() => setErrorMessage('Failed to load question'))
      .finally(() => setIsLoading(false));
  }, [topic, difficulty]);

  const handleSubmit = () => {
    if (!selectedAnswer || isSubmitted || !question) return;
    setIsSubmitted(true);
    if (selectedAnswer === question.correct) onCorrect?.();
    setTimeout(() => onClose?.(), 1000);
  };

  if (isLoading || !question) {
    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='absolute inset-0 bg-black/50' />
        <div className='doodle relative z-10 w-[min(92vw,460px)]'>
          <fieldset className='flex items-center justify-center px-5 py-10' style={cardStyle}>
            {errorMessage
              ? <Message message={errorMessage} variant='error' size='small' />
              : <p className='text-sm text-[--color-text]'>Loading question…</p>
            }
          </fieldset>
        </div>
      </div>
    );
  }

  return (
    <ModalShell question={question}>
      <MultipleChoice
        question={question}
        selected={selectedAnswer}
        submitted={isSubmitted}
        onSelect={setSelectedAnswer}
      />
      <div className='mt-5 flex items-center justify-center' style={actionAreaStyle}>
        <ActionArea submitted={isSubmitted} selected={selectedAnswer} isCorrect={isCorrect} onFire={handleSubmit} />
      </div>
    </ModalShell>
  );
};

