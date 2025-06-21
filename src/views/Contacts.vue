<script setup>
import Github from "../components/contacts/Github.vue"
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto">
        <h2>Contacts</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-list bg-color="transparent">
          <v-list-item>
            <Github />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
