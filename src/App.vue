<script setup>
import Navigation from "./components/Navigation.vue";
import { ref, provide } from "vue";
const cart = ref([])

provide('cart', cart)
</script>

<template>
  <Navigation :route="$route.fullPath"></Navigation>
  <router-view v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </Transition>
  </router-view>
</template>

<style scoped></style>
