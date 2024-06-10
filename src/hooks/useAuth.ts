import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = localStorage.getItem('lendsqr-auth');
    if (auth) {
        navigate('/users');
      } else {
        navigate('/login');
      }
  }, [navigate]);
};

export default useAuth;
