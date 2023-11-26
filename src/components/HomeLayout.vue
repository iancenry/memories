<script setup>
import { ref } from 'vue';
const search = ref('');
</script>

<template>
  <main class="w-3/4 mx-auto">
    <nav class="flex flex-row justify-between gap-28">
      <img src="../assets/logo.png" class="h-14 w-14" alt="" />

      <span class="flex flex-row flex-1 p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          v-model="search"
          size="small"
          placeholder="Search"
          class="flex-1"
        />
      </span>

      <Avatar label="P" class="mr-2" size="large" />
    </nav>

    <section class="mt-10">
      <RouterView />
    </section>
  </main>
</template>
