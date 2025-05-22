import { createRouter, createWebHistory } from 'vue-router'
import MatchesView from '../views/MatchesView.vue'
import MessagesIndexView from '../views/MessagesIndexView.vue'
import MatchMessagesView from '../views/MatchMessagesView.vue'
import ExploreView from '../views/ExploreView.vue'

const base = import.meta.env.PROD ? '/demo-pages/matches/dist/' : import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      path: '/matches',
      name: 'matches',
      component: MatchesView,
    },
    {
      path: '/messages',
      name: 'messages-index',
      component: MessagesIndexView,
    },
    {
      path: '/message/:matchId',
      name: 'match-messages',
      component: MatchMessagesView,
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView,
    },
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    */
  ],
})

export default router
