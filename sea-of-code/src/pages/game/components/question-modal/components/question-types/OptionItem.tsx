import type { OptionItemProps } from '../../../../../../types/quiz';

function getOptionClass(id: string, correct: string, selected: string | null, submitted: boolean): string {
  if (!submitted) return '';
  if (id === correct) return 'bg-green-100 dark:bg-green-900/30';
  if (id === selected) return 'bg-red-100 dark:bg-red-900/30';
  return '';
}

export const OptionItem = ({ opt, correct, selected, submitted, onSelect }: OptionItemProps) => (
  <label
    className={`doodle-border px-4 py-1.5 flex items-center gap-3 transition-colors ${submitted ? 'cursor-default' : 'cursor-pointer'} ${getOptionClass(opt.id, correct, selected, submitted)}`}
  >
    <input
      type='radio'
      name='quiz-answer'
      value={opt.id}
      checked={selected === opt.id}
      disabled={submitted}
      onChange={() => !submitted && onSelect(opt.id)}
    />
    <span className='flex-1 text-sm text-[--color-text]'>{opt.text}</span>
  </label>
);
