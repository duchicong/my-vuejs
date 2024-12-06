<script setup lang="ts">
import { computed } from 'vue'
import { sizeClass } from './helper'
import type { IButtonProps } from './button.interface';

const props = withDefaults(defineProps<IButtonProps>(), {
  size: 'medium',
  color: 'info',
  border: true,
  loading: false,
});

const getSizeClass = computed(() => sizeClass(props.size));
</script>


<template>
  <button
    :class="[
      'c-button p-2 text-center flex items-center text-lg',
      getSizeClass,
      props.color,
      { 'border rounded-sm': props.border, 'disabled cursor-not-allowed': props.loading },
    ]"
    v-bind="$attrs"
  >
    <!-- Prefix Icon -->
    <span v-if="prefixIcon" class="prefix-icon" v-html="prefixIcon"></span>

    <!-- content: html, text -->
    <span v-if="loading">loading...</span>
    <span v-else><slot /></span>
    <!-- Suffix Icon -->
    <span v-if="suffixIcon" class="suffix-icon" v-html="suffixIcon"></span>
  </button>
</template>

<style scoped>
.c-button {
  padding: 8px;
  border-radius: 4px;
}

.c-button.large {
  font-size: 1.25rem;
}

.c-button.medium {
  font-size: 1rem;
}

.c-button.small {
  font-size: 0.875rem;
}

.c-button.danger {
  color: red;
}

.c-button.warning {
  color: orange;
}

.c-button.success {
  color: green;
}

.c-button.info {
  color: blue;
}

.c-button.link {
  color: dodgerblue;
}

.c-button.text {
  color: black;
}

.c-button.border {
  border: 1px solid currentColor;
}

.prefix-icon,
.suffix-icon {
  display: inline-block;
  margin: 0 4px;
}
</style>
