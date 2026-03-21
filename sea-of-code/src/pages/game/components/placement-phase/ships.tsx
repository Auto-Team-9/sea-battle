import { inititalShips } from '../../../../constants/constants';
import Ship from './ship/ship';

const Ships = () => {
  const listShip = inititalShips.map((s, i) => <Ship key={s.type + `-${i}`} width={s.width} />);

  return <div className='flex flex-col items-center justify-center gap-1'>{listShip}</div>;
};

export default Ships;
