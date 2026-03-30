import { useState } from 'react';
import { Topics } from '../../../types/quiz';
import {
  seaPhrases,
  topicLocations,
  topicObjectives,
  topicOperations,
} from '../../../constants/constants';
import Button from '../../../components/ui/Button';

interface MapProps {
  currentTopic: Topics;
  onNext: () => void;
  onPrev: () => void;
}

const MapComponent = ({ currentTopic, onNext, onPrev }: MapProps) => {
  const operation = topicOperations[currentTopic];
  const location = topicLocations[currentTopic];
  const objective = topicObjectives[currentTopic];

  const [randomPhrase] = useState(() => {
    const index = Math.floor(Math.random() * seaPhrases.length);
    return seaPhrases[index];
  });

  return (
    <div className='doodle-border relative flex h-full flex-col p-4'>
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
            Objective: <span className='opacity-70'>{objective}</span>{' '}
          </p>
        </div>
      </div>

      <div className='flex-1'></div>

      <Button
        variant='arrow'
        onClick={onPrev}
        className='absolute top-1/2 left-0 ml-4 -translate-y-1/2 rotate-180'
      ></Button>

      <Button
        variant='arrow'
        onClick={onNext}
        className='absolute top-1/2 right-0 mr-4 -translate-y-1/2'
      ></Button>

      <p className='self-center self-end text-center text-sm italic opacity-70'>{randomPhrase}</p>
    </div>
  );
};

export default MapComponent;
