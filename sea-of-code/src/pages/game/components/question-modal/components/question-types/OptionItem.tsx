import type { OptionItemProps } from '../../../../../../types/types';
import { optionLabelStyle } from '../../questionModal.styles';

function getOptionBg(id: string, correct: string, selected: string | null, submitted: boolean): string {
  if (!submitted) return '';
  if (id === correct) return 'bg-green-100 dark:bg-green-900/30';
  if (id === selected) return 'bg-red-100 dark:bg-red-900/30';
  return '';
}

export const OptionItem = ({ opt, correct, selected, submitted, onSelect }: OptionItemProps) => (
  <label
    style={optionLabelStyle(submitted)}
    className={`doodle-border px-4 py-1.5 transition-colors ${getOptionBg(opt.id, correct, selected, submitted)}`}
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
