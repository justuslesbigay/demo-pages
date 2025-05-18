import { Temporal } from 'temporal-polyfill'

export interface Match {
  matchId: string
  name: string
  age: number
  image: string
  matched_at: Temporal.Instant
}

export const matches: Match[] = [
  {
    matchId: '/profile-pics/photo-1484588168347-9d835bb09939.avif',
    name: 'Ellen',
    age: 27,
    image: '/profile-pics/photo-1484588168347-9d835bb09939.avif',
    matched_at: Temporal.Now.instant(),
  },
  {
    matchId: '/profile-pics/photo-1488426862026-3ee34a7d66df.avif',
    name: 'Leona',
    age: 19,
    image: '/profile-pics/photo-1488426862026-3ee34a7d66df.avif',
    matched_at: Temporal.Now.instant().subtract({ minutes: 3 }),
  },
  {
    matchId: '/profile-pics/photo-1499996860823-5214fcc65f8f.avif',
    name: 'Alfred',
    age: 41,
    image: '/profile-pics/photo-1499996860823-5214fcc65f8f.avif',
    matched_at: Temporal.Now.instant().subtract({ minutes: 10 }),
  },
  {
    matchId: '/profile-pics/photo-1501196354995-cbb51c65aaea.avif',
    name: 'Marlene',
    age: 31,
    image: '/profile-pics/photo-1501196354995-cbb51c65aaea.avif',
    matched_at: Temporal.Now.instant().subtract({ minutes: 35 }),
  },
  {
    matchId: '/profile-pics/photo-1504834636679-cd3acd047c06.avif',
    name: 'Brandon',
    age: 31,
    image: '/profile-pics/photo-1504834636679-cd3acd047c06.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 1, minutes: 15 }),
  },
  {
    matchId: '/profile-pics/photo-1506277886164-e25aa3f4ef7f.avif',
    name: 'Reginald',
    age: 42,
    image: '/profile-pics/photo-1506277886164-e25aa3f4ef7f.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 2, minutes: 40 }),
  },
  {
    matchId: '/profile-pics/photo-1507003211169-0a1dd7228f2d.avif',
    name: 'Ray',
    age: 24,
    image: '/profile-pics/photo-1507003211169-0a1dd7228f2d.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 5, minutes: 5 }),
  },
  {
    matchId: '/profile-pics/photo-1517256673644-36ad11246d21.avif',
    name: 'Dorothy',
    age: 34,
    image: '/profile-pics/photo-1517256673644-36ad11246d21.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 10, minutes: 30 }),
  },
  {
    matchId: '/profile-pics/photo-1519419691348-3b3433c4c20e.avif',
    name: 'Carrie',
    age: 23,
    image: '/profile-pics/photo-1519419691348-3b3433c4c20e.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 26 }),
  },
  {
    matchId: '/profile-pics/photo-1519699047748-de8e457a634e.avif',
    name: 'Arthur',
    age: 34,
    image: '/profile-pics/photo-1519699047748-de8e457a634e.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 38 }),
  },
  {
    matchId: '/profile-pics/photo-1521119989659-a83eee488004.avif',
    name: 'Suzanne',
    age: 19,
    image: '/profile-pics/photo-1521119989659-a83eee488004.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 53 }),
  },
  {
    matchId: '/profile-pics/photo-1522529599102-193c0d76b5b6.avif',
    name: 'Walter',
    age: 42,
    image: '/profile-pics/photo-1522529599102-193c0d76b5b6.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 72, minutes: 10 }),
  },
  {
    matchId: '/profile-pics/photo-1522556189639-b150ed9c4330.avif',
    name: 'Josh',
    age: 34,
    image: '/profile-pics/photo-1522556189639-b150ed9c4330.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 99, minutes: 45 }),
  },
  {
    matchId: '/profile-pics/photo-1532073150508-0c1df022bdd1.avif',
    name: 'Robin',
    age: 44,
    image: '/profile-pics/photo-1532073150508-0c1df022bdd1.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 132 }),
  },
  {
    matchId: '/profile-pics/photo-1535295972055-1c762f4483e5.avif',
    name: 'Minnie',
    age: 25,
    image: '/profile-pics/photo-1535295972055-1c762f4483e5.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 169, minutes: 20 }),
  },
  {
    matchId: '/profile-pics/photo-1539125530496-3ca408f9c2d9.avif',
    name: 'Marty',
    age: 40,
    image: '/profile-pics/photo-1539125530496-3ca408f9c2d9.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 222 }),
  },
  {
    matchId: '/profile-pics/photo-1539571696357-5a69c17a67c6.avif',
    name: 'Marion',
    age: 36,
    image: '/profile-pics/photo-1539571696357-5a69c17a67c6.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 306 }),
  },
  {
    matchId: '/profile-pics/photo-1540569014015-19a7be504e3a.avif',
    name: 'Francis',
    age: 26,
    image: '/profile-pics/photo-1540569014015-19a7be504e3a.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 364, minutes: 10 }),
  },
  {
    matchId: '/profile-pics/photo-1580489944761-15a19d654956.avif',
    name: 'Erma',
    age: 34,
    image: '/profile-pics/photo-1580489944761-15a19d654956.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 404, minutes: 55 }),
  },
  {
    matchId: '/profile-pics/photo-1589156288859-f0cb0d82b065.avif',
    name: 'Clyde',
    age: 25,
    image: '/profile-pics/photo-1589156288859-f0cb0d82b065.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 446, minutes: 30 }),
  },
  {
    matchId: '/profile-pics/photo-1632765854612-9b02b6ec2b15.avif',
    name: 'Sherri',
    age: 42,
    image: '/profile-pics/photo-1632765854612-9b02b6ec2b15.avif',
    matched_at: Temporal.Now.instant().subtract({ hours: 488, minutes: 15 }),
  },
]
