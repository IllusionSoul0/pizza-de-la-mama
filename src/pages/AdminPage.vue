<template>
  <div>
    <h2>Commandes</h2>

    <p v-if="orders.length === 0">Aucune commande</p>

    <OrderCard v-for="order in orders" :key="order.id" :order="order"></OrderCard>
  </div>
</template>

<script setup>
import { inject } from "vue";
import OrderCard from "@/components/OrderCard.vue";

const orders = inject("orders");
</script>
