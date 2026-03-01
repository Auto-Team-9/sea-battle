import { createBrowserRouter } from 'react-router';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import RootLayout from './layouts/rootLayout';
import HomePage from './pages/home-page/homePage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
]);

export default router;
