// src/components/LoginForm.js
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import AuthService from '../services/AuthService';

const LoginForm = ({ type, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only used for registration
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (type === 'login') {
        response = await AuthService.login(email, password);
      } else {
        response = await AuthService.register(name, email, password);
      }
      localStorage.setItem('token', response.token);
      onClose();
      window.location.href = '/dashboard'; // Redirect to dashboard
    } catch (error) {
      setError('Invalid credentials or user already exists');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {type === 'register' && (
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
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
        <Button type="submit">{type === 'login' ? 'Login' : 'Register'}</Button>
      </form>
    </div>
  );
};

export default LoginForm;
