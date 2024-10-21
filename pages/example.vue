<script setup>
import { ref } from 'vue'
const greeting = ref('Hello ')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>