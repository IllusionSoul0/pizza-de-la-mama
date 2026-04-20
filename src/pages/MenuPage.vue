<template>
  <main>
    <h1 class="title">Notre Menu</h1>

    <div class="menu-grid">
      <DishItem v-for="dish in menu" :key="dish.id" :dish="dish" @addToCart="addToCart">
        <span v-if="getDishQuantity(dish.id) > 0" class="cart-badge">Dans le panier : {{ getDishQuantity(dish.id) }}</span>
      </DishItem>
    </div>

    <Toast v-if="showToast" :message="message" />
  </main>
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

<style>
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.cart-badge {
  display: inline-block;
  margin-top: 10px;

  background: #dbeafe;
  color: #1e3a8a;

  padding: 6px 10px;
  border-radius: 999px;

  font-size: 13px;
  font-weight: bold;
}
</style>
