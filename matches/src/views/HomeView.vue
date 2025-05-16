<script setup lang="ts">
import MatchCard from '@/components/MatchCard.vue'

interface Match {
  name: string
  age: number
  image: string
}

const matches: Match[] = [
  {
    name: 'Ellen',
    age: 27,
    image: '/profile-pics/photo-1484588168347-9d835bb09939.avif',
  },
  {
    name: 'Leona',
    age: 19,
    image: '/profile-pics/photo-1488426862026-3ee34a7d66df.avif',
  },
  {
    name: 'Alfred',
    age: 41,
    image: '/profile-pics/photo-1499996860823-5214fcc65f8f.avif',
  },
  {
    name: 'Marlene',
    age: 31,
    image: '/profile-pics/photo-1501196354995-cbb51c65aaea.avif',
  },
  {
    name: 'Brandon',
    age: 31,
    image: '/profile-pics/photo-1504834636679-cd3acd047c06.avif',
  },
  {
    name: 'Reginald',
    age: 42,
    image: '/profile-pics/photo-1506277886164-e25aa3f4ef7f.avif',
  },
  {
    name: 'Ray',
    age: 24,
    image: '/profile-pics/photo-1507003211169-0a1dd7228f2d.avif',
  },
  {
    name: 'Dorothy',
    age: 34,
    image: '/profile-pics/photo-1517256673644-36ad11246d21.avif',
  },
  {
    name: 'Carrie',
    age: 23,
    image: '/profile-pics/photo-1519419691348-3b3433c4c20e.avif',
  },
  {
    name: 'Arthur',
    age: 34,
    image: '/profile-pics/photo-1519699047748-de8e457a634e.avif',
  },
  {
    name: 'Suzanne',
    age: 19,
    image: '/profile-pics/photo-1521119989659-a83eee488004.avif',
  },
  {
    name: 'Walter',
    age: 42,
    image: '/profile-pics/photo-1522529599102-193c0d76b5b6.avif',
  },
  {
    name: 'Josh',
    age: 34,
    image: '/profile-pics/photo-1522556189639-b150ed9c4330.avif',
  },
  {
    name: 'Robin',
    age: 44,
    image: '/profile-pics/photo-1532073150508-0c1df022bdd1.avif',
  },
  {
    name: 'Minnie',
    age: 25,
    image: '/profile-pics/photo-1535295972055-1c762f4483e5.avif',
  },
  {
    name: 'Marty',
    age: 40,
    image: '/profile-pics/photo-1539125530496-3ca408f9c2d9.avif',
  },
  {
    name: 'Marion',
    age: 36,
    image: '/profile-pics/photo-1539571696357-5a69c17a67c6.avif',
  },
  {
    name: 'Francis',
    age: 26,
    image: '/profile-pics/photo-1540569014015-19a7be504e3a.avif',
  },
  {
    name: 'Erma',
    age: 34,
    image: '/profile-pics/photo-1580489944761-15a19d654956.avif',
  },
  {
    name: 'Clyde',
    age: 25,
    image: '/profile-pics/photo-1589156288859-f0cb0d82b065.avif',
  },
  {
    name: 'Sherri',
    age: 42,
    image: '/profile-pics/photo-1632765854612-9b02b6ec2b15.avif',
  },
]
</script>

<template>
  <main>
    <section>
      <ul class="grid grid-cols-3 gap-2">
        <li v-for="matchItem in matches" :key="matchItem.image">
          <MatchCard :match="matchItem" />
        </li>
      </ul>
    </section>
  </main>
</template>
