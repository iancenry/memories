import { createRouter, createWebHistory } from 'vue-router';

import AuthLayout from '../components/AuthLayout.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';

import HomeLayout from '../components/HomeLayout.vue';
import Home from '../views/HomeView.vue';
const Profile = import('../views/ProfileView.vue');

const routes = [
  {
    path: '/auth',
    redirect: { name: 'login' },
    name: 'auth',
    component: AuthLayout,
    meta: { isAuth: true },
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: 'register',
        name: 'register',
        component: Register,
      },
    ],
  },
  {
    path: '/',
    name: 'homeLayout',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
