<template>
  <main>
    <h1 class="title">Panier</h1>

    <p v-if="cart.length === 0">Panier vide</p>

    <div v-else>
      <div class="cart-list">
        <CartItem v-for="dish in cart" :key="dish.id" :dish="dish" @changeAmount="changeAmount" />
      </div>

      <div class="cart-footer">
        <h2>Total : {{ total }} €</h2>

        <button @click="order" class="order-btn">Commander</button>
      </div>
    </div>

    <Toast v-if="showToast" :message="message" />
  </main>
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
    localStorage.setItem("cart", JSON.stringify(cart.value));
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
  orders.value.unshift({
    id: Date.now(),
    dishs: [...cart.value],
    ready: false,
  });
  localStorage.setItem("orders", JSON.stringify(orders.value));
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

<style>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.cart-footer {
  margin-top: 30px;
  padding: 15px;

  background: #eaf2ff;
  border: 1px solid #b9d0ff;
  border-radius: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.cart-footer h2 {
  font-size: 20px;
  color: #1e3a8a;
  margin: 0;
}

.order-btn {
  background: #2563eb;
  color: white;

  border: none;
  padding: 10px 18px;
  border-radius: 10px;

  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s ease;
}

.order-btn:hover {
  background: #1d4ed8;
  transform: scale(1.05);
}

.order-btn:active {
  transform: scale(0.97);
}

.order-btn:focus {
  outline: 2px solid #93c5fd;
  outline-offset: 2px;
}
</style>
