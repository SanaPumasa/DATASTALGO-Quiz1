import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const getApiRoutes = async () => {
  const response = await api.get('/');
  return response.data;
};

export const getDestinations = async () => {
  const response = await api.get('/destinations/');
  return response.data;
};

export const getDestinationById = async (id) => {
  const response = await api.get(`/destinations/${id}/`);
  return response.data;
};

export const getPackages = async () => {
  const response = await api.get('/packages/');
  return response.data;
};

export const getPackageById = async (id) => {
  const response = await api.get(`/packages/${id}/`);
  return response.data;
};

export default api;
