import { useEffect, useState } from 'react';

import type { ShipsType } from '../../../../types/types';
import Ship from './ship/ship';

const Ships = ({ handleCheckReady }: ShipsType) => {
  const [selectedShip, setSelectedShip] = useState({
    single: 4,
    double: 3,
    triple: 2,
    quadruple: 1,
  });

  useEffect(() => {
    const totalShips =
      selectedShip.single + selectedShip.double + selectedShip.triple + selectedShip.quadruple;
    if (totalShips === 0) {
      handleCheckReady();
    }
  }, [selectedShip, handleCheckReady]);

  const handleShipClick = (type: string) => {
    if (selectedShip[type as keyof typeof selectedShip] > 0) {
      setSelectedShip(prev => ({
        ...prev,
        [type]: prev[type as keyof typeof prev] - 1,
      }));
    }
  };

  return (
    <div className='flex h-20 w-full items-center justify-center gap-4'>
      <Ship
        img='./game-images/single.png'
        alt='single ship'
        handleShipClick={handleShipClick}
        selectedShip={selectedShip.single}
        width={10}
        type='single'
      />
      <Ship
        img='./game-images/double.png'
        alt='double ship'
        handleShipClick={handleShipClick}
        selectedShip={selectedShip.double}
        width={20}
        type='double'
      />
      <Ship
        img='./game-images/triple.png'
        alt='triple ship'
        handleShipClick={handleShipClick}
        selectedShip={selectedShip.triple}
        width={30}
        type='triple'
      />
      <Ship
        img='./game-images/quadruple.png'
        alt='quadruple ship'
        handleShipClick={handleShipClick}
        selectedShip={selectedShip.quadruple}
        width={40}
        type='quadruple'
      />
    </div>
  );
};

export default Ships;
