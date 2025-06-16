<script setup>
import DeathStrandingQuote from "./quotes/DeathStrandingQuote.vue"
</script>
<template>
  <v-carousel height="200" :hide-delimiter-background="true" cycle :continuous="false" :hide-delimiters="true"
    :show-arrows="false">
    <v-carousel-item>
      <DeathStrandingQuote />
    </v-carousel-item>
  </v-carousel>
</template>
