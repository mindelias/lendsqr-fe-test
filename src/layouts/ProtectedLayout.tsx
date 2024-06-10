import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from './AppWrapper';


function ProtectedLayout({ children }: LayoutProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('lendsqr-auth');
    if (!auth) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);
  return (
    <AppWrapper>
      {children}
    </AppWrapper>
  );
}

export default ProtectedLayout

 
 

 