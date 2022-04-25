import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../firebase/useAuth';

const withProtected = (Child) => {
  const Component = ({ ...props }) => {
    const { useAuthContext } = useAuth();
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === '/events') {
        !isAuthenticated && navigate('/login');
      }
    }, [location, isAuthenticated]);

    return <Child {...props} />;
  };

  return Component;
};

export default withProtected;
