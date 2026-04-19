<template>
  <div>
    

    <img :src="pathToImage" :alt="dish.name" />
    <h3>{{ dish.name }}</h3>
    <p>{{ dish.description }}</p>
    <p>{{ dish.cost }} €</p>
    <p v-if="dish.new">Nouveau</p>

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
