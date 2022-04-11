import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import LoginLayout from '@/layouts/AppLoginLayout.vue'
import Login from '@/views/PageLogin.vue'
import Home from '@/views/PageHome.vue'
import Settings from '@/views/PageSettings.vue'
import Charts from '@/views/PageCharts.vue'
import Records from '@/views/PageRecords.vue'
import Forms from '@/views/PageForms.vue'
import Management from '@/views/PageManagement.vue'
import History from '@/views/PageHistory.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { layout: LoginLayout }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/management',
      name: 'Management',
      component: Management
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})

let authStore
const publicRoutes = ['Login']

router.beforeEach((to, from, next) => {
  if (!authStore) {
    authStore = useAuthStore()
  }

  if (!authStore.authed) {
    if (!publicRoutes.includes(to.name)) {
      return next({ name: 'Login' })
    }
  } else if (to.name === 'Login') {
    return next({ name: 'Home' })
  }

  next()
})

export default router
