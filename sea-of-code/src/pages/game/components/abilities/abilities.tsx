import { useState } from 'react';
import Ability from './abilty/ability';

const Abilities = () => {
  const [abilitiesCount, setAbilitiesCount] = useState({
    lumen: 3,
    shield: 3,
    change: 3,
  });

  const handleAbilityClick = (ability: string) => {
    setAbilitiesCount(prev => {
      if (prev[ability as keyof typeof prev] === 0) return prev;

      return {
        ...prev,
        [ability]: prev[ability as keyof typeof prev] - 1,
      };
    });
  };

  return (
    <aside className='doodle-border px-4'>
      <h1 className='text-5xl'>Abilities</h1>
      <br />
      <ul className='flex flex-col justify-center gap-2 text-3xl'>
        <Ability
          name='Lumen'
          count={abilitiesCount.lumen}
          handleAbilityClick={handleAbilityClick}
        />
        <Ability
          name='Shield'
          count={abilitiesCount.shield}
          handleAbilityClick={handleAbilityClick}
        />
        <Ability
          name='Change'
          count={abilitiesCount.change}
          handleAbilityClick={handleAbilityClick}
        />
      </ul>
    </aside>
  );
};

export default Abilities;
