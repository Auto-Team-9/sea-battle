import BgPattern from '../assets/topography.svg?react';
import Bg2Pattern from '../assets/topography2.svg?react';
import HexPattern from '../assets/hex.svg?react';
import LinesPattern from '../assets/lines.svg?react';
import LeavesPattern from '../assets/leaves.svg?react';
import { Topics, type Topic, type TopicId } from '../types/topic';

export enum TopicDescription {
  Fundamentals = 'The basics of JavaScript: variables, types, and operators. Every sailor needs a solid deck to navigate! Master these fundamentals to keep your code steady and avoid running aground.',
  FunctionsAndContext = 'Dive into functions, scope, and execution context. Mastering this keeps your ship steady in stormy seas. Remember: understanding how “this” behaves is like reading the winds - crucial for smooth sailing.',
  DataHandling = 'Manipulate arrays, objects, and data structures like a true navigator plotting coordinates on a map. Sorting, filtering, and mapping your data is like charting a course through treacherous waters - precision is key.',
  AsyncJavaScript = 'Promises, async/await, and event loops - sail through asynchronous waters with confidence. Timing and coordination are everything: a misstep can leave your ship stuck in a whirlpool of callbacks.',
  BrowserJavaScript = 'Control the DOM, handle events, and steer your web pages like a captain commanding a fleet. Interacting with the browser requires vigilance and dexterity, as every element responds like a crew member following orders.',
}

export enum TopicOperations {
  Fundamentals = 'First Light',
  FunctionsAndContext = 'Silent Scope',
  DataHandling = 'Data Abyss',
  AsyncJavaScript = 'Async Spearhead',
  BrowserJavaScript = 'DOM Vanguard',
}

export enum TopicLocations {
  Fundamentals = 'JavaScript Basics Islands',
  FunctionsAndContext = 'Functions & Context Waters',
  DataHandling = 'Data Handling Hexagon',
  AsyncJavaScript = 'Async JS Stream',
  BrowserJavaScript = 'Browser JavaScript Harbor',
}

export enum TopicObjectives {
  Fundamentals = 'Master variables, primitive types, operators, and the core building blocks of JavaScript.',
  FunctionsAndContext = 'Understand functions, scope, closures, and how the "this" context behaves in different situations.',
  DataHandling = 'Work confidently with arrays, objects, and common data manipulation techniques.',
  AsyncJavaScript = 'Master promises, async/await, and the JavaScript event loop.',
  BrowserJavaScript = 'Learn how to interact with the DOM, handle events, and control browser behavior.',
}

export const topics: Record<TopicId, Topic> = {
  fundamentals: {
    id: 'fundamentals',
    title: Topics.Fundamentals,
    description: TopicDescription.Fundamentals,
    operationName: TopicOperations.Fundamentals,
    location: TopicLocations.Fundamentals,
    objective: TopicObjectives.Fundamentals,
    background: (
      <BgPattern
        key='bg1'
        className='absolute inset-0 -z-10 h-full w-full object-cover object-center text-[var(--color-text)] opacity-10'
        preserveAspectRatio='xMidYMid slice'
      />
    ),
  },

  functions_context: {
    id: 'functions_context',
    title: Topics.FunctionsAndContext,
    description: TopicDescription.FunctionsAndContext,
    operationName: TopicOperations.FunctionsAndContext,
    location: TopicLocations.FunctionsAndContext,
    objective: TopicObjectives.FunctionsAndContext,
    background: (
      <Bg2Pattern
        key='bg2'
        className='absolute inset-0 -z-10 h-full w-full scale-[1.1] object-cover object-center text-[var(--color-text)] opacity-10'
        preserveAspectRatio='xMidYMid slice'
      />
    ),
  },

  data_handling: {
    id: 'data_handling',
    title: Topics.DataHandling,
    description: TopicDescription.DataHandling,
    operationName: TopicOperations.DataHandling,
    location: TopicLocations.DataHandling,
    objective: TopicObjectives.DataHandling,
    background: (
      <HexPattern
        key='hex'
        className='absolute inset-0 -z-10 h-full w-full scale-[15] text-[var(--color-text)] opacity-15'
        preserveAspectRatio='xMidYMid slice'
      />
    ),
  },

  async_js: {
    id: 'async_js',
    title: Topics.AsyncJavaScript,
    description: TopicDescription.AsyncJavaScript,
    operationName: TopicOperations.AsyncJavaScript,
    location: TopicLocations.AsyncJavaScript,
    objective: TopicObjectives.AsyncJavaScript,
    background: (
      <LinesPattern
        key='lines'
        className='absolute inset-0 -z-10 h-full w-full object-cover object-center text-[var(--color-text)] opacity-10'
        preserveAspectRatio='xMidYMid slice'
      />
    ),
  },

  browser_js: {
    id: 'browser_js',
    title: Topics.BrowserJavaScript,
    description: TopicDescription.BrowserJavaScript,
    operationName: TopicOperations.BrowserJavaScript,
    location: TopicLocations.BrowserJavaScript,
    objective: TopicObjectives.BrowserJavaScript,
    background: (
      <LeavesPattern
        key='leaves'
        className='absolute inset-0 -z-10 h-full w-full object-cover object-center text-[var(--color-text)] opacity-10'
        preserveAspectRatio='xMidYMid slice'
      />
    ),
  },
};
