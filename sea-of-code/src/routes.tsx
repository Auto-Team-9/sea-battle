import { createBrowserRouter } from 'react-router';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import RootLayout from './layouts/rootLayout';
import HomePage from './pages/home-page/homePage';
import Profile from './pages/profile/profile';
import ProtectedRoute from './firebase/ProtectedRoute';
import PublicRoute from './firebase/PublicRoute';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'profile',
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: '/auth',
      children: [
        {
          path: 'login',
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: 'register',
          element: (
            <PublicRoute>
              <Register />
            </PublicRoute>
          ),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
