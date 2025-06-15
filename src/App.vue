<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
</script>

<template>
  <v-layout class="" height="100vh">
    <v-app-bar height='130'>
      <Header />
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <RouterView />
    </v-main>
  </v-layout>
</template>
