import type { Difficulty } from '../types/level';

export const difficultyStyles: Record<
  Difficulty,
  { hover: string; active: string; shadow: string }
> = {
  Beginner: {
    hover: 'hover:bg-green-600',
    active: 'bg-green-600',
    shadow: 'shadow-[0_0_15px_5px_rgba(22,163,74,0.8)]',
  },
  Junior: {
    hover: 'hover:bg-blue-400',
    active: 'bg-blue-400',
    shadow: 'shadow-[0_0_15px_5px_rgba(96,165,250,0.8)]',
  },
  Middle: {
    hover: 'hover:bg-yellow-500',
    active: 'bg-yellow-500',
    shadow: 'shadow-[0_0_15px_5px_rgba(234,179,8,0.8)]',
  },
  Senior: {
    hover: 'hover:bg-orange-500',
    active: 'bg-orange-500',
    shadow: 'shadow-[0_0_15px_5px_rgba(249,115,22,0.8)]',
  },
  Expert: {
    hover: 'hover:bg-red-500',
    active: 'bg-red-500',
    shadow: 'shadow-[0_0_15px_5px_rgba(239,68,68,0.8)]',
  },
};
