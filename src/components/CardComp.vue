<template>
  <div class="h-auto shadow-md p-8 flex flex-col">
    <div class="flex flex-row items-center space-x-2 mb-3">
      <Avatar label="P" size="small" />
      <span class="font-light text-sm">@username</span>
    </div>

    <img :src="memory.image" alt="" class="max-h-44 rounded-md" />
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
const { memory, likes } = defineProps(['memory', 'likes']);
console.log(memory.title, likes);
</script>
