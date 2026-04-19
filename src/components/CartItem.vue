<template>
  <div>
    <h3>{{ dish.name }}</h3>

    <button @click="emit('changeAmount', dish, -1)">-</button>

    {{ dish.quantity }}

    <button @click="emit('changeAmount', dish, 1)">+</button>
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
