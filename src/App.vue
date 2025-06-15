<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
</script>

<template>
  <v-app>
    <v-app-bar height='150' color="primary">
      <template #prepend>
        <img alt="CatastroByte Logo" class="logo" src="@/assets/logo.png" style="max-height: 125px;">
      </template>
      <template #title>
        <h1 class="title">CatastroByte</h1>
        <h4 class="subtitle">When code is a cat-astrophy! 🏆</h4>
      </template>
    </v-app-bar>
    <v-main class="main">
      <RouterView />
    </v-main>
  </v-app>
</template>
