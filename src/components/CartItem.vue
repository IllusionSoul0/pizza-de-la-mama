<template>
  <div class="cart-item-card">
    <p>{{ dish.name }}</p>

    <div class="cart-item-amount">
      <button @click="emit('changeAmount', dish, -1)">-</button>

      <span>{{ dish.quantity }}</span>

      <button @click="emit('changeAmount', dish, 1)">+</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dish: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["changeAmount"]);
</script>

<style>
.cart-item-card {
  padding: 16px 20px;
  border-radius: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #eaf2ff;
  border: 1px solid #b9d0ff;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  transition: all 0.25s ease;
}

.cart-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
}

.cart-item-card p {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #1e3a8a;
}

.cart-item-amount {
  display: flex;
  align-items: center;
  gap: 10px;

  background: #c3d1e4;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
}

.cart-item-amount button {
  width: 34px;
  height: 34px;

  border: none;
  border-radius: 50%;

  background: #2563eb;
  color: white;
  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  transition: all 0.2s ease;
}

.cart-item-amount button:hover {
  background: #1d4ed8;
  transform: scale(1.1);
}

.cart-item-amount button:active {
  transform: scale(0.95);
}

.cart-item-amount button:focus {
  outline: 2px solid #93c5fd;
  outline-offset: 2px;
}
</style>
