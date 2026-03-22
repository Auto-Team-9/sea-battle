import { useEffect, useState } from 'react';
import Ship from './ship/ship';
import type { ShipsType } from '../../../../types/types';

const Ships = ({ handleChangeReady }: ShipsType) => {
  const [selectedShip, setSelectedShip] = useState({
    single: 4,
    double: 3,
    triple: 2,
    quadruple: 1,
  });

  const handleShipClick = (type: string) => {
    setSelectedShip(prev => {
      if (prev[type as keyof typeof prev] === 0) return prev;

      return {
        ...prev,
        [type]: prev[type as keyof typeof prev] - 1,
      };
    });
  };

  useEffect(() => {
    const total = Object.values(selectedShip).reduce((a, b) => a + b, 0);

    if (total === 0) {
      handleChangeReady();
    }
  }, [selectedShip, handleChangeReady]);

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
