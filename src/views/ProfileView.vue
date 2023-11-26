<!-- Edit to show according to user -->
<script setup>
import { storeToRefs } from 'pinia';
import Card from '../components/CardComp.vue';
import { useMemoryStore } from '../stores/memory';
import { ref } from 'vue';

import Dialog from 'primevue/dialog';

const visible = ref(false);

const memoryStore = useMemoryStore();

const { memories } = storeToRefs(memoryStore);
memoryStore.getMemories();
</script>

<template>
  <div class="float-right">
    <i
      class="pi pi-plus-circle text-teal-950 cursor-pointer"
      @click="visible = true"
    ></i>

    <Dialog
      v-model:visible="visible"
      header="Header"
      :style="{ width: '40rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
    </Dialog>
  </div>
  <section class="grid grid-cols-3 gap-10">
    <Card v-for="memory in memories" :key="memory.id" :memory="memory" />
  </section>
</template>
