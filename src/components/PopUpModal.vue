<!--  TODO https://primevue.org/fileupload/ - continue -->
<script setup>
import { ref } from 'vue';
import FileUpload from 'primevue/fileupload';

const title = ref('');
</script>

<template>
  <form>
    <div class="card flex justify-content-center">
      <span class="p-float-label">
        <InputText id="username" v-model="title" />
        <label for="username">Username</label>
      </span>
    </div>
  </form>
</template>
