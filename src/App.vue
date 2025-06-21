<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

const route = useRoute()

const pickBottomNavigationButtonColor = (routeName) => {
  if (route.name === routeName) return "deep-purple-lighten-3"
  else return "primary"
}

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
    <v-bottom-navigation rounded="pill" absolute bg-color="secondary" style="width: 90vw; height: 6vh; margin: 0 auto; left: calc(10vw /
      2); bottom: 10px;" grow>
      <v-btn :to="{ name: 'projects' }">
        <v-icon icon="mdi-bug" size="32" :color="pickBottomNavigationButtonColor('projects')" />
      </v-btn>
      <v-btn :to="{ name: 'home' }">
        <v-icon icon="mdi-cat" size="32" :color="pickBottomNavigationButtonColor('home')" />
      </v-btn>
      <v-btn :to="{ name: 'contacts' }">
        <v-icon icon="mdi-space-station" size="32" :color="pickBottomNavigationButtonColor('contacts')" />
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
