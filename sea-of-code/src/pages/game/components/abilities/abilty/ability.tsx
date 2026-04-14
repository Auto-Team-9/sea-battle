import type { AbilityType } from '../../../../../types/types';

const Ability = ({ name, count, handleAbilityClick }: AbilityType) => {
  return (
    <li
      className='cursor-pointer transition-colors hover:text-amber-500'
      onClick={() => handleAbilityClick(name.toLocaleLowerCase())}
    >
      {name}: {count}
    </li>
  );
};

export default Ability;
