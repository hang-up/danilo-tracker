import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import UserProfile from '../views/UserProfile.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/adduser',
    name: 'AddUser',
    component: () => import(/* webpackChunkName: "AddUser" */ '../views/AddUser.vue'),
  },
  {
    path: '/addtest',
    name: 'AddTest',
    component: () => import(/* webpackChunkName: "AddTestZ" */ '../views/AddTest2.vue'),
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/userprofile/:tracks',
    name: 'Tracks',
    component: () => import(/* webpackChunkName: "Tracks" */ '../views/Tracks.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('current_user')) {
    store.commit('SET_CURRENT_USER', JSON.parse(localStorage.getItem('current_user')));
  }
  next();
});

export default router;
