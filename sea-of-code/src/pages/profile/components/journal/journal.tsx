const Journal = () => {
  return (
    <div className='flex flex-col w-full doodle-border'>
      <div className='flex items-center'>
        <img src='./profile-images/ships_log.png' alt='ships_log' className='w-28 h-20 bg-cover' />
        <h1 className='sm:text-4xl text-xl py-4'>Судовой журнал</h1>
      </div>
      <div className='flex justify-around flex-wrap sm:gap-11 gap-2 sm:p-4 doodle-border'>
        <div className='flex flex-col md:gap-2 items-center sm:text-2xl text-sm'>
          <img
            src='./profile-images/victories.png'
            alt='victories'
            className='sm:w-28 sm:h-24 w-20 h-16'
          />
          <p className=''>Побед</p>
          <p>0</p>
        </div>
        <div className='flex flex-col md:gap-2 items-center sm:text-2xl text-sm'>
          <img
            src='./profile-images/defeats.png'
            alt='defeats'
            className='sm:w-28 sm:h-24  w-20 h-16'
          />
          <p>Поражений</p>
          <p>0</p>
        </div>
        <div className='flex flex-col md:gap-2 items-center sm:text-2xl text-sm'>
          <img
            src='./profile-images/battles.png'
            alt='battles'
            className='sm:w-28 sm:h-24  w-20 h-16'
          />
          <p>Боёв</p>
          <p>0</p>
        </div>
        <div className='flex flex-col md:gap-2 items-center sm:text-2xl text-sm'>
          <img
            src='./profile-images/accuracy.png'
            alt='accuracy'
            className='sm:w-28 sm:h-24  w-20 h-16'
          />
          <p>Попаданий</p>
          <p>0</p>
        </div>
        <div className='flex flex-col md:gap-2 items-center sm:text-2xl text-sm'>
          <img
            src='./profile-images/miles.png'
            alt='time at sea'
            className='sm:w-28 sm:h-24  w-20 h-16'
          />
          <p>Миль в море</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
