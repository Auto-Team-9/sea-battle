import type { ShipData } from '../types/types';

export const inititalShips: ShipData[] = [
  { id: 1, width: 160, size: 4, orientation: 'horizontal' },
  { id: 2, width: 120, size: 3, orientation: 'horizontal' },
  { id: 3, width: 120, size: 3, orientation: 'horizontal' },
  { id: 4, width: 80, size: 2, orientation: 'horizontal' },
  { id: 5, width: 80, size: 2, orientation: 'horizontal' },
  { id: 6, width: 80, size: 2, orientation: 'horizontal' },
  { id: 7, width: 40, size: 1, orientation: 'horizontal' },
  { id: 8, width: 40, size: 1, orientation: 'horizontal' },
  { id: 9, width: 40, size: 1, orientation: 'horizontal' },
  { id: 10, width: 40, size: 1, orientation: 'horizontal' },
];

export const BOARD_SIZE = 11;

export const SHIPS: [number, number][] = [
  [1, 4],
  [2, 3],
  [3, 2],
  [4, 1],
];

export const COL_LABELS = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const tips = [
  'Take your time understanding the concepts before engaging the next challenge.',
  'Practice makes perfect - even seasoned captains check their maps twice.',
  'Break complex problems into smaller tasks, like dividing the ship’s crew for efficiency.',
  'Keep a notebook handy - jotting notes is like charting your course.',

  'Read error messages carefully - they are signals from the lookout tower.',
  'When something breaks, isolate the problem first before fixing it.',
  'Small consistent practice beats long chaotic coding sessions.',
  'Revisit earlier concepts often - even veterans review their navigation charts.',

  'Write code that others can read - your crew must understand your commands.',
  'Use meaningful variable names - vague names are like fog at sea.',
  'Test your assumptions step by step before sailing further.',
  'Debugging is part of the voyage, not a sign of failure.',

  'If you feel stuck, step back and rethink the approach.',
  'Complex problems often hide simple solutions beneath the surface.',
  'Refactoring is like repairing your ship before the next voyage.',
  'Consistency in style keeps your codebase as organized as a well-run fleet.',

  'Understand the “why”, not just the “how”.',
  'Read other people’s code - it’s like studying other captains’ routes.',
  'Patience and curiosity are your most reliable navigation tools.',
  'A calm mind writes the cleanest code.',
];

export const seaPhrases = [
  'The tide is with us',
  'Keep your sails trimmed',
  'Smooth seas never made a skilled sailor',
  'Eyes on the horizon, captain',
  'Prepare your compass and charts; knowledge is your wind',
  'A steady hand and a sharp mind will guide you through any storm',
];
