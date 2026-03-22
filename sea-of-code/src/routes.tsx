import { createBrowserRouter } from 'react-router';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import RootLayout from './layouts/rootLayout';
import HomePage from './pages/home-page/homePage';
import Profile from './pages/profile/profile';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: HomePage,
        },
        {
          path: 'profile',
          Component: Profile,
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
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
