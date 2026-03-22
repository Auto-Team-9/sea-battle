import { createBrowserRouter } from 'react-router';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import RootLayout from './layouts/rootLayout';
import HomePage from './pages/home-page/homePage';
import Profile from './pages/profile/profile';
import Game from './pages/game/game';

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
        {
          path: 'game',
          Component: Game,
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
  {
    path: 'Auto-Team-9-Widget-Trainer/game',
    Component: Game,
  },
]);

export default router;
