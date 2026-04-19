<template>
  <div>
    <h2>Notre Menu</h2>
    <DishItem v-for="dish in menu" :key="dish.id" :dish="dish" @addToCart="addToCart">
      <span v-if="getDishQuantity(dish.id) > 0">Dans le panier : {{ getDishQuantity(dish.id) }}</span>
    </DishItem>

    <Toast v-if="showToast" :message="message" />
  </div>
</template>

<script setup>
import menu from "@/data/menu";
import DishItem from "@/components/DishItem.vue";
import Toast from "@/components/Toast.vue";
import { inject, ref } from "vue";

const cart = inject("cart");

const showToast = ref(false);
const message = ref("");

function addToCart(dish) {
  const exist = cart.value.find((element) => element.id === dish.id);

  if (exist) {
    exist.quantity++;
  } else {
    cart.value.push({ ...dish, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart.value));

  message.value = dish.name + " ajouté !";
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, 2000);
}

function getDishQuantity(id) {
  const item = cart.value.find((dish) => dish.id === id);
  return item ? item.quantity : 0;
}
</script>
