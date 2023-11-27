import axios from 'axios';

// single axios instance for reuse
const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export {apiClient}