import React, { useState } from 'react';

interface BoxPositionProps {
  width: number
  height: number
  x: number
  y: number
  getPosition: ({ x, y }: { x: number, y: number }) => void
  onFinishedSelection: () => void
}

const DraggableElement = ({ getPosition, onFinishedSelection, x, y, width, height }: BoxPositionProps) => {
  const [position, setPosition] = useState({ x: x, y: y });

  const handleDragStart = (e: React.MouseEvent) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleDragMove = (e: MouseEvent) => {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;

      setPosition({ x: newX, y: newY });
    };

    const handleDragEnd = (e: MouseEvent) => {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);

      setPosition({ x: newX, y: newY });
      getPosition({
        x: newX,
        y: newY
      })
    };

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  return (
    <>
      <div
        className="draggable-element absolute cursor-grab p-4 border-2 border-gray-300 bg-gray-100"
        style={{ left: position.x, top: position.y, width, height }}
        onMouseDown={handleDragStart}
      >
        <button className='py-1 px-2 rounded-lg absolute right-0 -top-9 flex items-center bg-zinc-400' onClick={onFinishedSelection}>
          ✅
        </button>
      </div>
    </>
  );
};

export default DraggableElement;
