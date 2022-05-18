import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
// import AboutUs from "../views/AboutUs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesPage.vue"),
    },
  ],
});

export default router;
