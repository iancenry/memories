import { apiClient } from './axiosclient';
import { v4 as uuidv4 } from 'uuid';

//TODO hash password
export default {
  getUser(id) {
    return apiClient.get(`/users/${id}`);
  },
  createUser(userData) {
    return apiClient.post(`/users`, {
      id: uuidv4(),
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });
  },
};
