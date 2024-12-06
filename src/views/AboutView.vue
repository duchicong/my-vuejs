<script lang="ts">
import CButton from '../components/Button/button.vue'

export default {
  components: {
    CButton,
  },
  props: ['name'],
  mounted() {
    document.title = 'About Page';
  }
}
</script>

<template>
  <div class="about">
    <h1>This is about page</h1>
    <CButton loading border>hello</CButton>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
