import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ formType, closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formType === 'login') {
        const response = await AuthService.login(email, password);
        localStorage.setItem('token', response.token);
        navigate('/dashboard');
      } else {
        await AuthService.register(email, password);
        setError('');
        closeModal();
      }
    } catch (err) {
      setError('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit">{formType === 'login' ? 'Login' : 'Register'}</Button>
    </form>
  );
};

export default AuthForm;
