<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

export default {
  mounted() {
    document.title = 'Home Page'
  }
}
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
