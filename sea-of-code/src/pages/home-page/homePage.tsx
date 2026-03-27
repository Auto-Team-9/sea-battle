import Loading from '../../components/ui/loading';
import { useAuth } from '../../firebase/useAuth';

const HomePage = () => {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return <section className='flex-1'>Home Page</section>;
};

export default HomePage;
