import AdminPage from "@/pages/AdminPage.vue";
import CartPage from "@/pages/CartPage.vue";
import HomePage from "@/pages/HomePage.vue";
import MenuPage from "@/pages/MenuPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    { path: "/menu", component: MenuPage },
    { path: "/cart", component: CartPage },
    { path: "/admin", component: AdminPage },
  ],
});

export default router;
