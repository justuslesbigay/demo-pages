<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useMessagesStore } from '@/stores/messages'

const store = useMessagesStore()

const matchId = useRoute().params.matchId as string
const match = computed(() => store.conversations.get(matchId)!)
</script>

<template>
  <main>
    <div>Messages for {{ match.match.name }}</div>
  </main>
</template>
