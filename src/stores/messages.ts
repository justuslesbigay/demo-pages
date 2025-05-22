import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Temporal } from 'temporal-polyfill'

import { matches } from '@/lib/matches'
import type { Match } from '@/lib/matches'

interface Message {
  messageId: string
  message: string
  direction: 'sent' | 'received'
  timestamp: Temporal.Instant
  readAt: Temporal.Instant | null
}

type Conversation = { match: Match; messages: Message[] }

const seedMessages: Conversation[] = [
  // Indigo (27)
  // Personality: Creative, music lover, new to city. Values authentic connection.
  // Style: Casual but articulate, uses emojis occasionally.
  // Status: Views us as equal, slightly intrigued.
  // State: Excited about new connections.
  // Goals: Make friends, explore the city.
  // Opener Archetype: Authentic Curiosity
  {
    match: matches[0],
    messages: [
      {
        messageId: '1',
        message:
          "Your profile has such good vibes! What's the best hidden gem you've found in the city so far?",
        direction: 'sent',
        timestamp: matches[0].matched_at,
        readAt: matches[0].matched_at.add({ minutes: 2 }),
      },
      {
        messageId: '2',
        message:
          "Aw thanks! 😊 Hmm, there's this tiny record store in the North End... pure magic. You into exploring?",
        direction: 'received',
        timestamp: matches[0].matched_at.add({ minutes: 12 }),
        readAt: matches[0].matched_at.add({ minutes: 25 }),
      },
      {
        messageId: '3',
        message:
          'Definitely! A good record store is my happy place. What kind of music are you usually hunting for?',
        direction: 'sent',
        timestamp: matches[0].matched_at.add({ minutes: 15 }),
        readAt: matches[0].matched_at.add({ minutes: 27 }),
      },
      {
        messageId: '4',
        message:
          'Lately, a lot of neo-soul and some obscure 70s funk. You? Maybe we could swap recommendations sometime.',
        direction: 'received',
        timestamp: matches[0].matched_at.add({ hours: 1, minutes: 20 }),
        readAt: null,
      },
    ],
  },
  // Leona (19)
  // Personality: Student, somewhat shy, studious. New to dating apps.
  // Style: Short messages, occasional typos, uses "lol" or "idk".
  // Status: Slightly intimidated (older match), but curious.
  // State: A bit overwhelmed by app experience.
  // Goals: Casual conversation, maybe a confidence boost.
  // Opener Archetype: Playful Challenge (gentle)
  {
    match: matches[1],
    messages: [
      {
        messageId: '1',
        message: 'Okay, be honest - how overwhelmed are you by this app right now? 😅',
        direction: 'sent',
        timestamp: matches[1].matched_at,
        readAt: matches[1].matched_at.add({ minutes: 3 }),
      },
      {
        messageId: '2',
        message: 'lol VERY. is it always this crazy??',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ minutes: 18 }),
        readAt: matches[1].matched_at.add({ hours: 1, minutes: 5 }),
      },
      {
        messageId: '3',
        message:
          'Haha, pretty much! But you get used to it. What are you hoping to find here, amidst the chaos?',
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ minutes: 20 }),
        readAt: matches[1].matched_at.add({ hours: 1, minutes: 7 }),
      },
      {
        messageId: '4',
        message: 'idk just ppl to talk to? maybe a date if sum1 is cool. u?',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 2, minutes: 5 }),
        readAt: matches[1].matched_at.add({ hours: 3, minutes: 20 }),
      },
      {
        messageId: '5',
        message:
          'Same here honestly. Just looking for genuine connections, you know? Maybe someone to grab coffee with and see where it goes.',
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 3, minutes: 25 }),
        readAt: matches[1].matched_at.add({ hours: 3, minutes: 28 }),
      },
      {
        messageId: '6',
        message: 'coffee sounds nice :) im kinda new to all this tbh',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 3, minutes: 45 }),
        readAt: matches[1].matched_at.add({ hours: 4, minutes: 15 }),
      },
      {
        messageId: '7',
        message: 'No pressure at all! What are you studying? I saw you mentioned being a student.',
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 3, minutes: 50 }),
        readAt: matches[1].matched_at.add({ hours: 4, minutes: 17 }),
      },
      {
        messageId: '8',
        message: 'psychology! its pretty cool but lots of reading lol. what do u do?',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 4, minutes: 35 }),
        readAt: matches[1].matched_at.add({ hours: 5, minutes: 10 }),
      },
      {
        messageId: '9',
        message:
          'Psychology is fascinating! I work in marketing, so understanding people is part of my job too. Any particular area you want to focus on?',
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 4, minutes: 40 }),
        readAt: matches[1].matched_at.add({ hours: 5, minutes: 12 }),
      },
      {
        messageId: '10',
        message: 'maybe clinical? idk yet tho. marketing sounds interesting! do u like it?',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 5, minutes: 55 }),
        readAt: matches[1].matched_at.add({ hours: 6, minutes: 30 }),
      },
      {
        messageId: '11',
        message:
          'Most days yeah! Clinical psych would be amazing - helping people through tough times. That takes a special person.',
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 6, minutes: 5 }),
        readAt: matches[1].matched_at.add({ hours: 6, minutes: 32 }),
      },
      {
        messageId: '12',
        message: 'aw thanks :) ur sweet. so um... about that coffee?',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 7, minutes: 20 }),
        readAt: matches[1].matched_at.add({ hours: 8, minutes: 45 }),
      },
      {
        messageId: '13',
        message:
          "I'd love that! Do you have a favorite coffee place? Or somewhere you feel comfortable?",
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 7, minutes: 25 }),
        readAt: matches[1].matched_at.add({ hours: 8, minutes: 47 }),
      },
      {
        messageId: '14',
        message: 'theres this place near campus called beans & books. its pretty chill',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 8, minutes: 55 }),
        readAt: matches[1].matched_at.add({ hours: 9, minutes: 20 }),
      },
      {
        messageId: '15',
        message:
          "Perfect! I love places with books. When works for you? I'm pretty flexible this week.",
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 9, minutes: 0 }),
        readAt: matches[1].matched_at.add({ hours: 9, minutes: 22 }),
      },
      {
        messageId: '16',
        message: 'maybe thursday afternoon? like 3pm? i dont have class then',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 10, minutes: 15 }),
        readAt: matches[1].matched_at.add({ hours: 11, minutes: 5 }),
      },
      {
        messageId: '17',
        message:
          'Thursday at 3 sounds perfect! Should I meet you there or would you prefer to meet somewhere else first?',
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 10, minutes: 20 }),
        readAt: matches[1].matched_at.add({ hours: 11, minutes: 7 }),
      },
      {
        messageId: '18',
        message: 'just meet there is fine! im getting kinda nervous now lol',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 11, minutes: 45 }),
        readAt: matches[1].matched_at.add({ hours: 12, minutes: 30 }),
      },
      {
        messageId: '19',
        message:
          "That's totally normal! I'm a little nervous too honestly. But I think it'll be fun - no pressure, just coffee and conversation.",
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 11, minutes: 50 }),
        readAt: matches[1].matched_at.add({ hours: 12, minutes: 32 }),
      },
      {
        messageId: '20',
        message:
          'ok good im not the only one haha. what should i expect? like what do ppl usually talk about?',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 13, minutes: 10 }),
        readAt: matches[1].matched_at.add({ hours: 14, minutes: 15 }),
      },
      {
        messageId: '21',
        message:
          "Just be yourself! We can talk about your studies, hobbies, favorite books since we'll be surrounded by them. Whatever feels natural.",
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 13, minutes: 15 }),
        readAt: matches[1].matched_at.add({ hours: 14, minutes: 17 }),
      },
      {
        messageId: '22',
        message:
          'that actually sounds really nice. i love talking about books! what kind do u like?',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 14, minutes: 35 }),
        readAt: matches[1].matched_at.add({ hours: 15, minutes: 20 }),
      },
      {
        messageId: '23',
        message:
          'Bit of everything really - fiction, some psychology books for work. What about you? Any recommendations?',
        direction: 'sent',
        timestamp: matches[1].matched_at.add({ hours: 14, minutes: 40 }),
        readAt: matches[1].matched_at.add({ hours: 15, minutes: 22 }),
      },
      {
        messageId: '24',
        message:
          'omg yes! have u read "the body keeps the score"? its about trauma and healing. so good but heavy',
        direction: 'received',
        timestamp: matches[1].matched_at.add({ hours: 16, minutes: 5 }),
        readAt: null,
      },
    ],
  },
  // Alfred (41)
  // Personality: Professional photographer, confident, established. Values his craft.
  // Style: Proper grammar, thoughtful responses, a bit formal.
  // Status: Views self as mentor figure, slightly aloof but appreciative of genuine interest.
  // State: Content, willing to share knowledge.
  // Goals: Meaningful conversation, perhaps networking.
  // Opener Archetype: Direct Compliment (professional)
  {
    match: matches[2],
    messages: [
      {
        messageId: '1',
        message: 'That portrait series in your profile is breathtaking. The lighting is masterful.',
        direction: 'sent',
        timestamp: matches[2].matched_at,
        readAt: matches[2].matched_at.add({ minutes: 4 }),
      },
      {
        messageId: '2',
        message: 'Thank you. It was a challenging but rewarding project. What drew your eye to it?',
        direction: 'received',
        timestamp: matches[2].matched_at.add({ hours: 1, minutes: 50 }),
        readAt: matches[2].matched_at.add({ hours: 4, minutes: 15 }),
      },
      {
        messageId: '3',
        message:
          "The way you captured such raw emotion. It's rare to see that level of depth. Do you shoot film or digital for that kind of work?",
        direction: 'sent',
        timestamp: matches[2].matched_at.add({ hours: 2, minutes: 5 }),
        readAt: matches[2].matched_at.add({ hours: 4, minutes: 17 }),
      },
      {
        messageId: '4',
        message:
          'Primarily medium format film. It offers a certain quality that digital cannot replicate, in my opinion.',
        direction: 'received',
        timestamp: matches[2].matched_at.add({ hours: 4, minutes: 30 }),
        readAt: matches[2].matched_at.add({ hours: 7, minutes: 45 }),
      },
    ],
  },
  // Marcus (31)
  // Personality: Direct, no-nonsense, busy professional. Values efficiency. (Potentially spicy/horny)
  // Style: Concise, to-the-point, uses abbreviations.
  // Status: Equal but time-conscious.
  // State: Focused, looking for straightforward interaction, maybe a quick hookup.
  // Goals: Quickly assess compatibility for a date/meetup.
  // Opener Archetype: Forward Invitation (direct)
  {
    match: matches[3],
    messages: [
      {
        messageId: '1',
        message:
          "Your profile mentions no BS. Appreciate that. What's your week looking like for a drink or something more... fun?",
        direction: 'sent',
        timestamp: matches[3].matched_at,
        readAt: matches[3].matched_at.add({ minutes: 2 }),
      },
      {
        messageId: '2',
        message:
          'Straight to it, huh? 😉 Week’s packed but might have an opening. What did you have in mind by "fun"?',
        direction: 'received',
        timestamp: matches[3].matched_at.add({ minutes: 33 }),
        readAt: matches[3].matched_at.add({ minutes: 38 }),
      },
      {
        messageId: '3',
        message:
          "Thought I'd match your energy. Fun can be a lot of things. Good company, good conversation... good chemistry. You free Wednesday night?",
        direction: 'sent',
        timestamp: matches[3].matched_at.add({ minutes: 38 }),
        readAt: matches[3].matched_at.add({ minutes: 41 }),
      },
      {
        messageId: '4',
        message:
          'Chemistry, I like that. Weds is possible. My place, 8pm. Come find out if we have any. 😈',
        direction: 'received',
        timestamp: matches[3].matched_at.add({ hours: 2, minutes: 50 }),
        readAt: matches[3].matched_at.add({ hours: 2, minutes: 58 }),
      },
      {
        messageId: '5',
        message: 'Bold. I like it. Address?',
        direction: 'sent',
        timestamp: matches[3].matched_at.add({ hours: 2, minutes: 52 }),
        readAt: matches[3].matched_at.add({ hours: 2, minutes: 55 }),
      },
    ],
  },
  // Rowan (31)
  // Personality: Dog lover, outdoorsy, friendly. Values companionship (human and canine).
  // Style: Casual, enthusiastic, uses pet-related language.
  // Status: Very approachable, sees us as a potential friend.
  // State: Happy, energetic.
  // Goals: Find dog park buddy, maybe more if connection is there.
  // Opener Archetype: Shared Experience (pets)
  {
    match: matches[4],
    messages: [
      {
        messageId: '1',
        message:
          "Okay that golden retriever is illegally cute. What's their name? My pup is already jealous!",
        direction: 'sent',
        timestamp: matches[4].matched_at,
        readAt: matches[4].matched_at.add({ minutes: 1 }),
      },
      {
        messageId: '2',
        message:
          "Haha, that's Barnaby! He's my furry overlord. What kind of pup are you hiding? We're always up for new park adventures!",
        direction: 'received',
        timestamp: matches[4].matched_at.add({ minutes: 9 }),
        readAt: matches[4].matched_at.add({ minutes: 14 }),
      },
      {
        messageId: '3',
        message:
          'A scruffy terrier mix named Pip! Definitely more scruff than overlord. Where do you and Barnaby usually cause chaos?',
        direction: 'sent',
        timestamp: matches[4].matched_at.add({ minutes: 12 }),
        readAt: matches[4].matched_at.add({ minutes: 15 }),
      },
      {
        messageId: '4',
        message: "We're regulars at Highland Park. Pip and Barnaby double trouble? I'm in! 🐕",
        direction: 'received',
        timestamp: matches[4].matched_at.add({ hours: 1, minutes: 25 }),
        readAt: matches[4].matched_at.add({ hours: 1, minutes: 32 }),
      },
    ],
  },
  // Reginald (42)
  // Personality: Intellectual, bookworm, slightly pretentious but well-meaning. Values deep conversation.
  // Style: Long sentences, proper punctuation, uses sophisticated vocabulary.
  // Status: Views self as cultured, enjoys sharing knowledge.
  // State: Looking for stimulating exchange.
  // Goals: Find someone to discuss literature/ideas with.
  // Opener Archetype: Intriguing Question (literary)
  {
    match: matches[5],
    messages: [
      {
        messageId: '1',
        message:
          'Your bookshelf in that picture is impressive! If you could only save three books from a fire, which would they be and why?',
        direction: 'sent',
        timestamp: matches[5].matched_at,
        readAt: matches[5].matched_at.add({ minutes: 5 }),
      },
      {
        messageId: '2',
        message:
          'A most challenging hypothetical! Perhaps "Ulysses" for its sheer audacity, "Meditations" for its timeless wisdom, and... a good anthology of poetry. And your choices?',
        direction: 'received',
        timestamp: matches[5].matched_at.add({ hours: 3, minutes: 45 }),
        readAt: matches[5].matched_at.add({ hours: 6, minutes: 20 }),
      },
      {
        messageId: '3',
        message:
          "Excellent picks! I'd go with 'One Hundred Years of Solitude,' 'To the Lighthouse,' and maybe a comprehensive history of art. What are you reading currently?",
        direction: 'sent',
        timestamp: matches[5].matched_at.add({ hours: 4 }),
        readAt: matches[5].matched_at.add({ hours: 4, minutes: 8 }),
      },
    ],
  },
  // Ray (24)
  // Personality: Athletic, adventurous, confident. Values experiences. (Spicy)
  // Style: Short, energetic messages, uses slang, exclamation points.
  // Status: Views self as expert in his hobbies, eager to share.
  // State: Pumped, looking for action.
  // Goals: Find activity partner, maybe something more casual/fun.
  // Opener Archetype: Flirty Tease (activity-based)
  {
    match: matches[6],
    messages: [
      {
        messageId: '1',
        message:
          'Those climbing shots are 🔥 Think you could teach a newbie a thing or two? About climbing, of course... unless? 😉',
        direction: 'sent',
        timestamp: matches[6].matched_at,
        readAt: matches[6].matched_at.add({ minutes: 1 }),
      },
      {
        messageId: '2',
        message:
          "Haha, always happy to show off... I mean, share my skills. What kind of 'things' are you looking to learn? 😏",
        direction: 'received',
        timestamp: matches[6].matched_at.add({ minutes: 5 }),
        readAt: matches[6].matched_at.add({ minutes: 7 }),
      },
      {
        messageId: '3',
        message:
          "Let's start with how not to fall flat on my face. After that, I'm open to suggestions. You seem like you have a lot of... stamina.",
        direction: 'sent',
        timestamp: matches[6].matched_at.add({ minutes: 8 }),
        readAt: matches[6].matched_at.add({ minutes: 10 }),
      },
      {
        messageId: '4',
        message:
          'Oh, I can go all day. 😉 Gym session first, then we can talk about other endurance activities. You free this weekend?',
        direction: 'received',
        timestamp: matches[6].matched_at.add({ hours: 1, minutes: 10 }),
        readAt: matches[6].matched_at.add({ hours: 1, minutes: 15 }),
      },
      {
        messageId: '5',
        message: 'My weekend just cleared up. Send me the details.',
        direction: 'sent',
        timestamp: matches[6].matched_at.add({ hours: 1, minutes: 12 }),
        readAt: matches[6].matched_at.add({ hours: 1, minutes: 14 }),
      },
    ],
  },
  // Dorothy (34)
  // Personality: World traveler, free spirit, confident and experienced dater.
  // Style: Storyteller, descriptive, flirty, uses winky faces.
  // Status: Views us as an audience, but also a potential equal. Used to success.
  // State: Nostalgic about travels, open to new adventures (and people).
  // Goals: Share experiences, find a travel companion or fun date.
  // Opener Archetype: Confident Assertion / Direct Compliment
  {
    match: matches[7],
    messages: [
      {
        messageId: '1',
        message:
          'I never message first, but your Patagonia photos broke me. That sunrise shot is unreal.',
        direction: 'sent',
        timestamp: matches[7].matched_at,
        readAt: matches[7].matched_at.add({ minutes: 3 }),
      },
      {
        messageId: '2',
        message:
          "Aren't they just? 😉 Patagonia has a piece of my soul. Glad my pics could make an impression! What's the most breathtaking place you've been?",
        direction: 'received',
        timestamp: matches[7].matched_at.add({ hours: 1, minutes: 22 }),
        readAt: matches[7].matched_at.add({ hours: 1, minutes: 55 }),
      },
      {
        messageId: '3',
        message:
          'Tough call! Maybe hiking in the Dolomites. But your Patagonia shots are making me reconsider. We should swap travel stories over drinks sometime.',
        direction: 'sent',
        timestamp: matches[7].matched_at.add({ hours: 1, minutes: 28 }),
        readAt: matches[7].matched_at.add({ hours: 1, minutes: 32 }),
      },
      {
        messageId: '4',
        message:
          "I'd like that. I have a feeling our passport stamps would get along. How's your Thursday?",
        direction: 'received',
        timestamp: matches[7].matched_at.add({ hours: 4, minutes: 5 }),
        readAt: matches[7].matched_at.add({ hours: 4, minutes: 45 }),
      },
    ],
  },
  // Carrie (23)
  // Personality: Fashionable, thrifty, flirty, energetic. Values self-expression.
  // Style: Playful, uses emojis, slang, quick replies.
  // Status: Confident in her style and appeal.
  // State: Having fun with the app, looking for lighthearted connection.
  // Goals: Shopping buddy, fun date, maybe more.
  // Opener Archetype: Playful Challenge (style-based)
  {
    match: matches[8],
    messages: [
      {
        messageId: '1',
        message:
          'Okay your thrift game is next level. Where do you find these pieces? 👀 Spill the secrets!',
        direction: 'sent',
        timestamp: matches[8].matched_at,
        readAt: matches[8].matched_at.add({ minutes: 1 }),
      },
      {
        messageId: '2',
        message:
          "Omg haiii! 😂 A magician never reveals... but for a fellow fashionista, maybe I'll make an exception! ✨ What's your best find?",
        direction: 'received',
        timestamp: matches[8].matched_at.add({ minutes: 4 }),
        readAt: matches[8].matched_at.add({ minutes: 6 }),
      },
      {
        messageId: '3',
        message:
          'A vintage band tee that fits perfectly. Pure luck! We should totally hit the racks together sometime. You could teach me your ways.',
        direction: 'sent',
        timestamp: matches[8].matched_at.add({ minutes: 7 }),
        readAt: matches[8].matched_at.add({ minutes: 9 }),
      },
      {
        messageId: '4',
        message:
          'Yesss! Thrifting date! 🛍️ And after, we can model our new lewks. What are you doing Saturday?',
        direction: 'received',
        timestamp: matches[8].matched_at.add({ minutes: 15 }),
        readAt: matches[8].matched_at.add({ minutes: 18 }),
      },
    ],
  },
  // Aspen (34)
  // Personality: Home chef, perfectionist, warm but a bit reserved initially. Values quality.
  // Style: Detailed about food, thoughtful, takes a bit longer to reply.
  // Status: Proud of skills, looking for genuine appreciation.
  // State: Passionate about cooking, happy to share with the right person.
  // Goals: Find someone who appreciates good food, possibly a dinner date.
  // Opener Archetype: Direct Compliment (food-focused)
  {
    match: matches[9],
    messages: [
      {
        messageId: '1',
        message:
          'That braised short rib photo stopped me mid-scroll. You clearly know your way around a kitchen!',
        direction: 'sent',
        timestamp: matches[9].matched_at,
        readAt: matches[9].matched_at.add({ minutes: 4 }),
      },
      {
        messageId: '2',
        message:
          "Thank you! It's one of my favorites to make. There's something very satisfying about slow cooking. Do you enjoy cooking as well?",
        direction: 'received',
        timestamp: matches[9].matched_at.add({ hours: 2, minutes: 40 }),
        readAt: matches[9].matched_at.add({ hours: 4, minutes: 15 }),
      },
      {
        messageId: '3',
        message:
          "I do, but I'm more of an enthusiastic amateur. Your skills are definitely pro-level. Ever think of teaching a class?",
        direction: 'sent',
        timestamp: matches[9].matched_at.add({ hours: 2, minutes: 45 }),
        readAt: matches[9].matched_at.add({ hours: 2, minutes: 50 }),
      },
      {
        messageId: '4',
        message:
          'Perhaps not a formal class, but I do enjoy sharing what I know. Maybe a private lesson sometime? I provide the ingredients. 😉',
        direction: 'received',
        timestamp: matches[9].matched_at.add({ hours: 5, minutes: 10 }),
        readAt: matches[9].matched_at.add({ hours: 7, minutes: 45 }),
      },
    ],
  },
  // Sebastian (29)
  // Personality: Grad student, stressed but driven, intellectual. Values stimulating conversation.
  // Style: Academic but can be casual, uses dry humor.
  // Status: Equal but busy, appreciates understanding.
  // State: Overwhelmed by studies but making time for connection.
  // Goals: Study break conversations, intellectual sparring partner.
  // Opener Archetype: Humorous Approach (shared experience - app fatigue)
  {
    match: matches[10],
    messages: [
      {
        messageId: '1',
        message:
          "Alright, I'll bite. Your profile mentions 'existential dread and good coffee.' Which one are we tackling first? 😉",
        direction: 'sent',
        timestamp: matches[10].matched_at,
        readAt: matches[10].matched_at.add({ minutes: 2 }),
      },
      {
        messageId: '2',
        message:
          "Coffee first, always. Dread is better caffeinated. What's your preferred method of staving off the void?",
        direction: 'received',
        timestamp: matches[10].matched_at.add({ hours: 1, minutes: 55 }),
        readAt: matches[10].matched_at.add({ hours: 2, minutes: 30 }),
      },
      {
        messageId: '3',
        message:
          "Usually a combination of dark humor and even darker chocolate. So, what flavor of existential dread are we talking? The 'heat death of the universe' kind or the 'did I leave the stove on' kind?",
        direction: 'sent',
        timestamp: matches[10].matched_at.add({ hours: 2 }),
        readAt: matches[10].matched_at.add({ hours: 2, minutes: 32 }),
      },
      {
        messageId: '4',
        message:
          "Lately, it's been a robust 'imposter syndrome meets looming dissertation deadline' blend. You know, the classics.",
        direction: 'received',
        timestamp: matches[10].matched_at.add({ hours: 4, minutes: 20 }),
        readAt: matches[10].matched_at.add({ hours: 5, minutes: 45 }),
      },
    ],
  },
  // Walter (42)
  // Personality: Music collector, nostalgic, a bit jaded by dating but still hopeful. Values authenticity.
  // Style: Enthusiastic about music, knowledgeable, can be a bit cynical about dating.
  // Status: Proud expert in music, cautious in relationships.
  // State: Happy to share collection, wary of superficial connections.
  // Goals: Find music appreciator, genuine connection.
  // Opener Archetype: Vulnerable Admission / Shared Experience (dating fatigue)
  {
    match: matches[11],
    messages: [
      {
        messageId: '1',
        message:
          "That vinyl collection is seriously impressive. But real talk: how many times have you explained what a 'deep cut' is on this app?",
        direction: 'sent',
        timestamp: matches[11].matched_at,
        readAt: matches[11].matched_at.add({ minutes: 6 }),
      },
      {
        messageId: '2',
        message:
          "Ha! More times than I've spun a record this week. It's a labor of love, both the collection and the explanations. What's a song you consider a personal 'deep cut'?",
        direction: 'received',
        timestamp: matches[11].matched_at.add({ hours: 3, minutes: 10 }),
        readAt: matches[11].matched_at.add({ hours: 5, minutes: 45 }),
      },
      {
        messageId: '3',
        message:
          "Ooh, good question. Maybe 'Pink Moon' by Nick Drake. Simple, but it gets me every time. What's the pride of your collection?",
        direction: 'sent',
        timestamp: matches[11].matched_at.add({ hours: 3, minutes: 15 }),
        readAt: matches[11].matched_at.add({ hours: 5, minutes: 47 }),
      },
    ],
  },
  // Josh (34)
  // Personality: Dog dad, friendly, outdoorsy, straightforward. Values loyalty.
  // Style: Casual, dog photos, direct but warm.
  // Status: Very approachable, looking for genuine connection.
  // State: Happy with life, wants to share it.
  // Goals: Dog park dates, potential long-term partner.
  // Opener Archetype: Forward Invitation (activity-based, dog-focused)
  {
    match: matches[12],
    messages: [
      {
        messageId: '1',
        message:
          'Okay, your dog is officially my new favorite influencer. 🤩 My pup and I are always looking for new trails - any recommendations?',
        direction: 'sent',
        timestamp: matches[12].matched_at,
        readAt: matches[12].matched_at.add({ minutes: 2 }),
      },
      {
        messageId: '2',
        message:
          'Haha, Max says thank you! He recommends Cougar Mountain, lots of good smells. What kind of adventure buddy do you have?',
        direction: 'received',
        timestamp: matches[12].matched_at.add({ hours: 1, minutes: 15 }),
        readAt: matches[12].matched_at.add({ hours: 1, minutes: 45 }),
      },
      {
        messageId: '3',
        message:
          "A hyperactive border collie named Skye! She'd love Cougar Mountain. We should coordinate a pack walk sometime.",
        direction: 'sent',
        timestamp: matches[12].matched_at.add({ hours: 1, minutes: 20 }),
        readAt: matches[12].matched_at.add({ hours: 1, minutes: 25 }),
      },
    ],
  },
  // Robin (44)
  // Personality: Gardener, patient, nurturing, grounded. Values growth and nature. (Strong values)
  // Style: Thoughtful, detailed, warm, uses nature metaphors.
  // Status: Wise mentor type, looking for calm connection.
  // State: Content, peaceful.
  // Goals: Share gardening joy, find a like-minded companion.
  // Opener Archetype: Authentic Curiosity (values-based)
  {
    match: matches[13],
    messages: [
      {
        messageId: '1',
        message:
          "Your garden looks like such a sanctuary. What's the most important lesson it has taught you?",
        direction: 'sent',
        timestamp: matches[13].matched_at,
        readAt: matches[13].matched_at.add({ minutes: 7 }),
      },
      {
        messageId: '2',
        message:
          "Patience, definitely. And that everything is connected. It's a good reminder in this chaotic world. What brings you peace?",
        direction: 'received',
        timestamp: matches[13].matched_at.add({ hours: 5, minutes: 30 }),
        readAt: matches[13].matched_at.add({ hours: 8, minutes: 15 }),
      },
      {
        messageId: '3',
        message:
          "That's beautiful. For me, it's usually a long walk in nature or getting lost in a good book. Your garden seems to combine the best of both.",
        direction: 'sent',
        timestamp: matches[13].matched_at.add({ hours: 5, minutes: 40 }),
        readAt: matches[13].matched_at.add({ hours: 8, minutes: 17 }),
      },
    ],
  },
  // Phoenix (25)
  // Personality: Artist, creative, expressive, a bit intense. Values passion. (Spicy, strong values)
  // Style: Abstract, poetic, sometimes uses unconventional phrasing.
  // Status: Confident in art, looking for someone who 'gets' them.
  // State: Inspired, looking for a muse or collaborator.
  // Goals: Find art appreciator, passionate connection.
  // Opener Archetype: Flirty Tease / Intriguing Question (artistic & suggestive)
  {
    match: matches[14],
    messages: [
      {
        messageId: '1',
        message:
          'Your art has such a raw energy. What are you trying to scream into the void with it? And... are you as intense off the canvas? 🔥',
        direction: 'sent',
        timestamp: matches[14].matched_at,
        readAt: matches[14].matched_at.add({ minutes: 1 }),
      },
      {
        messageId: '2',
        message:
          "The void doesn't listen, but I scream anyway. It's about truth, unfiltered. And yes, intensity is my default setting. Can you handle it?",
        direction: 'received',
        timestamp: matches[14].matched_at.add({ minutes: 42 }),
        readAt: matches[14].matched_at.add({ minutes: 48 }),
      },
      {
        messageId: '3',
        message:
          'I thrive on intensity. And truth. What kind of truth are you painting these days? And when can I experience this default setting in person?',
        direction: 'sent',
        timestamp: matches[14].matched_at.add({ minutes: 47 }),
        readAt: matches[14].matched_at.add({ minutes: 50 }),
      },
      {
        messageId: '4',
        message:
          'The truth of desire, of breaking free. My studio is my sanctuary. Only the worthy are invited. Prove your worth.',
        direction: 'received',
        timestamp: matches[14].matched_at.add({ hours: 2, minutes: 15 }),
        readAt: matches[14].matched_at.add({ hours: 2, minutes: 25 }),
      },
    ],
  },
  // Marty (40)
  // Personality: Biker, rugged, independent, surprisingly warm. Values freedom.
  // Style: Brief but friendly, uses some biker slang.
  // Status: Cool older brother vibe, not looking for drama.
  // State: Enjoying freedom, open to companionship on the road.
  // Goals: Riding companion, easygoing connection.
  // Opener Archetype: Shared Experience (hypothetical adventure)
  {
    match: matches[15],
    messages: [
      {
        messageId: '1',
        message:
          "That bike looks like it's got some stories. If you could take it on one dream road trip, where would you go?",
        direction: 'sent',
        timestamp: matches[15].matched_at,
        readAt: matches[15].matched_at.add({ minutes: 8 }),
      },
      {
        messageId: '2',
        message:
          "Route 66, end to end. Classic, I know, but it's a legend for a reason. You a road trip fan?",
        direction: 'received',
        timestamp: matches[15].matched_at.add({ hours: 3, minutes: 12 }),
        readAt: matches[15].matched_at.add({ hours: 6, minutes: 30 }),
      },
      {
        messageId: '3',
        message:
          "Absolutely. The more scenic and less planned, the better. What's the most unexpected thing you've seen on two wheels?",
        direction: 'sent',
        timestamp: matches[15].matched_at.add({ hours: 3, minutes: 18 }),
        readAt: matches[15].matched_at.add({ hours: 6, minutes: 32 }),
      },
    ],
  },
  // Martin (36)
  // Personality: Baker, meticulous, warm, generous. Values craft and sharing.
  // Style: Detailed about process, enthusiastic, friendly.
  // Status: Proud teacher, enjoys sharing his passion.
  // State: Happy to share, looking for appreciative connection.
  // Goals: Baking partner, someone to share treats with.
  // Opener Archetype: Direct Compliment (food-focused, with an ask)
  {
    match: matches[16],
    messages: [
      {
        messageId: '1',
        message:
          "Okay, I'm officially obsessed with your baking photos. That sourdough looks like a work of art! What's your secret?",
        direction: 'sent',
        timestamp: matches[16].matched_at,
        readAt: matches[16].matched_at.add({ minutes: 5 }),
      },
      {
        messageId: '2',
        message:
          'Haha, thank you! The secret is a very demanding starter named Clint Yeastwood. And patience. Lots of patience. Do you bake?',
        direction: 'received',
        timestamp: matches[16].matched_at.add({ hours: 2, minutes: 5 }),
        readAt: matches[16].matched_at.add({ hours: 3, minutes: 40 }),
      },
      {
        messageId: '3',
        message:
          'Clint Yeastwood! Amazing. I try, but my bread usually ends up... rustic. Any chance Clint takes apprentices?',
        direction: 'sent',
        timestamp: matches[16].matched_at.add({ hours: 2, minutes: 10 }),
        readAt: matches[16].matched_at.add({ hours: 3, minutes: 42 }),
      },
    ],
  },
  // Zephyr (26)
  // Personality: Hiker, nature lover, minimalist, introspective. Values peace and solitude but open to quiet company.
  // Style: Reflective, poetic, sometimes short, appreciates silence.
  // Status: Equal but experienced in their domain, not looking for loud personalities.
  // State: At peace, seeking calm connection.
  // Goals: Trail companion, someone to share quiet moments with.
  // Opener Archetype: Authentic Curiosity (nature/philosophy based)
  {
    match: matches[17],
    messages: [
      {
        messageId: '1',
        message:
          "Your hiking pictures are so serene. What's a sound from nature you wish you could bottle up and keep?",
        direction: 'sent',
        timestamp: matches[17].matched_at,
        readAt: matches[17].matched_at.add({ minutes: 9 }),
      },
      {
        messageId: '2',
        message: 'The wind through old-growth pines. Or maybe just silence. What about you?',
        direction: 'received',
        timestamp: matches[17].matched_at.add({ hours: 6, minutes: 22 }),
        readAt: matches[17].matched_at.add({ hours: 9, minutes: 45 }),
      },
      {
        messageId: '3',
        message:
          "The sound of a distant waterfall. There's a trail near me with one, it's my go-to for clearing my head. Do you have a favorite 'thinking spot' outdoors?",
        direction: 'sent',
        timestamp: matches[17].matched_at.add({ hours: 6, minutes: 28 }),
        readAt: matches[17].matched_at.add({ hours: 9, minutes: 47 }),
      },
      {
        messageId: '4',
        message:
          'A particular bend in the river, just before sunset. The light is... transformative. Perhaps I could show you.',
        direction: 'received',
        timestamp: matches[17].matched_at.add({ hours: 26 }),
        readAt: matches[17].matched_at.add({ hours: 28, minutes: 30 }),
      },
    ],
  },
  // Erma (34)
  // Personality: Potter, artistic, grounded, tactile. Values craftsmanship and authenticity.
  // Style: Thoughtful, descriptive of process, warm.
  // Status: Confident creator, looking for genuine appreciation.
  // State: Centered, enjoys sharing her craft.
  // Goals: Share craft, find someone who appreciates handmade things.
  // Opener Archetype: Direct Compliment (art-focused, with curiosity)
  {
    match: matches[18],
    messages: [
      {
        messageId: '1',
        message:
          "The texture in your pottery is incredible! It makes me want to reach out and touch it. What's your favorite part of the process?",
        direction: 'sent',
        timestamp: matches[18].matched_at,
        readAt: matches[18].matched_at.add({ minutes: 6 }),
      },
      {
        messageId: '2',
        message:
          "Thank you. For me, it's the centering. Bringing the clay into balance. It's very meditative. Have you ever worked with clay?",
        direction: 'received',
        timestamp: matches[18].matched_at.add({ hours: 4, minutes: 33 }),
        readAt: matches[18].matched_at.add({ hours: 7, minutes: 20 }),
      },
      {
        messageId: '3',
        message:
          'Only in a high school art class, and I mostly made lopsided ashtrays! Yours are true art. Do you sell your pieces anywhere?',
        direction: 'sent',
        timestamp: matches[18].matched_at.add({ hours: 4, minutes: 38 }),
        readAt: matches[18].matched_at.add({ hours: 7, minutes: 22 }),
      },
    ],
  },
  // Clyde (25)
  // Personality: Skater, energetic, playful, a bit of a show-off but charming. Values freedom and skill. (Spicy)
  // Style: Casual, slang, quick, uses emojis.
  // Status: Cool kid, confident, looking for fun.
  // State: Having fun, looking for an audience or partner in crime.
  // Goals: Skate buddy, fun/flirty connection.
  // Opener Archetype: Flirty Tease / Playful Challenge (skill-based & suggestive)
  {
    match: matches[19],
    messages: [
      {
        messageId: '1',
        message:
          "Damn, those skate vids are sick! 🛹 You got moves. Bet you're smooth in other ways too, huh? 😉",
        direction: 'sent',
        timestamp: matches[19].matched_at,
        readAt: matches[19].matched_at.add({ minutes: 1 }),
      },
      {
        messageId: '2',
        message:
          'Yo, thanks! 😎 Gotta keep it smooth on and off the board. You skate? Or just an admirer? 😏',
        direction: 'received',
        timestamp: matches[19].matched_at.add({ minutes: 2 }),
        readAt: matches[19].matched_at.add({ minutes: 3 }),
      },
      {
        messageId: '3',
        message:
          "Definitely an admirer of skills like yours. Wouldn't mind a private lesson though. Think you could handle teaching a total beginner?",
        direction: 'sent',
        timestamp: matches[19].matched_at.add({ minutes: 4 }),
        readAt: matches[19].matched_at.add({ minutes: 5 }),
      },
      {
        messageId: '4',
        message:
          'For sure! Patience is my middle name... sometimes. 😜 We could start with the basics. Like how to fall without messing up that pretty face. Meet up at the park this week?',
        direction: 'received',
        timestamp: matches[19].matched_at.add({ minutes: 45 }),
        readAt: matches[19].matched_at.add({ minutes: 48 }),
      },
      {
        messageId: '5',
        message: "You're on. But if I get good, you owe me a victory dinner. 🍕",
        direction: 'sent',
        timestamp: matches[19].matched_at.add({ minutes: 47 }),
        readAt: matches[19].matched_at.add({ minutes: 49 }),
      },
      {
        messageId: '6',
        message: "Deal. But if you bail hard, dinner's on you and I get to kiss it better. 😉",
        direction: 'received',
        timestamp: matches[19].matched_at.add({ hours: 1, minutes: 5 }),
        readAt: matches[19].matched_at.add({ hours: 1, minutes: 8 }),
      },
    ],
  },
  // Sherri (42)
  // Personality: Mixologist, sophisticated, confident, enjoys good company. Values quality experiences. (Strong values - quality)
  // Style: Witty, articulate, can be a bit direct but charming.
  // Status: Experienced dater, knows what she wants.
  // State: Enjoying life, looking for an equal partner for fun outings.
  // Goals: Find someone to share good cocktails and conversation with.
  // Opener Archetype: Confident Assertion / Forward Invitation (taste-based)
  {
    match: matches[20],
    messages: [
      {
        messageId: '1',
        message:
          "Your profile has 'impeccable taste' written all over it. As a fellow connoisseur, what's the one cocktail you think everyone should master?",
        direction: 'sent',
        timestamp: matches[20].matched_at,
        readAt: matches[20].matched_at.add({ minutes: 4 }),
      },
      {
        messageId: '2',
        message:
          "Intriguing question! I'd say a perfectly balanced Daiquiri. Simple, but so easy to get wrong. What's your signature pour?",
        direction: 'received',
        timestamp: matches[20].matched_at.add({ hours: 2, minutes: 25 }),
        readAt: matches[20].matched_at.add({ hours: 4, minutes: 10 }),
      },
      {
        messageId: '3',
        message:
          'A classic Old Fashioned, done right. We should definitely compare notes over a few meticulously crafted drinks. Know any spots that meet our high standards?',
        direction: 'sent',
        timestamp: matches[20].matched_at.add({ hours: 2, minutes: 30 }),
        readAt: matches[20].matched_at.add({ hours: 4, minutes: 12 }),
      },
      {
        messageId: '4',
        message:
          'I know a hidden gem that might just impress you. Are you free to be impressed this Friday evening?',
        direction: 'received',
        timestamp: matches[20].matched_at.add({ hours: 5, minutes: 10 }),
        readAt: matches[20].matched_at.add({ hours: 6, minutes: 45 }),
      },
    ],
  },
]

const seed = seedMessages.map(
  (conversation) => [conversation.match.matchId, conversation] as [string, Conversation],
)

export const useMessagesStore = defineStore('messages', () => {
  const conversations = ref<Map<string, Conversation>>(new Map(seed))
  const conversationsSorted = computed(() =>
    Array.from(conversations.value.values()).toSorted((a, b) => {
      const tsA = a.messages.at(0)?.timestamp ?? a.match.matched_at
      const tsB = b.messages.at(0)?.timestamp ?? b.match.matched_at
      return tsB.epochMilliseconds - tsA.epochMilliseconds
    }),
  )

  return { conversations, conversationsSorted }
})
