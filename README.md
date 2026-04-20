# Pizza de la Mama – Gestion d’un Restaurant en Ligne

## Présentation

Ce projet est une application réalisée avec **Vue.js 3** dans le cadre d’un TP.

L’objectif est de créer un site de gestion d’un restaurant en ligne permettant :

- de consulter le menu
- d’ajouter des plats au panier
- de passer une commande
- de gérer les commandes côté administrateur

### Groupe

- Maxime CHAINTREAU
- Mathis DULLIN-GUIAS
- Nathan DUBREUIL
- Landry PIHOUR

---

# Fonctionnalités

## Accueil

- Présentation du restaurant
- Bouton d’accès au menu

## Menu

- Liste des plats disponibles
- Image, nom, description, prix
- Bouton **Ajouter au panier**
- Toast de confirmation
- Affichage du nombre déjà présent dans le panier

## Panier

- Liste des plats ajoutés
- Modifier quantité (+ / -)
- Calcul automatique du total
- Saisie obligatoire du nom client
- Validation de commande

## Gestion des commandes

- Liste des commandes passées
- Nom du client
- Détail des plats commandés
- Marquer une commande comme prête

---

# Technologies utilisées

- Vue.js 3
- Vue Router
- JavaScript
- HTML / CSS
- localStorage

---

# Concepts Vue.js utilisés

## Components

Application découpée en composants réutilisables :

- DishItem.vue
- CartItem.vue
- OrderCard.vue
- Toast.vue
- Navigation.vue

## Props

Transmission des données entre composants.

## Events / Emit

Communication enfant → parent :

- addToCart
- changeAmount
- setReady

## Directives

- `v-for`
- `v-if`
- `v-else`
- `v-bind`

## Slots

Personnalisation de `DishItem.vue`.

## Watchers

Surveillance du panier :

- calcul du total
- sauvegarde automatique

## Lifecycle Hook

- `onMounted()` pour charger les données sauvegardées.

## Provide / Inject

Partage global :

- panier
- commandes

## Vue Router

Navigation entre pages :

- `/`
- `/menu`
- `/cart`
- `/orders`
- `/admin`

---

# Sauvegarde des données

Les données sont conservées via **localStorage** :

- panier
- commandes

Même après rechargement de la page.

---

# Structure du projet

```text
src/
|── assets/
|    └── pizza-image
│── components/
│── pages/
│── data/
|    └── menu.js
│── router/
|    └── index.js
│── App.vue
│── main.js
```

---

# Lancer le projet

```bash
npm install
npm run dev
```

---
