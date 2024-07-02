import axios from 'axios';

const API_URL = 'http://localhost:5000/auth/';

const AuthService = {
  login: async (email, password) => {
    const response = await axios.post(API_URL + 'login', { email, password });
    console.log("ressss",response)
    return response;
  },
};

export default AuthService;
