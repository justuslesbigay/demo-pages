<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'
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

const finalMessageIsSent = computed(() => conversation.value.messages.at(-1)?.direction === 'sent')

const messagesContainer = ref<HTMLElement>()

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

onMounted(() => {
  nextTick(() => {
    scrollToBottom()
  })
})
</script>

<template>
  <main class="h-full flex flex-col">
    <header class="flex-shrink-0 flex items-end gap-2 p-2">
      <MatchMiniPhoto :match="conversation.match" />
      <p>Chatting with {{ conversation.match.name }}</p>
    </header>

    <div ref="messagesContainer" class="flex-1 overflow-y-auto min-h-0 px-4">
      <ul class="flex flex-col gap-2 mt-auto">
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
          <Checks v-if="finalMessageIsSent && i === mostRecentlyReadMessage" class="ml-auto" />
        </li>
      </ul>
    </div>

    <div class="flex-shrink-0 p-4">
      <input
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandpink-500 focus:border-transparent"
        placeholder="Type a message..."
      />
    </div>
  </main>
</template>
