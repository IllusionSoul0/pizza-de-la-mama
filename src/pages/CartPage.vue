<template>
  <div>
    <h2>Panier</h2>

    <p v-if="cart.length === 0">Panier vide</p>

    <CartItem v-for="dish in cart" :key="dish.id" :dish="dish" @changeAmount="changeAmount" />

    <h3>Total : {{ total }} €</h3>

    <button @click="order">Commander</button>

    <Toast v-if="showToast" :message="message" />
  </div>
</template>

<script setup>
import { inject, ref, watch } from "vue";
import CartItem from "@/components/CartItem.vue";
import Toast from "@/components/Toast.vue";

const cart = inject("cart");
const orders = inject("orders");

const showToast = ref(false);
const message = ref("");

const total = ref(cart.value.reduce((sum, dish) => (sum += dish.cost * dish.quantity), 0));

watch(
  cart,
  () => {
    total.value = cart.value.reduce((sum, dish) => (sum += dish.cost * dish.quantity), 0);
  },
  { deep: true },
);

function order() {
  if (cart.value.length === 0) {
    message.value = "La commande est vide";
    showToast.value = true;

    setTimeout(() => {
      showToast.value = false;
    }, 2000);
    return;
  }
  orders.value.push({
    id: Date.now(),
    dishs: [...cart.value],
    ready: false,
  });
  cart.value = [];
  message.value = "La commande a été validée";
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, 2000);
}

function changeAmount(dish, amount) {
  const dishInCart = cart.value.find((element) => element.id === dish.id);
  dishInCart.quantity += amount;
  if (dishInCart.quantity < 1) {
    cart.value = cart.value.filter((element) => element.id !== dishInCart.id);
  }
}
</script>
