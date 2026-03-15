import type { JSX } from 'react';
import type { ShipType } from '../../../../../types/types';

const Ship = ({ img, alt, handleShipClick, selectedShip, type, width }: ShipType): JSX.Element => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <img
        src={img}
        alt={alt}
        className={`flex h-10 w-${width} cursor-pointer items-center justify-center bg-cover bg-center bg-no-repeat`}
        onClick={() => handleShipClick(type)}
      />
      x{selectedShip}
    </div>
  );
};

export default Ship;
