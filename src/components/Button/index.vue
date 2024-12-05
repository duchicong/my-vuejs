<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import { defineStore } from 'pinia'
import { sizeClass } from './helper'

defineComponent({
  name: 'cButton',
  props: {
    size: {
      type: [String] as PropType<'large' | 'medium' | 'small'>,
      required: false,
      default: 'medium',
    },
    color: {
      type: [String] as PropType<
        'danger' | 'warning' | 'success' | 'info' | 'link' | 'text' | string
      >,
      required: false,
      default: 'info',
    },
    border: {
      type: [Boolean],
      required: false,
      default: false,
    },
    suffixIcon: {
      type: [Object, String] as PropType<VNode | string>,
      required: false,
    },
    prefixIcon: {
      type: [Object, String] as PropType<VNode | string>,
      required: false,
    },
  },
  inheritAttrs: true,
})

export const usePropsButton = defineStore('c-button', () => {
  const count = ref({
    size: 'medium',
  })
  const doubleCount = computed(() => count.value * 2)
  console.log('count ', count)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export default {
  name: 'c-button',
  methods: {
    getSize: sizeClass,
  },
}
</script>

<template>
  <button
    :class="[
      'c-button p-2 text-center flex items-center text-lg',
      getSize(size),
      color,
      { 'border rounded-sm': border },
    ]"
    v-bind="$attrs"
  >
    <!-- Prefix Icon -->
    <span v-if="prefixIcon" class="prefix-icon" v-html="prefixIcon"></span>

    <!-- content: html, text -->
    <slot />
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
