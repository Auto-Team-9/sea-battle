import type { ReactNode } from 'react';
import type { QuizQuestion } from '../../../../../types/types';
import { cardStyle } from '../questionModal.styles';

interface ModalShellProps {
  question: QuizQuestion;
  children: ReactNode;
}

export const ModalShell = ({ question, children }: ModalShellProps) => (
  <div className='fixed inset-0 z-50 flex items-center justify-center'>
    <div className='absolute inset-0 bg-black/50' />
    <div className='doodle relative z-10 w-[min(92vw,460px)]'>
      <fieldset className='px-5 pt-4 pb-6' style={cardStyle}>
        <p className='mb-5 mt-1 text-center text-sm leading-relaxed font-bold text-[--color-text]'>
          {question.text}
        </p>
        {children}
      </fieldset>
    </div>
  </div>
);
