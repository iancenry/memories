import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMemoryStore = defineStore('memory', () => {
  const memories = ref([]);

  async function getMemories() {
    if (memories.value?.length < 1) {
      try {
        const res = await fetch('http://localhost:8000/memories');
        const data = await res.json();
        memories.value = data;
      } catch (error) {
        console.error(error); // or handle it differently
      }
    }
  }

  return { memories, getMemories };
});
