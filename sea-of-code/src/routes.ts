import { createBrowserRouter } from 'react-router';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import RootLayout from './layouts/rootLayout';
import HomePage from './pages/home-page/homePage';
import Profile from './pages/profile/profile';

const router = createBrowserRouter([
  {
    path: '/Auto-Team-9-Widget-Trainer',
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
  {
    path: 'Auto-Team-9-Widget-Trainer/profile',
    Component: Profile,
  },
]);

export default router;
