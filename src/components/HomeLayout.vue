<script setup>
import { ref } from 'vue';
const search = ref('');
</script>

<template>
  <main class="w-3/4 mx-auto">
    <nav class="flex flex-row justify-between gap-28">
      <RouterLink :to="{ name: 'home' }">
        <img src="../assets/logo.png" class="h-14 w-14" alt="" />
      </RouterLink>

      <span class="flex flex-row flex-1 p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          v-model="search"
          size="small"
          placeholder="Search"
          class="flex-1"
        />
      </span>

      <RouterLink :to="{ name: 'profile' }">
        <Avatar label="P" class="mr-2" size="large" />
      </RouterLink>
    </nav>

    <section class="mt-10">
      <RouterView />
    </section>
  </main>
</template>
