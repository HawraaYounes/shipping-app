import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
