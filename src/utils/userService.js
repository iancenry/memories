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
  async loginUser(loginData) {
    // transfer user validation to backend
    return apiClient.get(`/users`).then((res) => {
      const users = res.data;
      const foundUser = users?.filter((user) => loginData.email === user.email);
  
      if (foundUser[0].password === loginData.password) {
        return foundUser;
      } else {
        throw Error('password error') 
      }
    });
  }
  
};
