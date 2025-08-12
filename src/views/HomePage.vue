<script setup>
import CatAvatar from '@/components/CatAvatar.vue'
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div class="grid grid-cols-2 gap-2">
      <div
        class="w-[290px] col-span-2 sm:col-span-1 bg-ctp-lavender-800 border-2 border-solid border-ctp-lavender-800 rounded-xl p-2 flex flex-row justify-center"
      >
        <div class="flex flex-col items-center">
          <div class="rounded-full">
            <CatAvatar />
          </div>
          <div class="flex flex-col items-center border-black border-b-2">
            <div class="text-2xl text-center text-black font-bold">Andrea Doghetti</div>
            <div class="text-lg text-center text-black">Software Developer</div>
          </div>
          <div class="flex flex-row justify-around gap-1 mt-3 p-2">
            <div class="flex flex-col">
              <a href="https://github.com/catastrobyte" target="_blank">
                <div class="icon-[mdi--github] scale-[3]"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 sm:col-span-1 w-[290px] bg-ctp-lavender-800 border-2 border-solid border-ctp-lavender-800 rounded-xl p-2 flex flex-row justify-center"
      >
        <div class="flex flex-col items-center">
          <div class="flex flex-col items-center border-black border-b-2 w-[280px]">
            <h2 class="text-black text-2xl text-center font-bold">About me</h2>
          </div>
          <div class="flex flex-row justify-start p-2">
            Hi! I am Andrea, passionate about programming, technology and videogames.
          </div>
          <div class="flex flex-row justify-start p-2"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col sm:flex-row justify-center items-center gap-2"></div>
</template>
