<template>
    <li v-for="dish in menu">
        <h1>{{ dish.name }}</h1>
    </li>
</template>

<script setup>
    import menu from '@/data/menu';
</script>