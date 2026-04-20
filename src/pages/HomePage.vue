<template>
  <main>
    <h1 class="title">Bienvenue à la Pizza de la Mama</h1>
    <p>Pizzaria tenue de génération en génération depuis 2025, les meilleurs pizzas de toute la Micronésie</p>

    <RouterLink to="/menu"><button class="menu-btn">Voir le menu</button></RouterLink>
  </main>
</template>

<script setup></script>

<style>
.menu-btn {
  background: #2563eb;
  color: white;

  margin-top: 300px;
  padding: 12px 20px;
  border-radius: 10px;

  text-decoration: none;
  font-weight: bold;

  border: 0;

  transition: all 0.2s ease;
}

.menu-btn:hover {
  background: #1d4ed8;
  transform: scale(1.05);
}

.menu-btn:active {
  transform: scale(0.97);
}
</style>
