import { Outlet } from 'react-router';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
