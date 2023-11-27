<script setup>
import { ref } from 'vue';
import memoryService from '../utils/memoryService'

import Textarea from 'primevue/textarea';

const formData = ref({
  title: '',
  tags: '',
  link: [],
  description: ''
})



const handleSubmit = () => {
  memoryService.postMemory(formData.value)
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="card flex flex-col justify-content-center space-y-10">
      <div class="p-float-label  mt-5">
        <InputText id="username" v-model="formData.title" :style="{width: '100%'}"  />
        <label for="username">Title</label>
      </div>

      <div class="p-float-label">
        <InputText id="tags" v-model="formData.tags" :style="{width: '100%'}" />
        <label for="tags">Tags</label>
      </div>

      <div class="p-float-label ">
        <InputText id="image" v-model="formData.link"  :style="{width: '100%'}"  />
        <label for="image">Image</label>
      </div>
    </div>

    <div class="p-float-label  card flex justify-content-center mt-10">
      <Textarea id="description" v-model="formData.description" rows="5" cols="22" :style="{width: '100%'}" v-mode="description"  />
      <label for="description">Description</label>
    </div>

    <Button type="submit" label="Post" icon="pi pi-upload"  outlined class="mt-5" />

  </form>
</template>
