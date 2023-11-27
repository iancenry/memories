<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useToast } from 'primevue/usetoast';
import userService from '../utils/userService';

const toast = useToast();
const router = useRouter();

const userData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const resetValues = () => {
  userData.value = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
};

const handleRegister = () => {
  if (
    userData.value.username.length < 3 ||
    userData.value.email.length < 3 ||
    userData.value.password.length < 4
  ) {
    toast.add({
      severity: 'warn',
      summary: 'Wrong Details',
      detail: 'Please enter the correct details',
      life: 3000,
    });
    resetValues();
    return;
  } else if (userData.value.password !== userData.value.confirmPassword) {
    toast.add({
      severity: 'warn',
      summary: 'Password error',
      detail: 'Passwords do not match',
      life: 3000,
    });
    resetValues();
    return;
  }

  // Register user
  userService
    .createUser(userData.value)
    .then((res) => {
      toast.add({
        severity: 'success',
        summary: 'Successful Registration',
        detail: 'User created successfully',
        life: 3000,
      });
      //redirect to home with user id as param so as to set user data
      router.push({ name: 'home', params: { user: res.data.id } });
      resetValues();
    })
    .catch(() => {
      toast.add({
        severity: 'error',
        summary: 'Unsuccessful Registration',
        detail: 'Registration failed. Contact owner.',
        life: 3000,
      });
    });
};
</script>

<template>
  <div class="p-4 shadow-2 w-full">
    <div class="text-center mb-5">
      <img src="../assets/logo.png" class="h-24 w-24" alt="" />

      <div class="text-900 text-2xl font-medium mb-3">Welcome</div>
      <span class="text-600 font-medium line-height-3"
        >Already have an account?</span
      >
      <RouterLink
        :to="{ name: 'login' }"
        class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >Login</RouterLink
      >
    </div>

    <form @submit.prevent="handleRegister">
      <label for="username" class="block text-900 font-medium mb-2"
        >Username</label
      >
      <InputText
        id="username"
        type="text"
        class="w-full mb-3"
        v-model="userData.username"
      />

      <label for="email" class="block text-900 font-medium mb-2">Email</label>
      <InputText
        id="email"
        type="email"
        class="w-full mb-3"
        v-model="userData.email"
      />

      <label for="password" class="block text-900 font-medium mb-2"
        >Password</label
      >
      <InputText
        id="password"
        type="password"
        class="w-full mb-3"
        v-model="userData.password"
      />

      <label for="confirmPassword" class="block text-900 font-medium mb-2"
        >Confirm Password</label
      >
      <InputText
        id="confirmPassword"
        type="password"
        class="w-full mb-3"
        v-model="userData.confirmPassword"
      />

      <Button
        type="submit"
        label="Sign In"
        icon="pi pi-user"
        class="w-full"
      ></Button>
    </form>
    <Toast />
  </div>
</template>
,
