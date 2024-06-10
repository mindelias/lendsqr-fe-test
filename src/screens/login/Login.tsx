import React from 'react'
import './login.scss'
import { Button } from 'antd';

const Login = () => {

  const  handleLogin = () => {
    localStorage.setItem('lendsqr-auth', 'true');
    window.location.href = '/users';
    
  }
  
  return (
    <div>
      <h1>Login</h1>
      <Button onClick={handleLogin}>Login</Button>
      </div>
  )
}

export default Login