import { useCallback, useRef, type JSX, useEffect } from 'react';
import type { ShipType } from '../../../../../types/types';

const Ship = ({ width }: ShipType): JSX.Element => {
  const refShip = useRef<HTMLDivElement>(null);
  const shiftX = useRef(0);
  const shiftY = useRef(0);

  const moveAt = (clientX: number, clientY: number) => {
    const el = refShip.current;
    if (!el) return;
    el.style.left = `${clientX - shiftX.current}px`;
    el.style.top = `${clientY - shiftY.current}px`;
  };

  const onMouseMove = useCallback((event: MouseEvent) => {
    moveAt(event.clientX, event.clientY);
  }, []);

  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      document.removeEventListener('mousemove', onMouseMove);

      const el = refShip.current;
      if (!el) return;

      el.hidden = true;
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      el.hidden = false;

      if (!elemBelow) return;

      const droppableBelow = elemBelow.closest('.droppable');

      if (droppableBelow) {
        droppableBelow.append(el);
        el.style.position = 'relative';
        el.style.left = '0';
        el.style.top = '0';
      }
    },
    [onMouseMove]
  );

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    const el = refShip.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    shiftX.current = 20;
    shiftY.current = rect.height / 2;

    if (!document.body.contains(el)) {
      document.body.appendChild(el);
    }

    el.style.position = 'fixed';
    el.style.zIndex = '1000';
    moveAt(event.clientX, event.clientY);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', handleMouseUp, { once: true });
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <div
      ref={refShip}
      className='doodle-ship h-10 cursor-grab'
      style={{ width: `${width}px` }}
      onMouseDown={handleMouseDown}
    />
  );
};

export default Ship;
