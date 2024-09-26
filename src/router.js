import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import HeadLines from './pages/HeadLines.vue';
import SportNews from './pages/SportNews.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/headlines',
    name: 'HeadLines',
    component: HeadLines,
  },
  {
    path: '/sports',
    name: 'Sports',
    component: SportNews,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
