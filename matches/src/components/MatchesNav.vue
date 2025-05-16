<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex items-center justify-around gap-2 text-2xl font-semibold py-2">
    <RouterLink :to="{ name: 'matches' }" activeClass="text-brandpink-500">Matches</RouterLink>
    <RouterLink :to="{ name: 'messages' }" activeClass="text-brandpink-500">Messages</RouterLink>
  </nav>
</template>
