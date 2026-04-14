import { useNavigate } from 'react-router';
import Button from '../../components/ui/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className='doodle flex w-full flex-col items-center justify-center !bg-transparent p-4'>
      <div className='doodle-border flex w-1/2 flex-col items-center justify-center gap-6 p-4 text-center'>
        <div>
          <h2 className='text-7xl font-bold'>404</h2>
          <p className='text-2xl'>Sorry :(</p>
        </div>

        <p className='text-2xl'>
          We couldn't find the page you were looking for. Visit our Home Page for a fresh start.
        </p>
        <Button variant='primary' onClick={handleGoBack} className={'!w-3xs'}>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
