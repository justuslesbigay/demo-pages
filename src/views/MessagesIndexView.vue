<script setup lang="ts">
import { RouterLink } from 'vue-router'

import MatchesNav from '@/components/matches/MatchesNav.vue'
import MatchMiniPhoto from '@/components/matches/MatchMiniPhoto.vue'

import { useMessagesStore } from '@/stores/messages'

const store = useMessagesStore()
</script>

<template>
  <main>
    <MatchesNav />

    <div v-if="store.conversationsSorted.length === 0">No conversations</div>
    <ul v-else class="flex flex-col gap-2">
      <li
        v-for="conversation in store.conversationsSorted.values()"
        :key="conversation.match.matchId"
        class="flex gap-2 items-start relative"
      >
        <RouterLink
          :to="{ name: 'match-messages', params: { matchId: conversation.match.matchId } }"
          class="absolute inset-0"
        />

        <MatchMiniPhoto :match="conversation.match" class="flex-none" />
        <div
          class="flex flex-col"
          :class="{ 'text-brandpink-600': conversation.messages.length === 0 }"
        >
          <header class="font-semibold text-xl">{{ conversation.match.name }}</header>

          <p v-if="conversation.messages.length === 0" class="italic">Start a conversation!</p>
          <p v-else class="line-clamp-2">{{ conversation.messages.at(-1)?.message }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>
