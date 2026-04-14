import { Outlet } from 'react-router';
import Header from '../components/header/header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='flex flex-1'>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
