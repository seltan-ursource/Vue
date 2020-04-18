import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mutation from "../views/Mutations.vue";
import NProgress from "nprogress";
import NotFoundError from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mutations",
    name: "Mutation",
    component: Mutation
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/404",
    name: "404",
    component: NotFoundError
  },
  {
    path : "*",
    redirect :{name : "404"}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) =>{
  NProgress.start()
  next()
})

router.afterEach(() =>{
  NProgress.done()
})

export default router
