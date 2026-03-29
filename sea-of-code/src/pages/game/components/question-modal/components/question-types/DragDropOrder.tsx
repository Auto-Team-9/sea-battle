import { useState } from 'react';
import type { QuizOption, DragDropOrderProps } from '../../../../../../types/quiz';

export const DragDropOrder = ({ question, order, submitted, onReorder }: DragDropOrderProps) => {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const optionMap = Object.fromEntries(question.options.map((o) => [o.id, o]));
  const ids = order.split(',');
  const items: QuizOption[] = ids.map((id) => optionMap[id]);
  const correctIds = question.correct.split(',');

  const handleDragStart = (index: number) => setDragIndex(index);

  const handleDragEnd = () => {
    setDragIndex(null);
    setOverIndex(null);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setOverIndex(index);
  };

  const handleDrop = (targetIndex: number) => {
    if (dragIndex === null || dragIndex === targetIndex) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }
    const newIds = [...ids];
    const [moved] = newIds.splice(dragIndex, 1);
    newIds.splice(targetIndex, 0, moved);
    onReorder(newIds.join(','));
    setDragIndex(null);
    setOverIndex(null);
  };

  const getItemClass = (id: string, index: number): string => {
    if (!submitted) return '';
    if (id === correctIds[index]) return 'bg-green-100 dark:bg-green-900/30';
    return 'bg-red-100 dark:bg-red-900/30';
  };

  return (
    <div className='flex flex-col gap-3 flex-1'>
      {!submitted && (
        <p className='text-xs text-center text-[--color-text] opacity-60'>
          Drag items into the correct order
        </p>
      )}
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable={!submitted}
          onDragStart={() => handleDragStart(index)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={() => handleDrop(index)}
          className={[
            'doodle-border px-4 py-2 flex items-center gap-3 transition-colors select-none',
            submitted ? 'cursor-default' : 'cursor-grab active:cursor-grabbing',
            dragIndex === index ? 'opacity-40' : '',
            overIndex === index && dragIndex !== index
              ? 'outline outline-2 outline-offset-1 outline-[var(--color-accent,#888)]'
              : '',
            getItemClass(item.id, index),
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {!submitted && (
            <span className='text-[--color-text] opacity-40 text-base leading-none tracking-tighter'>
              ⋮⋮
            </span>
          )}
          <span className='flex-1 text-sm text-[--color-text]'>{item.text}</span>
        </div>
      ))}
    </div>
  );
};
