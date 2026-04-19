<template>
  <div>
    <h2>Notre Menu</h2>
    <DishItem v-for="dish in menu" :key="dish.id" :dish="dish" @addToCart="addToCart">
      <span v-if="getDishQuantity(dish.id) > 0">Dans le panier : {{ getDishQuantity(dish.id) }}</span>
    </DishItem>
  </div>
</template>

<script setup>
import menu from "@/data/menu";
import DishItem from "@/components/DishItem.vue";
import { inject } from "vue";

const cart = inject("cart");

function addToCart(dish) {
  const exist = cart.value.find((element) => element.id === dish.id);

  if (exist) {
    exist.quantity++;
  } else {
    cart.value.push({ ...dish, quantity: 1 });
  }
}

function getDishQuantity(id) {
  const item = cart.value.find((dish) => dish.id === id);
  return item ? item.quantity : 0;
}
</script>
