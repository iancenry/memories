import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('users', () => {
  const users = ref([
    {
      _id: '60a4b9c9f0c0f2a3a8c1d7e8',
      username: 'alice',
      email: 'alice@example.com',
      password: 'a1b2c3d4', // hashed password
    },
  ]);

  return { users };
});
