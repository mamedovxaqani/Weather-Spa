import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage";
import ThisCityPage from "../views/ThisCityPage";

const routes = [
  {
    path: "/home-page",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/city/:name",
    name: "ThisCity",
    component: ThisCityPage,
    props: true,
  },
  {
    path: "/home-page",
    name: "backHome",
    redirect: { name: "HomePage" },
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
  base: process.env.BASE_URL,
});
