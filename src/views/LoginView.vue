<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useToast } from 'primevue/usetoast';
import userService from '../utils/userService';

const toast = useToast();
const router = useRouter();

const loginDetails = ref({
  email: '',
  password: '',
});

const resetValues = () => {
  loginDetails.value = {
    email: '',
    password: '',
  };
};

const handleLogin = () => {
  if (
    loginDetails.value.email.length < 3 ||
    loginDetails.value.password.length < 4
  ) {
    toast.add({
      severity: 'warn',
      summary: 'Wrong Details',
      detail: 'Input email and password',
      life: 3000,
    });
    resetValues();
    return;
  }

  // Login user
  userService
    .loginUser(loginDetails.value)
    .then((res) => {
      toast.add({
        severity: 'success',
        summary: 'Successful Login',
        detail: 'User logged in successfully',
        life: 3000,
      });
      //redirect to home with user id as param so as to set user data
      console.log(res)
      router.push({ name: 'home', params: { user: res.id } });
      resetValues();
    })
    .catch((err) => {
      console.log(err)
      toast.add({
        severity: 'error',
        summary: 'Unsuccessful Login',
        detail: 'Login failed. Confirm details.',
        life: 3000,
      });
    });
};
</script>

<template>
  <div class="p-4 shadow-2 w-full">
    <div class="text-center mb-5">
      <img src="../assets/logo.png" class="h-24 w-24" alt="" />

      <div class="text-900 text-2xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3"
        >Don't have an account?</span
      >
      <RouterLink
        :to="{ name: 'register' }"
        class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >Create today!</RouterLink
      >
    </div>

    <form @submit.prevent="handleLogin">
      <div>
        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText
          id="email"
          type="email"
          placeholder="Email address"
          class="w-full mb-3"
          v-model="loginDetails.email"
        />

        <label for="password1" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText
          id="password1"
          type="password"
          placeholder="Password"
          class="w-full mb-3"
          v-model="loginDetails.password"
        />

        <Button
          type="submit"
          label="Sign In"
          icon="pi pi-user"
          class="w-full"
        ></Button>
      </div>
    </form>
    <Toast />
  </div>
</template>
