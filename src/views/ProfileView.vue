<!--TODO Edit to show according to user -->
<script setup>
import { storeToRefs } from 'pinia';
import Card from '../components/CardComp.vue';
import { useMemoryStore } from '../stores/memory';
import { ref } from 'vue';

import Dialog from 'primevue/dialog';
import PopUpModal from '../components/PopUpModal.vue';

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
      header="Post Memory"
      :style="{ width: '30rem'}"
    >
      <PopUpModal class="" />
    </Dialog>
  </div>
  <section class="grid grid-cols-3 gap-10">
    <Card v-for="memory in memories" :key="memory.id" :memory="memory" />
  </section>
</template>
