import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/adduser",
    name: "AddUser",
    component: () =>
      import(/* webpackChunkName: "AddUser" */ "../views/Adduser.vue")
  },
  {
    path: "/protocol",
    name: "Protocol",
    component: () =>
      import(/* webpackChunkName: "Protocol" */ "../views/Protocol.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
