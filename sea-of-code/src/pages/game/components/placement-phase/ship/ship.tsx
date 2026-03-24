import { useCallback, useRef, useEffect, useState, type JSX } from 'react';
import type { Orientation, ShipProps } from '../../../../../types/types';

const Ship = ({ width, orientation: initialOrientation, onPlace }: ShipProps): JSX.Element => {
  const [orientation, setOrientation] = useState<Orientation>(initialOrientation);
  const refShip = useRef<HTMLDivElement>(null);
  const shiftX = useRef(0);
  const shiftY = useRef(0);
  const draggingOrientationRef = useRef<Orientation>(initialOrientation);
  const isDraggingRef = useRef(false);

  const moveAt = (clientX: number, clientY: number) => {
    const el = refShip.current;
    if (!el) return;
    el.style.left = `${clientX - shiftX.current}px`;
    el.style.top = `${clientY - shiftY.current}px`;
  };

  const onMouseMove = useCallback((event: MouseEvent) => {
    moveAt(event.clientX, event.clientY);
  }, []);

  const resetShipStyles = (el: HTMLElement) => {
    el.style.position = '';
    el.style.left = '';
    el.style.top = '';
    el.style.zIndex = '';
  };

  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      document.removeEventListener('mousemove', onMouseMove);
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      const el = refShip.current;
      if (!el || !el.isConnected) return;

      el.hidden = true;
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      el.hidden = false;

      const restoreShip = () => {
        if (el && el.isConnected) {
          resetShipStyles(el);
        }
      };

      if (!elemBelow) {
        restoreShip();
        return;
      }

      const droppableCell = elemBelow.closest('.droppable');
      if (!droppableCell) {
        restoreShip();
        return;
      }

      const rowAttr = droppableCell.getAttribute('data-row');
      const colAttr = droppableCell.getAttribute('data-col');
      if (!rowAttr || !colAttr) {
        restoreShip();
        return;
      }

      const row = parseInt(rowAttr, 10);
      const col = parseInt(colAttr, 10);
      const orientationToPlace = draggingOrientationRef.current;

      const success = onPlace(row, col, orientationToPlace);
      if (success) {
        if (el && el.isConnected) {
          resetShipStyles(el);
        }
      } else {
        restoreShip();
      }
    },
    [onMouseMove, onPlace]
  );

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    const el = refShip.current;
    if (!el) return;

    draggingOrientationRef.current = orientation;

    const rect = el.getBoundingClientRect();
    if (orientation === 'horizontal') {
      shiftY.current = rect.height / 2;
      shiftX.current = 20;
    } else {
      shiftY.current = 20;
      shiftX.current = rect.width / 2;
    }

    el.style.position = 'fixed';
    el.style.zIndex = '1000';
    el.style.left = `${rect.left}px`;
    el.style.top = `${rect.top}px`;

    moveAt(event.clientX, event.clientY);

    isDraggingRef.current = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', handleMouseUp, { once: true });
  };

  useEffect(() => {
    const el = refShip.current;
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (el && el.isConnected && (el.style.position === 'fixed' || el.style.position === '')) {
        resetShipStyles(el);
      }
    };
  }, [onMouseMove]);

  const toggleOrientation = () => {
    setOrientation(prev => (prev === 'horizontal' ? 'vertical' : 'horizontal'));
  };

  return (
    <div
      ref={refShip}
      className='doodle-ship cursor-grab'
      style={{
        width: orientation === 'horizontal' ? `${width}px` : '40px',
        height: orientation === 'horizontal' ? '40px' : `${width}px`,
      }}
      onMouseDown={handleMouseDown}
      onClick={toggleOrientation}
    />
  );
};

export default Ship;
