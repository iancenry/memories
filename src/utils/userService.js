import { apiClient } from './axiosclient';
import { v4 as uuidv4 } from 'uuid';


export default {
  getUser(id) {
    return apiClient.get(`/users/${id}`);
  },
};



// function getUser(id) {
//   return fetch(`http://localhost:8000/users/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
// }

