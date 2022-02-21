import Index from "@/components/Index/Index.vue";
import policy from "@/components/Other/PRIVACYPOLICY.vue";
import terms from "@/components/Other/Terms.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/policy",
    component: policy,
  },
  {
    path: "/terms",
    component: terms,
  },
  { path: "/", redirect: "/index" },
];
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  // base:'/mobile/',
  routes,
});

export default router;
