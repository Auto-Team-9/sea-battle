const CustomError = ({ message }: { message: string }) => {
  return (
    <div className='doodle-border m-auto w-1/2 p-4 text-center text-5xl text-red-500'>
      <p>Ошибка: {message}</p>
    </div>
  );
};

export default CustomError;
