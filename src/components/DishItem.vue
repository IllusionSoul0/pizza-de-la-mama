<template>
  <div class="dish-card">
    <img :src="pathToImage" :alt="dish.name" />
    <h2>{{ dish.name }}</h2>
    <p class="description">{{ dish.description }}</p>
    <p class="price">{{ dish.cost }} €</p>
    <p v-if="dish.new" class="new-badge">Nouveau</p>

    <slot></slot>

    <button @click="emit('addToCart', dish)">Ajouter</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  dish: {
    type: Object,
    required: true,
  },
});

const pathToImage = computed(() => {
  const imageName = props.dish.name.toLowerCase().replace(/\s+/g, "-");

  return new URL(`../assets/pizza-image/${imageName}.jpg`, import.meta.url).href;
});

const emit = defineEmits(["addToCart"]);
</script>

<style>
.dish-card {
  background: #eaf2ff;
  border: 1px solid #b9d0ff;
  border-radius: 16px;

  padding: 18px;
  text-align: center;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  transition: all 0.25s ease;
}

.dish-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
}

.dish-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;

  border-radius: 12px;
  margin-bottom: 12px;
}

.dish-card h2 {
  color: #1e3a8a;
  margin-bottom: 8px;
}

.description {
  color: #475569;
  font-size: 14px;
  min-height: 40px;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #2563eb;
  margin: 10px 0;
}

.new-badge {
  display: inline-block;

  background: #fef3c7;
  color: #92400e;

  padding: 5px 10px;
  border-radius: 999px;

  font-size: 13px;
  font-weight: bold;

  margin-bottom: 10px;
}

.dish-card button {
  margin-top: 12px;

  background: #2563eb;
  color: white;

  border: none;
  padding: 10px 18px;
  border-radius: 10px;

  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s ease;
}

.dish-card button:hover {
  background: #1d4ed8;
  transform: scale(1.05);
}

.dish-card button:active {
  transform: scale(0.97);
}
</style>
