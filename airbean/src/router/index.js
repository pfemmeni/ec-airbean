import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VartKaffe from "../views/VartKaffe.vue";
import Meny from "../views/Meny.vue";
import MinProfil from "../views/MinProfil.vue";
import OrderStatus from "../views/OrderStatus.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vart-kaffe",
    name: "Vårt Kaffe",
    component: VartKaffe,
  },
  {
    path: "/meny",
    name: "Meny",
    component: Meny,
  },
  {
    path: "/min-profil",
    name: "Min Profil",
    component: MinProfil,
  },
  {
    path: "/order-status",
    name: "Order Status",
    component: OrderStatus,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
