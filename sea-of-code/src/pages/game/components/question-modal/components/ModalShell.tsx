import type { ReactNode } from 'react';
import type { QuizQuestion } from '../../../../../types/quiz';

interface ModalShellProps {
  question: QuizQuestion;
  children: ReactNode;
}

export const ModalShell = ({ question, children }: ModalShellProps) => (
  <div className='fixed inset-0 z-50 flex items-center justify-center'>
    <div className='absolute inset-0 bg-black/50' />
    <div className='doodle relative z-10 w-[min(92vw,460px)]'>
      <fieldset
        className='px-5 pt-4 pb-6 rounded-[12px] bg-[var(--color-bg-primary)] flex flex-col'
        style={{
          backgroundImage:
            'linear-gradient(var(--color-bg-secondary) 1px,transparent 1px),linear-gradient(90deg,var(--color-bg-secondary) 1px,transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <p className='mb-5 mt-1 text-center text-sm leading-relaxed font-bold text-[--color-text]'>
          {question.text}
        </p>
        {children}
      </fieldset>
    </div>
  </div>
);
