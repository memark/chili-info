<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<template>
  <h1>Chili Info</h1>

  <input v-model="name" placeholder="Search for chili" />

  <p>{{ name }}</p>
</template>
