import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Backend URL
});

API.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
