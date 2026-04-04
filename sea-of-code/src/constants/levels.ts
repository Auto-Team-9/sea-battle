import { Topics, type Difficulty } from '../types/quiz';
import type { Level } from '../types/types';

export const levelsByTopic: Record<Topics, Level[]> = {
  [Topics.Fundamentals]: [
    { id: 1, difficulty: 'Beginner', modifier: null, x: 5, y: 80, connections: [2] },
    { id: 2, difficulty: 'Beginner', modifier: null, x: 13, y: 60, connections: [3] },
    { id: 3, difficulty: 'Beginner', modifier: null, x: 20, y: 75, connections: [4] },
    { id: 4, difficulty: 'Beginner', modifier: null, x: 25, y: 60, connections: [5] },
    { id: 5, difficulty: 'Beginner', modifier: null, x: 30, y: 45, connections: [6] },
    { id: 6, difficulty: 'Junior', modifier: null, x: 40, y: 30, connections: [7] },
    { id: 7, difficulty: 'Junior', modifier: null, x: 45, y: 45, connections: [8] },
    { id: 8, difficulty: 'Junior', modifier: null, x: 52, y: 38, connections: [9] },
    { id: 9, difficulty: 'Junior', modifier: null, x: 58, y: 50, connections: [10] },
    { id: 10, difficulty: 'Middle', modifier: null, x: 68, y: 55, connections: [11] },
    { id: 11, difficulty: 'Middle', modifier: null, x: 73, y: 45, connections: [12] },
    { id: 12, difficulty: 'Middle', modifier: null, x: 75, y: 30, connections: [13] },
    { id: 13, difficulty: 'Senior', modifier: null, x: 85, y: 20, connections: [14] },
    { id: 14, difficulty: 'Senior', modifier: null, x: 90, y: 30, connections: [15] },
    { id: 15, difficulty: 'Expert', modifier: null, x: 93, y: 50, connections: [16] },
  ],

  [Topics.FunctionsAndContext]: [
    { id: 1, difficulty: 'Beginner', modifier: null, x: 15, y: 25, connections: [2] },
    { id: 2, difficulty: 'Beginner', modifier: null, x: 20, y: 25, connections: [3] },
    { id: 3, difficulty: 'Beginner', modifier: null, x: 25, y: 25, connections: [4] },
    { id: 4, difficulty: 'Junior', modifier: null, x: 30, y: 40, connections: [6] },
    { id: 5, difficulty: 'Junior', modifier: null, x: 35, y: 40, connections: [5] },
    { id: 6, difficulty: 'Junior', modifier: null, x: 40, y: 40, connections: [7] },
    { id: 7, difficulty: 'Middle', modifier: null, x: 45, y: 55, connections: [8] },
    { id: 8, difficulty: 'Middle', modifier: null, x: 50, y: 55, connections: [9] },
    { id: 9, difficulty: 'Middle', modifier: null, x: 55, y: 55, connections: [10] },
    { id: 10, difficulty: 'Senior', modifier: null, x: 60, y: 70, connections: [11] },
    { id: 11, difficulty: 'Senior', modifier: null, x: 65, y: 70, connections: [12] },
    { id: 12, difficulty: 'Senior', modifier: null, x: 70, y: 70, connections: [13] },
    { id: 13, difficulty: 'Expert', modifier: null, x: 75, y: 85, connections: [14] },
    { id: 14, difficulty: 'Expert', modifier: null, x: 80, y: 85, connections: [15] },
    { id: 15, difficulty: 'Expert', modifier: null, x: 85, y: 85, connections: [16] },
  ],

  [Topics.DataHandling]: [
    { id: 1, difficulty: 'Beginner', modifier: null, x: 50, y: 7, connections: [2] },
    { id: 2, difficulty: 'Beginner', modifier: null, x: 66.5, y: 28, connections: [3] },
    { id: 3, difficulty: 'Beginner', modifier: null, x: 66.5, y: 72, connections: [4] },
    { id: 4, difficulty: 'Junior', modifier: null, x: 50, y: 93, connections: [5] },
    { id: 5, difficulty: 'Junior', modifier: null, x: 33.5, y: 72, connections: [6] },
    { id: 6, difficulty: 'Junior', modifier: null, x: 33.5, y: 29, connections: [7] },

    { id: 7, difficulty: 'Junior', modifier: null, x: 39, y: 36, connections: [8] },
    { id: 8, difficulty: 'Middle', modifier: null, x: 50, y: 22, connections: [9] },
    { id: 9, difficulty: 'Middle', modifier: null, x: 61, y: 36, connections: [10] },
    { id: 10, difficulty: 'Middle', modifier: null, x: 61, y: 63, connections: [11] },
    { id: 11, difficulty: 'Middle', modifier: null, x: 50, y: 79, connections: [12] },
    { id: 12, difficulty: 'Middle', modifier: null, x: 39, y: 63, connections: [13] },

    { id: 13, difficulty: 'Senior', modifier: null, x: 44.5, y: 56, connections: [14] },
    { id: 14, difficulty: 'Senior', modifier: null, x: 44.5, y: 43, connections: [15] },
    { id: 15, difficulty: 'Senior', modifier: null, x: 50, y: 36, connections: [16] },
    { id: 16, difficulty: 'Expert', modifier: null, x: 55.5, y: 43, connections: [17] },
    { id: 17, difficulty: 'Expert', modifier: null, x: 55.5, y: 56, connections: [18] },
    { id: 18, difficulty: 'Expert', modifier: null, x: 50, y: 64, connections: [19] },

    { id: 19, difficulty: 'Expert', modifier: null, x: 50, y: 50, connections: [] },
  ],

  [Topics.AsyncJavaScript]: [
    { id: 1, difficulty: 'Beginner', modifier: null, x: 50, y: 0, connections: [2] },
    { id: 2, difficulty: 'Beginner', modifier: null, x: 52.5, y: 10, connections: [3] },
    { id: 3, difficulty: 'Beginner', modifier: null, x: 55, y: 20, connections: [4] },
    { id: 4, difficulty: 'Junior', modifier: null, x: 57.5, y: 30, connections: [5] },
    { id: 5, difficulty: 'Junior', modifier: null, x: 60, y: 40, connections: [6] },
    { id: 6, difficulty: 'Middle', modifier: null, x: 62.5, y: 50, connections: [7] },
    { id: 7, difficulty: 'Middle', modifier: null, x: 65, y: 60, connections: [8] },
    { id: 8, difficulty: 'Senior', modifier: null, x: 67.5, y: 70, connections: [9] },
    { id: 9, difficulty: 'Senior', modifier: null, x: 70, y: 80, connections: [10] },
    { id: 10, difficulty: 'Expert', modifier: null, x: 72.5, y: 90, connections: [] },
  ],

  [Topics.BrowserJavaScript]: [
    { id: 1, difficulty: 'Beginner', modifier: null, x: 50, y: 0, connections: [2] },
    { id: 2, difficulty: 'Beginner', modifier: null, x: 50, y: 20, connections: [3, 6] },
    { id: 3, difficulty: 'Junior', modifier: null, x: 30, y: 40, connections: [4, 5] },
    { id: 4, difficulty: 'Junior', modifier: null, x: 20, y: 60, connections: [] },
    { id: 5, difficulty: 'Junior', modifier: null, x: 40, y: 60, connections: [] },
    { id: 6, difficulty: 'Middle', modifier: null, x: 70, y: 40, connections: [7, 8] },
    { id: 7, difficulty: 'Middle', modifier: null, x: 60, y: 60, connections: [] },
    { id: 8, difficulty: 'Middle', modifier: null, x: 80, y: 60, connections: [9, 10] },
    { id: 9, difficulty: 'Senior', modifier: null, x: 70, y: 80, connections: [] },
    { id: 10, difficulty: 'Expert', modifier: null, x: 90, y: 80, connections: [] },
  ],
};

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
