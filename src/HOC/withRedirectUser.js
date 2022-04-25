import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../firebase/useAuth';

const withRedirectUser = (Child) => {
  const Component = ({ ...props }) => {
    const { useAuthContext } = useAuth();
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
      isAuthenticated && navigate('/events');
    }, [isAuthenticated]);

    return <Child {...props} />;
  };

  return Component;
};

export default withRedirectUser;
