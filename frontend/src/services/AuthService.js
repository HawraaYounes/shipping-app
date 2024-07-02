import axios from 'axios';

const API_URL = 'http://localhost:5000';

const AuthService = {
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('token'));
  },
};

export default AuthService;
