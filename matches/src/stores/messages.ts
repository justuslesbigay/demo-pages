import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Temporal } from 'temporal-polyfill'

import { matches } from '@/lib/matches'
import type { Match } from '@/lib/matches'

interface Message {
  id: string
  message: string
  direction: 'sent' | 'received'
  timestamp: Temporal.Instant
}

type Conversation = { match: Match; messages: Message[] }

export const useMessagesStore = defineStore('messages', () => {
  const seed = matches.map(
    (match) => [match.matchId, { match, messages: [] }] as [string, Conversation],
  )

  const conversations = ref<Map<string, Conversation>>(new Map(seed))
  const conversationsSorted = computed(() =>
    Array.from(conversations.value.values()).toSorted((a, b) => {
      const tsA = a.messages.at(0)?.timestamp ?? a.match.matched_at
      const tsB = b.messages.at(0)?.timestamp ?? b.match.matched_at
      return tsB.epochMilliseconds - tsA.epochMilliseconds
    }),
  )

  return { conversations: conversationsSorted }
})
