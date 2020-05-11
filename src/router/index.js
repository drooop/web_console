import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
import ConsoleMain from '@/components/webConsole/ConsoleMain.vue'
import ConsoleConfig from '@/components/webConsole/ConsoleConfig.vue'
import Console from '@/components/webConsole/Console.vue'
import newConsole from '@/components/webConsole/newConsole.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/newConsole', component: newConsole },
      { path: '/welcome', component: Welcome },
      { path: '/consoleMain', component: ConsoleMain },
      { path: '/consoleConfig', component: ConsoleConfig },
      { path: '/console', component: Console }
      
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()

  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
