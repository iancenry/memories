import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('users', () => {
  const users = ref([]);
  const user = ref();

  async function getUser(id) {
    if (users.value?.length < 1) {
      try {
        const res = await fetch(`http://localhost:8000/users/${id}`);
        const data = await res.json();
        user.value = data;
      } catch (error) {
        console.error(error);
      }
    }
  }

  return { user, users, getUser };
});
