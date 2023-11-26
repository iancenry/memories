<script setup>
import { storeToRefs } from 'pinia';
import Card from '../components/CardComp.vue';
import { useMemoryStore } from '../stores/memory';

const memoryStore = useMemoryStore();

const { memories } = storeToRefs(memoryStore);
memoryStore.getMemories();
</script>

<template>
  <section class="grid grid-cols-3 gap-10">
    <Card v-for="memory in memories" :key="memory._id" :memory="memory" />
  </section>
</template>
