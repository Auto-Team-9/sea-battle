import { useNavigate } from 'react-router';
import Button from '../../components/ui/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className='flex w-full flex-col items-center justify-center p-4'>
      <div className='doodle-border flex w-1/2 flex-col items-center justify-center gap-5 p-4 text-center text-5xl'>
        <h2 className='text-7xl font-bold'>404</h2>
        <p className='mt-4 text-2xl'>We couldn't find the page you were looking for.</p>
        <Button onClick={handleGoBack} className={'!w-3xs'}>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
