import type { TopicId } from './topic';

export interface Level {
  id: string;
  topicId: TopicId;
  number: number;
  difficulty: Difficulty;
  modifier: Modifier | null;
  position: Position;
  connections: string[];
}

export type Position = {
  x: number;
  y: number;
};

export type Difficulty = 'Beginner' | 'Junior' | 'Middle' | 'Senior' | 'Expert';

export type Modifier = 'timeAttack' | 'random';
