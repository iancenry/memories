<script setup></script>

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

    <div>
      <label for="email" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="email" type="email" class="w-full mb-3" />

      <label for="password" class="block text-900 font-medium mb-2"
        >Password</label
      >
      <InputText id="password" type="password" class="w-full mb-3" />

      <label for="confirmPassword" class="block text-900 font-medium mb-2"
        >Confirm Password</label
      >
      <InputText id="confirmPassword" type="password" class="w-full mb-3" />

      <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
  </div>
</template>
