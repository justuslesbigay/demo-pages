<script setup lang="ts">
import { defineProps } from 'vue'

import type { Match } from '@/lib/matches'

defineProps<{
  match: Match
}>()
</script>

<template>
  <div class="relative">
    <a href="" class="absolute inset-0 flex items-end p-1">
      <span
        class="backdrop-blur-md bg-black/50 text-white pl-2 pr-4 py-1 rounded-md whitespace-nowrap"
      >
        {{ match.name }}, {{ match.age }}
      </span>
    </a>

    <!-- icons -->
    <span href="" class="absolute top-0 right-0 text-white"></span>

    <img :src="match.image" class="w-full h-48 flex-auto object-cover rounded-md" />
  </div>
</template>
