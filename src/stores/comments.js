import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('comments', () => {
  const comments = ref([
    {
      _id: '60a4ba3af0c0f2a3a8c1d7ec',
      user: '60a4b9d9f0c0f2a3a8c1d7ea', // reference to User
      memory: '60a4ba0af0c0f2a3a8c1d7e9', // reference to Memory
      text: "Wow, that sounds amazing! I've always wanted to go to Paris.",
      createdAt: '2023-05-18T10:46:10.000Z',
      updatedAt: '2023-05-18T10:46:10.000Z',
    },
  ]);

  return { comments };
});
