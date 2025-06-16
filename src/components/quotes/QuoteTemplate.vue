<script setup>
import catPaw from "@/assets/cat_paw.png"

const { href } = defineProps(['href'])
</script>
<template>
  <v-card rounded="lg" class="quote-card" color="secondary" height="auto" width="auto" :href="href">
    <template #prepend>
      <v-avatar :image="catPaw" size="100"></v-avatar>
    </template>
    <template #title>
      <i>
        <span style="word-break: break-word; white-space: normal;">
          <slot name="quote"></slot>
        </span>
      </i>
    </template>
    <template #subtitle>
      <i>
        <span style="word-break: break-word; white-space: normal;">
          - <slot name="source"></slot>
        </span>
      </i>
    </template>
  </v-card>
</template>
