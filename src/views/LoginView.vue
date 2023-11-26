<script setup></script>

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

    <div>
      <label for="email" class="block text-900 font-medium mb-2">Email</label>
      <InputText
        id="email"
        type="email"
        placeholder="Email address"
        class="w-full mb-3"
      />

      <label for="password1" class="block text-900 font-medium mb-2"
        >Password</label
      >
      <InputText
        id="password1"
        type="password"
        placeholder="Password"
        class="w-full mb-3"
      />

      <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
  </div>
</template>
