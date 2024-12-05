import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  console.log('count ', count)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
