import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/cv",
    name: "CurriculumVitae",
    component: () =>
      import(/* webpackChunkName: "cv" */ "../views/CurriculumVitae.vue"),
  },

  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue"),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
