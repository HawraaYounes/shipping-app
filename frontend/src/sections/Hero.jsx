import React, { useState } from 'react';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Button from '../components/Button';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUsername('');
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.token); // Storing the token
      navigate('/dashboard');
      handleCloseModal();
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login Error:', error);
    }
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.register(username, email, password);
      localStorage.setItem('token', response.token); // Storing the token
      navigate('/dashboard');
      handleCloseModal();
    } catch (error) {
      setError('Registration Error');
      console.error('Register Error:', error);
    }
  };

  const renderForm = () => (
    <form onSubmit={modalContent === 'login' ? handleLogin : handleRegister}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {modalContent === 'register' && (
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      )}
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit">{modalContent === 'login' ? 'Login' : 'Register'}</Button>
    </form>
  );

  return (
    <div>
      <h1>Welcome to Our Shipping Platform</h1>
      <Button onClick={() => handleOpenModal('login')}>Login</Button>
      <Button onClick={() => handleOpenModal('register')}>Register</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent === 'login' ? 'Login' : 'Register'}
        actions={<Button onClick={handleCloseModal}>Close</Button>}
      >
        {renderForm()}
      </Modal>
    </div>
  );
};

export default Hero;
