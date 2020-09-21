import Vue from "vue";
import VueRouter from "vue-router";
import Economic from "../views/Economic.vue";
import Education from "../views/Education.vue";
import Health from "../views/Health.vue";
import Housing from "../views/Housing.vue";
import Justice from "../views/Justice.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Economic",
    component: Economic,
  },
  {
    path: "#education",
    name: "Education",
    component: Education,
  },
  {
    path: "#health",
    name: "Health",
    component: Health,
  },
  {
    path: "#housing",
    name: "Housing",
    component: Housing,
  },
  {
    path: "#justice",
    name: "Justice",
    component: Justice,
  }
];

const router = new VueRouter({
  base:'/real-equity-events',
  mode: "history",
  routes,
});

export default router;
