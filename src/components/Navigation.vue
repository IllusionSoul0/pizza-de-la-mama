<script setup>
import { computed } from 'vue';

const props = defineProps({
  route: {
    type: String,
    required: true,
  },
});

const currentPage = computed(() => {
    return (linkName) => props.route === linkName ? {color: "red"} : {}
    })
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" :style="currentPage('/')">Acceuil</RouterLink>
      <RouterLink to="/menu" :style="currentPage('/menu')">Menu</RouterLink>
      <RouterLink to="/cart" :style="currentPage('/cart')">Panier</RouterLink>
      <RouterLink to="/admin" :style="currentPage('/admin')">Admin</RouterLink>
    </nav>
  </header>
</template>
