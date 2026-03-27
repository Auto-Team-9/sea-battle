import { useState } from 'react';

const QuestionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    isOpen && (
      <div className='absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50'>
        <div className='relative flex h-48 w-80 flex-col items-center justify-center gap-4 rounded-lg bg-gray-600 p-4'>
          <h2 className='text-xl font-bold text-[--color-text]'>Вы уверены?</h2>
          <div className='absolute top-2 right-4 cursor-pointer' onClick={() => setIsOpen(false)}>
            X
          </div>
          <p>Вы робот? Это действие нельзя будет отменить.</p>
          <div className='flex gap-4'>
            <button className='rounded bg-green-500 px-4 py-2'>Да</button>
            <button className='rounded bg-red-500 px-4 py-2'>Нет</button>
            <button className='rounded bg-gray-400 px-4 py-2'>Незнаю</button>
          </div>
        </div>
      </div>
    )
  );
};

export default QuestionModal;
