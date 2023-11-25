import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginView.vue';
const Register = () => import('../views/RegisterView.vue');

const routes = [
  {
    path: '/auth',
    redirect: { name: 'login' },
    name: 'auth',
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
