<template>
<div> 
  <h3>{{ counter }}</h3>
  <button @click="increment">Increment</button>
</div>
</template>

<script lang="ts" setup>
   import { ref } from 'vue'
   const counter = ref(0)
   const increment = () => counter.value++
 </script>

<style scoped>

</style>