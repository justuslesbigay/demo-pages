<script setup lang="ts">
import { computed, ref, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

import MatchMiniPhoto from '@/components/matches/MatchMiniPhoto.vue'

import Checks from '@/components/icons/Checks.vue'
import PaperPlaneRight from '@/components/icons/PaperPlaneRight.vue'
import ChatTeardropDotsFill from '@/components/icons/ChatTeardropDotsFill.vue'

import { useMessagesStore } from '@/stores/messages'

const form = ref<HTMLFormElement>()

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

const matchIsTyping = ref(false)

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

watch(
  [conversation.value.messages, matchIsTyping],
  () => {
    scrollToBottom()
  },
  { immediate: true },
)

const loremIpsum = [
  'Aliquam at libero et mauris eleifend volutpat.',
  'Nulla sit amet mi nec nisl ultricies pellentesque vitae sed nisl.',
  'Mauris elementum dolor vitae ipsum consequat luctus.',
  'In semper odio sed est suscipit cursus ut ac sem.',
  'Phasellus eu sapien pellentesque, finibus orci non, imperdiet mi.',
  'Vestibulum non velit sed ex feugiat aliquam.',
  'Sed tincidunt risus eget neque accumsan interdum nec ac dolor.',
  'Curabitur vitae nunc et libero mattis mattis ac eu urna.',
  'Praesent sit amet neque convallis, porta augue sit amet, volutpat augue.',
  'Donec vulputate mauris in purus scelerisque, accumsan porta nisl posuere.',
]
const randomResponse = () => loremIpsum[Math.floor(Math.random() * loremIpsum.length)]

const probablyMatchReplies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 750 + Math.random() * 1_000))
  store.markMessageRead(conversation.value)
  matchIsTyping.value = true
  await new Promise((resolve) => setTimeout(resolve, 750 + Math.random() * 1_000))

  store.receiveMessage(conversation.value, randomResponse())
  matchIsTyping.value = false
}

const sendMessage = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement)
  const message = formData.get('message')! as string

  if (message.trim().length === 0) return

  store.sendMessage(conversation.value, message)
  form.value!.reset()

  await probablyMatchReplies()
}
</script>

<template>
  <main class="h-full flex flex-col">
    <header class="flex-shrink-0 flex gap-4 p-2 bg-brandgreen-700 rounded-md">
      <MatchMiniPhoto :match="conversation.match" class="-ml-2 -my-2 h-24 w-20" />
      <div>
        <div class="text-xl text-gray-50 ml-2">Chatting with</div>
        <div
          class="font-caveat text-4xl font-semibold w-fit underline decoration-dashed underline-offset-3 rounded-lg bg-brandgreen-50 text-brandgreen-700 px-2 py-1"
        >
          {{ conversation.match.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </header>

    <div ref="messagesContainer" class="flex-1 overflow-y-auto min-h-0 px-4 flex flex-col">
      <ul class="flex flex-col justify-end flex-1 gap-2 mt-auto">
        <li
          v-for="(message, i) in conversation.messages"
          :key="message.messageId"
          class="px-3 py-2 max-w-3/4"
          :class="[
            message.direction === 'sent'
              ? 'bg-brandpink-100 self-end rounded-tl-xl rounded-bl-xl rounded-tr-sm rounded-br-sm'
              : 'bg-brandgreen-50 rounded-tr-xl rounded-br-xl rounded-tl-sm rounded-bl-sm',
          ]"
        >
          {{ message.message }}
          <Checks v-if="finalMessageIsSent && i === mostRecentlyReadMessage" class="ml-auto" />
        </li>
      </ul>

      <ChatTeardropDotsFill
        v-if="matchIsTyping"
        class="animate-pulse text-3xl text-brandgreen-300 flex-shrink-0"
      />
    </div>

    <div class="flex-shrink-0 p-4">
      <form ref="form" @submit.prevent="sendMessage" class="flex gap-2 items-stretch">
        <input
          name="message"
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandpink-500 focus:border-transparent"
          placeholder="Type a message..."
        />
        <button type="submit" class="text-2xl -ml-1 -mr-2 px-1">
          <PaperPlaneRight />
        </button>
      </form>
    </div>
  </main>
</template>
