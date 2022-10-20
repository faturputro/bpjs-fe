import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '@/layouts/default.vue';
import Dashboard from '@/layouts/dashboard.vue';
import NotFound from '@/views/404.vue';
import Login from '@/views/Login.vue';
import dashboardRoutes from './dashboard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: Default,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          title: 'E-Lib Login',
        },
      },
    ],
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/home',
    component: Dashboard,
    children: [...dashboardRoutes],
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
    meta: {
      title: 'Not Found',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
