import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Cadastro from "../views/Cadastro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    // path: "/mariana/:dado",
    path: "/mariana",
    name: "Mariana",
    component: Cadastro,
    children: [
      {
        path: "albuquerque", // rotas filhas não podem ter '/' no início
        name: "Albuquerque",
        component: About,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
