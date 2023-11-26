import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useMemoryStore = defineStore('memory', () => {
  const memories = ref([
    {
      _id: '60a4ba0af0c0f2a3a8c1d7e9',
      user: '60a4b9c9f0c0f2a3a8c1d7e8', // reference to User
      title: 'My first trip to Paris',
      description:
        'I visited Paris last year with my family and had a wonderful time. We saw the Eiffel Tower, the Louvre, and the Notre Dame. It was a memorable experience.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8VfFQ2sjVlZzS_iouWABcSt9T9y6gCezY82NyXMKTQ&s', // URL of the image
      likes: ['60a4b9d9f0c0f2a3a8c1d7ea', '60a4b9e9f0c0f2a3a8c1d7eb'], // array of User references who liked the memory
      createdAt: '2023-05-18T10:45:30.000Z',
      updatedAt: '2023-05-18T10:45:30.000Z',
      tags: [
        // added this field
        { _id: 1, label: 'Beach' },
        { _id: 2, label: 'Vacation' },
      ],
    },
    {
      _id: '60a4ba0af0c0f2a3a8c1d7e9',
      user: '60a4b9c9f0c0f2a3a8c1d7e8', // reference to User
      title: 'My first trip to Paris',
      description:
        'I visited Paris last year with my family and had a wonderful time. We saw the Eiffel Tower, the Louvre, and the Notre Dame. It was a memorable experience.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8VfFQ2sjVlZzS_iouWABcSt9T9y6gCezY82NyXMKTQ&s', // URL of the image
      likes: ['60a4b9d9f0c0f2a3a8c1d7ea', '60a4b9e9f0c0f2a3a8c1d7eb'], // array of User references who liked the memory
      createdAt: '2023-05-18T10:45:30.000Z',
      updatedAt: '2023-05-18T10:45:30.000Z',
      tags: [
        // added this field
        { _id: 1, label: 'Beach' },
        { _id: 2, label: 'Vacation' },
      ],
    },
  ]);

  const likeCount = computed(() => memories.value[0].tags.length);

  return { memories, likeCount };
});
