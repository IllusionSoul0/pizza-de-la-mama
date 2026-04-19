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
  <router-view v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </Transition>
  </router-view>
</template>

<style scoped></style>
