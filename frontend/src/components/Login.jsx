import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import Button from './Button'; // Import the Button component

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Navigate to dashboard after successful login
    } catch (error) {
      setError('Invalid email or password'); // Set a generic error message for invalid credentials
      console.error('Login Error:', error); // Log detailed error for debugging
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
