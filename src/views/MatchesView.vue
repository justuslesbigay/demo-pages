<script setup lang="ts">
import MatchesNav from '@/components/matches/MatchesNav.vue'
import MatchCard from '@/components/matches/MatchCard.vue'

import { matches } from '@/lib/matches'
</script>

<template>
  <main>
    <MatchesNav />

    <section>
      <ul class="grid grid-cols-3 gap-2">
        <li v-for="matchItem in matches" :key="matchItem.image">
          <MatchCard :match="matchItem" />
        </li>
      </ul>
    </section>
  </main>
</template>
