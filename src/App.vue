<script setup>
import Navigation from "./components/Navigation.vue";
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
