<template>
  <div class="order-card">
    <h2>Commande #{{ order.id }}</h2>

    <div class="dish-list">
      <p v-for="dish in order.dishs">{{ dish.name }} x{{ dish.quantity }}</p>
    </div>

    <button v-if="!order.ready" class="ready-btn" @click="emit('setReady', order)">Marquer prête</button>

    <p v-else class="ready-text">Prête</p>
  </div>
</template>

<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["setReady"]);
</script>

<style>
.order-card {
  background: #eaf2ff;
  border: 1px solid #b9d0ff;
  border-radius: 14px;

  padding: 18px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  transition: all 0.25s ease;
}

.order-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.order-card h2 {
  margin-bottom: 12px;
  font-size: 20px;
  color: #1e3a8a;
}

.dish-list {
  margin-bottom: 20px;
}

.dish-list p {
  margin: 4px 0;
  color: #334155;
}

.ready-btn {
  background: #2563eb;
  color: white;

  border: none;
  padding: 10px 16px;
  border-radius: 10px;

  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s ease;
}

.ready-btn:hover {
  background: #1d4ed8;
  transform: scale(1.04);
}

.ready-btn:active {
  transform: scale(0.97);
}

.ready-text {
  font-weight: bold;
  color: green;
  margin: 0;
}
</style>
