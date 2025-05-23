<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <ul class="[&>a]:underline flex flex-col gap-4">
    <RouterLink :to="{ name: 'explore' }">Explore</RouterLink>
    <RouterLink :to="{ name: 'matches' }">Matches</RouterLink>
    <RouterLink :to="{ name: 'messages-index' }">Messages</RouterLink>
  </ul>
</template>
