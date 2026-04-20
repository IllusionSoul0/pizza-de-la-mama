<script setup>
import Navigation from "./components/Navigation.vue";
import { ref, provide, onMounted } from "vue";

const cart = ref([]);
const orders = ref([]);

onMounted(() => {
  const savedCart = localStorage.getItem("cart");
  const savedOrders = localStorage.getItem("orders");

  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
  if (savedOrders) {
    orders.value = JSON.parse(savedOrders);
  }
});

provide("cart", cart);
provide("orders", orders);
</script>

<template>
  <Navigation :route="$route.fullPath"></Navigation>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

nav a {
  margin: 0 0.5rem;
  color: black;
  text-decoration: none;
}

nav a:hover,
nav a.router-link-exact-active {
  color: crimson;
  text-decoration: underline;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
