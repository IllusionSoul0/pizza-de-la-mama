<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation :route="$route.fullPath"></Navigation>
  <RouterView />
</template>

<style scoped></style>
