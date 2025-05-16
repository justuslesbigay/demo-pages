<script setup lang="ts">
import MatchCard from '@/components/MatchCard.vue'

const profilePics = [
  'photo-1484588168347-9d835bb09939.avif',
  'photo-1488426862026-3ee34a7d66df.avif',
  'photo-1499996860823-5214fcc65f8f.avif',
  'photo-1501196354995-cbb51c65aaea.avif',
  'photo-1504834636679-cd3acd047c06.avif',
  'photo-1506277886164-e25aa3f4ef7f.avif',
  'photo-1507003211169-0a1dd7228f2d.avif',
  'photo-1517256673644-36ad11246d21.avif',
  'photo-1519419691348-3b3433c4c20e.avif',
  'photo-1519699047748-de8e457a634e.avif',
  'photo-1521119989659-a83eee488004.avif',
  'photo-1522529599102-193c0d76b5b6.avif',
  'photo-1522556189639-b150ed9c4330.avif',
  'photo-1532073150508-0c1df022bdd1.avif',
  'photo-1535295972055-1c762f4483e5.avif',
  'photo-1539125530496-3ca408f9c2d9.avif',
  'photo-1539571696357-5a69c17a67c6.avif',
  'photo-1540569014015-19a7be504e3a.avif',
  'photo-1580489944761-15a19d654956.avif',
  'photo-1589156288859-f0cb0d82b065.avif',
  'photo-1632765854612-9b02b6ec2b15.avif',
]
</script>

<template>
  <main>
    <section>
      <ul class="grid grid-cols-3 gap-2">
        <li v-for="profilePic in profilePics" :key="profilePic">
          <MatchCard :match="{ image: `/profile-pics/${profilePic}` }" />
        </li>
      </ul>
    </section>
  </main>
</template>
