<template>
  <div
    :class="['container p-8 mx-auto xl:px-0']" v-bind="$attrs">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'container',
    props: ['class'],
    inheritAttrs: true
  }
</script>