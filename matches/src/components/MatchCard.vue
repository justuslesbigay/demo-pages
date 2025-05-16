<script setup lang="ts">
import { defineProps } from 'vue'

interface Match {
  image: string
}

const props = defineProps<{
  match: Match
}>()
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-end p-2">
      <span class="backdrop-blur-md bg-black/50 text-white pl-2 pr-4 py-1 rounded-md">hello</span>
    </div>
    <img :src="match.image" class="w-full h-48 flex-auto object-cover rounded-md" />
  </div>
</template>
