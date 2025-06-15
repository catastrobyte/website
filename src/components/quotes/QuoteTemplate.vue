<script setup>
import catAvatar from "@/assets/cat_avatar.png"
</script>
<template>
  <v-card rounded="lg" class="quote-card" color="secondary" height="auto" width="auto">
    <template #prepend>
      <v-avatar :image="catAvatar" size="120"></v-avatar>
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
