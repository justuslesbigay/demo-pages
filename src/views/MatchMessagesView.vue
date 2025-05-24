<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

import MatchMiniPhoto from '@/components/matches/MatchMiniPhoto.vue'
import Checks from '@/components/icons/Checks.vue'

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

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

onMounted(() => {
  scrollToBottom()
})

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

const sendMessage = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement)
  const message = formData.get('message')! as string

  if (message.trim().length === 0) return

  store.sendMessage(conversation.value, message)
  scrollToBottom()
  form.value!.reset()

  store.receiveMessage(conversation.value, randomResponse())
}
</script>

<template>
  <main class="h-full flex flex-col">
    <header class="flex-shrink-0 flex items-end gap-2 p-2">
      <MatchMiniPhoto :match="conversation.match" />
      <p>Chatting with {{ conversation.match.name }}</p>
    </header>

    <div ref="messagesContainer" class="flex-1 overflow-y-auto min-h-0 px-4">
      <ul class="flex flex-col justify-end min-h-full gap-2 mt-auto">
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
      <form ref="form" @submit.prevent="sendMessage">
        <input
          name="message"
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandpink-500 focus:border-transparent"
          placeholder="Type a message..."
        />
      </form>
    </div>
  </main>
</template>
