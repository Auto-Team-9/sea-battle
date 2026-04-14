import type { TopicDescription, TopicOperations } from '../constants/topics';

export interface Topic {
  id: TopicId;
  title: Topics;
  description: TopicDescription;
  operationName: TopicOperations;
  location: string;
  objective: string;
  background: React.ReactNode;
}

export type TopicId =
  | 'fundamentals'
  | 'functions_context'
  | 'data_handling'
  | 'async_js'
  | 'browser_js';

export enum Topics {
  Fundamentals = 'Fundamentals JavaScript',
  FunctionsAndContext = 'Functions & Context',
  DataHandling = 'Data Handling',
  AsyncJavaScript = 'Async JavaScript',
  BrowserJavaScript = 'Browser JavaScript',
}
