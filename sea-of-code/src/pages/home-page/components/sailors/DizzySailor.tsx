import dizzyIcon from '../../../assets/dizzy.svg';

export function DizzySailor() {
  return (
    <img
      className='h-fit w-fit animate-[spin_3s_ease-in-out_infinite] !bg-transparent'
      src={dizzyIcon}
      alt='Thinking sailor icon'
    />
  );
}
