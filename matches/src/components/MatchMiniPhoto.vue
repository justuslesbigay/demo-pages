<script setup lang="ts">
import { defineProps } from 'vue'

import type { Match } from '@/lib/matches'

defineProps<{
  match: Match
}>()
</script>

<template>
  <img :src="match.image" class="h-20 w-16 object-cover rounded-md" />
</template>
