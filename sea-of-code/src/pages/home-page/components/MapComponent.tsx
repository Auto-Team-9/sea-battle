import { useState } from 'react';
import { Topics } from '../../../types/quiz';
import { seaPhrases } from '../../../constants/constants';
import Button from '../../../components/ui/Button';
import LvlSelector from './LvlSelector';
import { useNavigate } from 'react-router';
import {
  topicLocations,
  topicObjectives,
  topicOperations,
  topicPatterns,
} from '../../../constants/topics';

interface MapProps {
  currentTopic: Topics;
  onNext: () => void;
  onPrev: () => void;
}

const MapComponent = ({ currentTopic, onNext, onPrev }: MapProps) => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const navigate = useNavigate();

  const operation = topicOperations[currentTopic];
  const location = topicLocations[currentTopic];
  const objective = topicObjectives[currentTopic];
  const patterns = topicPatterns[currentTopic];

  const [randomPhrase] = useState(() => {
    const index = Math.floor(Math.random() * seaPhrases.length);
    return seaPhrases[index];
  });

  const startBattle = () => {
    if (!selectedLevel) return;

    navigate('/game', {
      state: { topic: currentTopic, level: selectedLevel },
    });
  };

  return (
    <div
      className={`doodle-border relative z-10 flex h-full flex-col justify-between overflow-hidden p-4`}
    >
      {patterns}

      <div className='flex w-fit max-w-136 flex-col gap-1'>
        <div className='flex items-center gap-4'>
          <hr className='doodle-hr w-full flex-grow' />
          <p className='tracking-wide whitespace-nowrap uppercase opacity-70'>Selected Operation</p>
          <hr className='doodle-hr w-full flex-grow rotate-180 transform' />
        </div>
        <div>
          <p className='text-3xl font-semibold'>{operation}</p>

          <p>
            Location: <span className='opacity-70'>{location}</span>
          </p>

          <p>
            Objective: <span className='opacity-70'>{objective}</span>
          </p>
        </div>
      </div>
      <div className={`doodle flex w-fit flex-col items-end gap-5 self-end !bg-transparent`}>
        <Button
          variant='primary'
          className={`z-20 !w-fit ${selectedLevel ? 'opacity-100' : 'opacity-0'}`}
          disabled={!selectedLevel}
          onClick={startBattle}
        >
          To Battle!
        </Button>

        <p className='self-center self-end text-center text-sm italic opacity-70'>{randomPhrase}</p>
      </div>
      <Button
        variant='arrow'
        onClick={onPrev}
        className='absolute top-1/2 left-0 z-20 ml-4 -translate-y-1/2 rotate-180'
      ></Button>
      <Button
        variant='arrow'
        onClick={onNext}
        className='absolute top-1/2 right-0 z-20 mr-4 -translate-y-1/2'
      ></Button>
      <LvlSelector
        currentTopic={currentTopic}
        selectedLevel={selectedLevel}
        onSelectLevel={setSelectedLevel}
      />
    </div>
  );
};

export default MapComponent;
