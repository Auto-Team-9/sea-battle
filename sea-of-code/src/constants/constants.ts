import { Topics } from '../types/quiz';
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

export const topicDescriptions: Record<Topics, string> = {
  [Topics.Fundamentals]:
    'The basics of JavaScript: variables, types, and operators. Every sailor needs a solid deck to navigate! Master these fundamentals to keep your code steady and avoid running aground.',
  [Topics.FunctionsAndContext]:
    'Dive into functions, scope, and execution context. Mastering this keeps your ship steady in stormy seas. Remember: understanding how “this” behaves is like reading the winds - crucial for smooth sailing.',
  [Topics.DataHandling]:
    'Manipulate arrays, objects, and data structures like a true navigator plotting coordinates on a map. Sorting, filtering, and mapping your data is like charting a course through treacherous waters - precision is key.',
  [Topics.AsyncJavaScript]:
    'Promises, async/await, and event loops - sail through asynchronous waters with confidence. Timing and coordination are everything: a misstep can leave your ship stuck in a whirlpool of callbacks.',
  [Topics.BrowserJavaScript]:
    'Control the DOM, handle events, and steer your web pages like a captain commanding a fleet. Interacting with the browser requires vigilance and dexterity, as every element responds like a crew member following orders.',
};

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
