import { Navigate } from 'react-router';
import { useAuth } from './useAuth';
import type { ReactNode } from 'react';
import Loading from '../components/ui/loading';

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default PublicRoute;
