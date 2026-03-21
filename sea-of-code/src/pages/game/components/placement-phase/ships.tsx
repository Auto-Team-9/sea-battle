import type { ShipType, Orientation } from '../../../../types/types';
import Ship from './ship/ship';

interface ShipsProps {
  ships: ShipType[];
  onPlaceShip: (shipId: number, row: number, col: number, orientation: Orientation) => boolean;
}

const Ships = ({ ships, onPlaceShip }: ShipsProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <h2>To turn - click on the ship</h2>
        <h2>To delete - click on the ship on the board</h2>
      </div>
      <div className='flex w-lg flex-wrap gap-4'>
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
    </div>
  );
};

export default Ships;
