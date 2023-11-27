import { apiClient } from './axiosclient';
import { v4 as uuidv4 } from 'uuid';


export default {
  postMemory(memory) {
    return apiClient.post(`/memories/`, {
      id: uuidv4(),
      ...memory,
    });
  },
};
