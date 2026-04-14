import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'Inicio',
      meta: { title: 'Inicio' },
    },
    {
      path: '/proyectos',
      component: ProjectsView,
      name: 'Proyectos',
      meta: { title: 'Proyectos' },
    },
    {
      path: '/sobre-mi',
      component: AboutView,
      name: 'Sobre mi',
      meta: { title: 'Sobre mi' },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const DEFAULT_TITLE = 'Portafolio'
  document.title = `${DEFAULT_TITLE} | ${to.meta.title}` || DEFAULT_TITLE
  next()
})

export default router
