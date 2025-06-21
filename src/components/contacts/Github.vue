<script setup>
import { ref, onBeforeMount } from "vue"
import githubLogo from "../../assets/github_logo.png"

const profile = ref(null)

const getProfile = () => {
  fetch("https://api.github.com/users/catastrobyte")
    .then((response) => response.json())
    .then((response) => profile.value = response)
}

onBeforeMount(() => {
  getProfile()
})
</script>
<template>
  <v-card color="secondary" min-width="320" max-width="320" href="https://github.com/catastrobyte" target="_blank"
    :loading="profile == null">
    <template #image>
      <v-img :src="githubLogo" />
    </template>
    <v-card-title>
      Github
    </v-card-title>
    <v-card-subtitle>
      Catastrobyte
    </v-card-subtitle>
    <v-card-item v-if="profile">
      <v-container fluid class="pa-1">
        <v-row justify="end" align="center" align-items="center" no-gutters>
          <v-col cols="auto">
            {{ profile.followers }}
            <v-icon icon="mdi-account" color="deep-purple-lighten-4" size="x-large" />
          </v-col>
          <v-col cols="auto">
            {{ profile.public_repos }}
            <v-icon icon="mdi-source-repository" color="deep-purple-lighten-4" size="x-large" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-item>
  </v-card>
</template>
