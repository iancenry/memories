<!-- YourComponent.vue -->
<template>
  <div class="h-auto shadow-md p-8 flex flex-col">
    <div class="flex flex-row items-center space-x-2 mb-3">
      <Avatar :label="user?.username[0].toUpperCase()" size="small" />
      <span class="font-light text-sm">@{{ user?.username }}</span>
    </div>

    <img :src="memory.image" alt="" class="max-h-44 rounded-md" />

    <h4>{{ memory.title }}</h4>
    <p class="h-20 text-justify">{{ memory.description }}</p>

    <div class="mt-7 flex justify-between">
      <span class="flex items-center gap-1">
        <i
          class="pi 'pi-heart' text-red-400 cursor-pointer"
          :class="{ 'pi-heart-fill': true }"
        ></i>
        <small>{{ likes }}</small>
      </span>

      <i class="pi pi-send text-zinc-800 cursor-pointer"></i>
      <i class="pi pi-comment text-zinc-600 cursor-pointer"></i>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { getUser } from '../utils/service';

const { memory } = defineProps(['memory']);
const user = ref();

onMounted(async () => {
  // Wait for the getUser promise to resolve
  user.value = await getUser(memory.user);
});

const likes = computed(() => {
  if (memory) {
    return memory.likes.length;
  } else {
    return 0;
  }
});
</script>
