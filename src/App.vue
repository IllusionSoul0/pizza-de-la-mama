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

p {
  text-align: center;
  color: #64748b;
  font-size: 18px;
  margin-top: 40px;
}

#app {
  min-height: 100vh;
  background: linear-gradient(180deg, #bcd0ee, #ffffff);
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  background: #cddefa;
  border-bottom: 1px solid #77a3fc;
}

nav a {
  margin: 0 10px;
  color: #1e3a8a;
  text-decoration: none;
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 8px;

  transition: 0.2s ease;
}

nav a:hover,
nav a.router-link-exact-active {
  background: #2563eb;
  color: white;
}

main {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.title {
  text-align: center;
  color: #1e3a8a;
  margin: 50px 0px;
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
