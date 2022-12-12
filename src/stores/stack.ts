import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useStackStore = defineStore('stackStore', {
  state: () => ({
    stack: useLocalStorage('stack', [] as number[]),
  }),

  actions: {
    addToStack (number: number) {
      if (this.stack.includes(number)) return false
      this.stack.push(number)
    }
  }
})
