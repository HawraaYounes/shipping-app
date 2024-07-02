import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import Button from './Button';
import Input from './Input';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login Error:', error);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
