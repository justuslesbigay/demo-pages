import { createRouter, createWebHistory } from 'vue-router'
import MatchesView from '../views/MatchesView.vue'
import MessagesView from '../views/MessagesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'matches',
      component: MatchesView,
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView,
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
