import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authServices = {
  registration: async userData => {
    const res = await api.post('/auth/registration', userData);
    return res.data;
  },
  verifyOtp: async (email, otp) => {
    const res = await api.post('/auth/verifyemail', { email, otp });
    return res.data;
  },
  loginUser: async userData => {
    const res = await api.post('/auth/login', userData);
    if (res.data.accessToken) {
      localStorage.setItem('token', res.data.accessToken);
      localStorage.setItem('loggedUser', JSON.stringify(res.data.user));
    }
    return res.data;
  },
};
// time : 50:44
