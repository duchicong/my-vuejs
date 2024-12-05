<script lang="ts">
import cButton from '../components/Button/index.vue'

export default {
  components: {
    cButton,
  },
}
</script>

<template>
  <div class="about">
    <h1>This is about page</h1>
    <cButton border>hello</cButton>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
