<script setup lang="ts">
import MatchesNav from '@/components/MatchesNav.vue'
import MatchMiniPhoto from '@/components/MatchMiniPhoto.vue'

import { useMessagesStore } from '@/stores/messages'

const store = useMessagesStore()
</script>

<template>
  <main>
    <MatchesNav />

    <div v-if="store.conversations.length === 0">No conversations</div>
    <ul v-else class="flex flex-col gap-2">
      <li
        v-for="conversation in store.conversations.values()"
        :key="conversation.match.matchId"
        class="flex gap-2 items-start"
      >
        <MatchMiniPhoto :match="conversation.match" />
        <div
          class="flex flex-col"
          :class="{ 'text-brandpink-600': conversation.messages.length === 0 }"
        >
          <header class="font-semibold text-xl">{{ conversation.match.name }}</header>

          <p v-if="conversation.messages.length === 0" class="italic">Start a conversation!</p>
          <p v-else>{{ conversation.messages.at(0)?.message }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>
