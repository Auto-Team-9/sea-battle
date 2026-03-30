import { levelsByTopic } from '../../../constants/constants';
import { Topics, type Difficulty } from '../../../types/quiz';

export interface Level {
  number: number;
  difficulty: Difficulty;
  modifier: number;
}

interface LvlSelectorProps {
  currentTopic: Topics;
  selectedLevel: number | null;
  onSelectLevel: (level: number) => void;
}

const difficultyColors: Record<Difficulty, string> = {
  Beginner: 'bg-green-400',
  Junior: 'bg-blue-400',
  Middle: 'bg-yellow-400',
  Senior: 'bg-orange-400',
  Expert: 'bg-red-500',
};

const topicLevelLayout: Record<Topics, string[]> = {
  [Topics.Fundamentals]: [
    'top-0 -right-50',
    'justify-center',
    'justify-end',
    'justify-center',
    'justify-start',
  ],

  [Topics.FunctionsAndContext]: [
    'justify-end',
    'justify-center',
    'justify-start',
    'justify-center',
    'justify-end',
  ],

  [Topics.DataHandling]: [
    'justify-center',
    'justify-start',
    'justify-end',
    'justify-start',
    'justify-center',
  ],

  [Topics.AsyncJavaScript]: [
    'justify-start',
    'justify-end',
    'justify-center',
    'justify-end',
    'justify-start',
  ],

  [Topics.BrowserJavaScript]: [
    'justify-end',
    'justify-start',
    'justify-center',
    'justify-start',
    'justify-end',
  ],
};

const getLevelPosition = (topic: Topics, levelIndex: number) => {
  return topicLevelLayout[topic][levelIndex] ?? 'justify-center';
};

const LvlSelector = ({ currentTopic, selectedLevel, onSelectLevel }: LvlSelectorProps) => {
  const levels = levelsByTopic[currentTopic];

  return (
    <div className='absolute top-0 left-0 z-0 flex h-full w-full items-center justify-center px-25 py-15'>
      {levels.map((lvl, index) => {
        const position = getLevelPosition(currentTopic, index);
        const isSelected = selectedLevel === lvl.number;

        return (
          <div key={lvl.number} className={`relative flex w-full ${position}`}>
            <div
              onClick={() => onSelectLevel(lvl.number)}
              className={`doodle-round-button w-10 cursor-pointer ${
                difficultyColors[lvl.difficulty]
              } ${isSelected ? 'ring-4 ring-black' : ''}`}
            >
              <span>{lvl.number}</span>
              <div>{lvl.difficulty}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LvlSelector;
