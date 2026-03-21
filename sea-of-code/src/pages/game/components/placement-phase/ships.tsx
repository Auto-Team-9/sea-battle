import type { ShipType, Orientation } from '../../../../types/types';
import Ship from './ship/ship';

interface ShipsProps {
  ships: ShipType[];
  onPlaceShip: (shipId: number, row: number, col: number, orientation: Orientation) => boolean;
}

const Ships = ({ ships, onPlaceShip }: ShipsProps) => {
  console.log(
    'Ships render, ships:',
    ships.map(s => s.id)
  );

  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      {ships.map(ship => (
        <Ship
          key={ship.id}
          id={ship.id}
          width={ship.width}
          size={ship.size}
          orientation={ship.orientation}
          onPlace={(row, col, orientation) => onPlaceShip(ship.id, row, col, orientation)}
        />
      ))}
    </div>
  );
};

export default Ships;
