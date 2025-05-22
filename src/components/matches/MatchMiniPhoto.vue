<script setup lang="ts">
import { defineProps } from 'vue'

import type { Match } from '@/lib/matches'

defineProps<{
  match: Match
}>()
</script>

<template>
  <img :src="match.image" class="w-16 h-20 object-cover rounded-md" />
</template>
