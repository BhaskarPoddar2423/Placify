import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  signup: (data) => api.post('/signup', data),
  signin: (data) => api.post('/signin', data),
  getMe: () => api.get('/me'),
  forgotPassword: (data) => api.post('/forgot-password', data),
  resetPassword: (token, data) => api.post(`/reset-password/${token}`, data),
  googleAuth: () => window.location.href = `${API_BASE_URL}/auth/google`,
};

export default api;