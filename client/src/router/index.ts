import { createRouter, createWebHistory } from 'vue-router'

// レイアウト
import TheHeader from '@/components/layouts/TheHeader.vue'

// ページ
import HomeView from '../views/HomeView.vue'
import PlayerList from '@/views/PlayerList.vue'
import FormationSetting from '@/views/FormationSetting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TheHeader,
      children: [{ path: '', component: HomeView }],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/playerlist',
      component: TheHeader,
      children: [{ path: '', component: PlayerList }],
    },
    {
      path: '/formation',
      component: TheHeader,
      children: [{ path: '', component: FormationSetting }],
    },
  ],
})

export default router
