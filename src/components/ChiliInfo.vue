<script setup lang="ts">
import { ref, computed, watch } from "vue";

const name = ref("");

const chilis = ref([
  { text: "Aji Guyana" },
  { text: "Aji Pineapple" },
  { text: "Habanero Lemon" },
]);
</script>

<template>
  <h1>Chili Info</h1>

  <input v-model="name" placeholder="Search for chili" />

  <p>{{ name }}</p>

  <h2>Found chilis</h2>

  <ul>
    <li v-for="chili in chilis" :key="chili.id">
      {{ chili.text }}
    </li>
  </ul>
</template>
