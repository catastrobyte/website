<script setup>
import QuoteTemplate from "./QuoteTemplate.vue"
</script>
<template>
  <QuoteTemplate>
    <template #quote>
      <p>
        Once, there was a cat, a meow which gave rise to code as we know it.
      </p>
      <p>
        And then, came the next cat. A cat that will be our last.
      </p>
    </template>
    <template #source>
      Cat Porter Bridges
    </template>
  </QuoteTemplate>
</template>
