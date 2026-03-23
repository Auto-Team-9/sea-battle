import { Navigate } from 'react-router';
import { useAuth } from '../firebase/useAuth';
import type { ReactNode } from 'react';
import Loading from '../components/ui/loading';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to='/auth/login' replace />;
  }

  return children;
};

export default ProtectedRoute;
