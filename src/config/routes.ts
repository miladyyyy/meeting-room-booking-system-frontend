import { defineConfig } from '@umijs/max'
const routes: Parameters<typeof defineConfig>[0]['routes'] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: './Login',
    layout: false,
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
]

export default routes
