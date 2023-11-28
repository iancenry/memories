<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { useMemoryStore } from '../stores/memory';

import Card from '../components/CardComp.vue';
// const Card = defineAsyncComponent(() => import('../components/CardComp.vue'));

const memoryStore = useMemoryStore();

const { memories } = storeToRefs(memoryStore);
onMounted(() => {
  memoryStore.getMemories();
});
</script>

<template>
  <section class="grid grid-cols-3 gap-10">
    <Suspense>
      <template #default>
        <Card v-for="memory in memories" :key="memory.id" :memory="memory" />
      </template>

      <template #fallback> Loading... </template>
    </Suspense>
  </section>
</template>
