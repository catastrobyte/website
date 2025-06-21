<script setup>
import { ref, onBeforeMount } from "vue"
import githubLogo from "../../assets/github_logo.png"

const repositories = ref(null)

const getRepositories = () => {
  fetch("https://api.github.com/users/catastrobyte/repos")
    .then((response) => response.json())
    .then((response) => repositories.value = response)
}

onBeforeMount(() => {
  getRepositories()
})
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2 class="d-flex items-center ga-1">
          <v-icon icon="mdi-github" color="white" />
          Github Repos
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-list bg-color="transparent">
        <v-list-item v-for="(repo, index) in repositories" :key="index">
          <v-card color="secondary" :href="repo.html_url" target="_blank" min-width="320" max-width="320" rounded="lg">
            <v-card-title>
              {{ repo.name }}
            </v-card-title>
            <v-card-item>
              <v-container fluid>
                <v-row justify="end" align="center" align-items="center" no-gutters>
                  <v-col cols="auto">
                    {{ repo.stargazers_count }}
                    <v-icon icon="mdi-star" size="x-large" color="deep-purple-lighten-3" />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-item>
          </v-card>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>
