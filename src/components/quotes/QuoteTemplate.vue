<script setup>
import catPaw from "@/assets/cat_paw.png"
</script>
<template>
  <v-card rounded="lg" class="quote-card" color="secondary" height="auto" width="auto">
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
        <p>
          - <slot name="source"></slot>
        </p>
      </i>
    </template>
  </v-card>
</template>
