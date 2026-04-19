<template>
  <div>
    <h3>Commande {{ order.id }}</h3>

    <p v-for="dish in order.dishs">{{ dish.name }} x{{ dish.quantity }}</p>

    <button v-if="!order.ready" @click="order.ready = true">Marquer prête</button>

    <p v-else>Prête</p>
  </div>
</template>

<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
});
</script>
