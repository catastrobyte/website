<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div>
    <AppHeader />
    <main class="h-screen flex-col p-4">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
