<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import MatchMiniPhoto from '@/components/matches/MatchMiniPhoto.vue'
import Checks from '@/components/icons/Checks.vue'

import { useMessagesStore } from '@/stores/messages'

const store = useMessagesStore()

const matchId = useRoute().params.matchId as string
const conversation = computed(() => store.conversations.get(matchId)!)

const mostRecentlyReadMessage = computed(() =>
  conversation.value.messages.findLastIndex(
    (message) => message.direction === 'sent' && message.readAt !== null,
  ),
)
</script>

<template>
  <main class="p-2">
    <header class="flex items-end gap-2">
      <MatchMiniPhoto :match="conversation.match" />
      <p>Chatting with {{ conversation.match.name }}</p>
    </header>

    <ul class="flex flex-col gap-2 px-4">
      <li
        v-for="(message, i) in conversation.messages"
        :key="message.messageId"
        class="px-3 py-2 max-w-3/4"
        :class="[
          message.direction === 'sent'
            ? 'bg-brandpink-100 self-end rounded-tl-xl rounded-bl-xl rounded-tr-sm rounded-br-sm'
            : 'bg-gray-200 rounded-tr-xl rounded-br-xl rounded-tl-sm rounded-bl-sm',
        ]"
      >
        {{ message.message }}
        <Checks v-if="i === mostRecentlyReadMessage" class="ml-auto" />
      </li>
    </ul>
  </main>
</template>
