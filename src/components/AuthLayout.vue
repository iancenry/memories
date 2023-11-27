<template>
  <div class="h-screen overflow-hidden">
    <div class="flex flex-row">
      <div
        class="h-screen bg-slate-800 w-1/2 rounded-md flex flex-col justify-center items-center"
      >
        <h3 class="text-slate-600">Reminisse</h3>
        <p class="text-slate-300">The World of Memories</p>
      </div>
      <div class="my-10 ml-24">
        <RouterView />
      </div>
    </div>
  </div>
</template>
