import BgPattern from '../assets/topography.svg?react';
import Bg2Pattern from '../assets/topography2.svg?react';
import HexPattern from '../assets/hex.svg?react';
import LinesPattern from '../assets/lines.svg?react';
import LeavesPattern from '../assets/leaves.svg?react';
import { Topics } from '../types/quiz';

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

export const topicOperations = {
  [Topics.Fundamentals]: 'First Light',
  [Topics.FunctionsAndContext]: 'Silent Scope',
  [Topics.DataHandling]: 'Data Abyss',
  [Topics.AsyncJavaScript]: 'Async Spearhead',
  [Topics.BrowserJavaScript]: 'DOM Vanguard',
};

export const topicLocations = {
  [Topics.Fundamentals]: 'JavaScript Basics Islands',
  [Topics.FunctionsAndContext]: 'Functions & Context Waters',
  [Topics.DataHandling]: 'Data Handling Hexagon',
  [Topics.AsyncJavaScript]: 'Async JS Stream',
  [Topics.BrowserJavaScript]: 'Browser JavaScript Harbor',
};

export const topicObjectives: Record<Topics, string> = {
  [Topics.Fundamentals]:
    'Master variables, primitive types, operators, and the core building blocks of JavaScript.',

  [Topics.FunctionsAndContext]:
    'Understand functions, scope, closures, and how the "this" context behaves in different situations.',

  [Topics.DataHandling]:
    'Work confidently with arrays, objects, and common data manipulation techniques.',

  [Topics.AsyncJavaScript]: 'Master promises, async/await, and the JavaScript event loop.',

  [Topics.BrowserJavaScript]:
    'Learn how to interact with the DOM, handle events, and control browser behavior.',
};

export const topicPatterns: Record<Topics, React.ReactNode[]> = {
  [Topics.Fundamentals]: [
    <BgPattern
      key='bg1'
      className='absolute inset-0 -z-10 h-full w-full object-cover object-center text-[var(--color-text)] opacity-10'
      preserveAspectRatio='xMidYMid slice'
    />,
  ],

  [Topics.FunctionsAndContext]: [
    <Bg2Pattern
      key='bg2'
      className='absolute inset-0 -z-10 h-full w-full scale-[1.1] object-cover object-center text-[var(--color-text)] opacity-10'
      preserveAspectRatio='xMidYMid slice'
    />,
  ],

  [Topics.DataHandling]: [
    <HexPattern
      key='hex'
      className='absolute inset-0 -z-10 h-full w-full scale-[15] text-[var(--color-text)] opacity-15'
      preserveAspectRatio='xMidYMid slice'
    />,
  ],

  [Topics.AsyncJavaScript]: [
    <LinesPattern
      key='lines'
      className='absolute inset-0 -z-10 h-full w-full object-cover object-center text-[var(--color-text)] opacity-10'
      preserveAspectRatio='xMidYMid slice'
    />,
  ],

  [Topics.BrowserJavaScript]: [
    <LeavesPattern
      key='leaves'
      className='absolute inset-0 -z-10 h-full w-full object-cover object-center text-[var(--color-text)] opacity-10'
      preserveAspectRatio='xMidYMid slice'
    />,
  ],
};
