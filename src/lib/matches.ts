import { Temporal } from 'temporal-polyfill'

export interface Match {
  matchId: string
  name: string
  age: number
  image: string
  matched_at: Temporal.Instant
}

const imageUrl = (image: string) =>
  new URL(`images/profile-pics/${image}`, new URL(import.meta.env.BASE_URL, window.location.href))
    .href

export const matches: Match[] = [
  {
    matchId: '/photo-1484588168347-9d835bb09939.avif',
    name: 'Indigo',
    age: 27,
    //image: imageUrl('/photo-1484588168347-9d835bb09939.avif'),
    image: imageUrl('photo-1484588168347-9d835bb09939.avif'),
    matched_at: Temporal.Now.instant(),
  },
  {
    matchId: 'photo-1488426862026-3ee34a7d66df.avif',
    name: 'Leona',
    age: 19,
    image: imageUrl('photo-1488426862026-3ee34a7d66df.avif'),
    matched_at: Temporal.Now.instant().subtract({ minutes: 3 }),
  },
  {
    matchId: 'photo-1499996860823-5214fcc65f8f.avif',
    name: 'Alfred',
    age: 41,
    image: imageUrl('photo-1499996860823-5214fcc65f8f.avif'),
    matched_at: Temporal.Now.instant().subtract({ minutes: 10 }),
  },
  {
    matchId: 'photo-1501196354995-cbb51c65aaea.avif',
    name: 'Marcus',
    age: 31,
    image: imageUrl('photo-1501196354995-cbb51c65aaea.avif'),
    matched_at: Temporal.Now.instant().subtract({ minutes: 35 }),
  },
  {
    matchId: 'photo-1504834636679-cd3acd047c06.avif',
    name: 'Rowan',
    age: 31,
    image: imageUrl('photo-1504834636679-cd3acd047c06.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 1, minutes: 15 }),
  },
  {
    matchId: 'photo-1506277886164-e25aa3f4ef7f.avif',
    name: 'Reginald',
    age: 42,
    image: imageUrl('photo-1506277886164-e25aa3f4ef7f.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 2, minutes: 40 }),
  },
  {
    matchId: 'photo-1507003211169-0a1dd7228f2d.avif',
    name: 'Ray',
    age: 24,
    image: imageUrl('photo-1507003211169-0a1dd7228f2d.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 5, minutes: 5 }),
  },
  {
    matchId: 'photo-1517256673644-36ad11246d21.avif',
    name: 'Dorothy',
    age: 34,
    image: imageUrl('photo-1517256673644-36ad11246d21.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 10, minutes: 30 }),
  },
  {
    matchId: 'photo-1519419691348-3b3433c4c20e.avif',
    name: 'Carrie',
    age: 23,
    image: imageUrl('photo-1519419691348-3b3433c4c20e.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 26 }),
  },
  {
    matchId: 'photo-1519699047748-de8e457a634e.avif',
    name: 'Aspen',
    age: 34,
    image: imageUrl('photo-1519699047748-de8e457a634e.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 38 }),
  },
  {
    matchId: 'photo-1521119989659-a83eee488004.avif',
    name: 'Sebastian',
    age: 29,
    image: imageUrl('photo-1521119989659-a83eee488004.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 53 }),
  },
  {
    matchId: 'photo-1522529599102-193c0d76b5b6.avif',
    name: 'Walter',
    age: 42,
    image: imageUrl('photo-1522529599102-193c0d76b5b6.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 72, minutes: 10 }),
  },
  {
    matchId: 'photo-1522556189639-b150ed9c4330.avif',
    name: 'Josh',
    age: 34,
    image: imageUrl('photo-1522556189639-b150ed9c4330.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 99, minutes: 45 }),
  },
  {
    matchId: 'photo-1532073150508-0c1df022bdd1.avif',
    name: 'Robin',
    age: 44,
    image: imageUrl('photo-1532073150508-0c1df022bdd1.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 132 }),
  },
  {
    matchId: 'photo-1535295972055-1c762f4483e5.avif',
    name: 'Phoenix',
    age: 25,
    image: imageUrl('photo-1535295972055-1c762f4483e5.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 169, minutes: 20 }),
  },
  {
    matchId: 'photo-1539125530496-3ca408f9c2d9.avif',
    name: 'Marty',
    age: 40,
    image: imageUrl('photo-1539125530496-3ca408f9c2d9.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 222 }),
  },
  {
    matchId: 'photo-1539571696357-5a69c17a67c6.avif',
    name: 'Martin',
    age: 36,
    image: imageUrl('photo-1539571696357-5a69c17a67c6.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 306 }),
  },
  {
    matchId: 'photo-1540569014015-19a7be504e3a.avif',
    name: 'Zephyr',
    age: 26,
    image: imageUrl('photo-1540569014015-19a7be504e3a.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 364, minutes: 10 }),
  },
  {
    matchId: 'photo-1580489944761-15a19d654956.avif',
    name: 'Erma',
    age: 34,
    image: imageUrl('photo-1580489944761-15a19d654956.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 404, minutes: 55 }),
  },
  {
    matchId: 'photo-1589156288859-f0cb0d82b065.avif',
    name: 'Clyde',
    age: 25,
    image: imageUrl('photo-1589156288859-f0cb0d82b065.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 446, minutes: 30 }),
  },
  {
    matchId: 'photo-1632765854612-9b02b6ec2b15.avif',
    name: 'Sherri',
    age: 42,
    image: imageUrl('photo-1632765854612-9b02b6ec2b15.avif'),
    matched_at: Temporal.Now.instant().subtract({ hours: 488, minutes: 15 }),
  },
]
