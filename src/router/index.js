import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import UserProfile from '../views/UserProfile.vue';

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
    component: () => import(/* webpackChunkName: "AddTest" */ '../views/AddTest.vue'),
  },
  {
    path: '/addtest2',
    name: 'AddTest2',
    component: () => import(/* webpackChunkName: "AddTestZ" */ '../views/AddTest2.vue'),
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
