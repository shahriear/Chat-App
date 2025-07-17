import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

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

export const chatServices = {
  listConversation: async () => {
    const res = await api.get('/chat/conversationList');
    return res.data;
  },
};

// time : 50:44
