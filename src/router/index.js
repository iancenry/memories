import { createRouter, createWebHistory } from 'vue-router';

import AuthLayout from '../components/AuthLayout.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';

const routes = [
  {
    path: '/auth',
    redirect: { name: 'login' },
    name: 'auth',
    component: AuthLayout,
    meta: { isAuth: true },
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
