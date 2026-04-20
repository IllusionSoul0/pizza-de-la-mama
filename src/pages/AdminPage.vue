<template>
  <main>
    <h1 class="title">Commandes</h1>

    <p v-if="orders.length === 0">Aucune commande</p>

    <div class="order-list">
      <OrderCard v-for="order in orders" :key="order.id" :order="order" @setReady="setReady"></OrderCard>
    </div>
  </main>
</template>

<script setup>
import { inject } from "vue";
import OrderCard from "@/components/OrderCard.vue";

const orders = inject("orders");

function setReady(order) {
  order.ready = true;
  localStorage.setItem("orders", JSON.stringify(orders.value));
}
</script>

<style>
.order-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
