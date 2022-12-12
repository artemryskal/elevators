import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useStackStore = defineStore('stackStore', {
  state: () => ({
    stack: useLocalStorage('stack', [] as number[]),
    transform: useLocalStorage('transform', 0),
    currentLevel: useLocalStorage('currentLevel', 1)
  }),

  actions: {
    addToStack (number: number) {
      if (this.stack.includes(number) ||
        number === this.currentLevel) return false

      this.stack.push(number)
      return true
    },
    goNextFloor () {
      if (!this.stack.length) return false

      // 100 - height of elevator
      this.currentLevel = this.stack[0]
      this.transform = -((this.currentLevel - 1) * 100)
    },
    removeCurrentFloor () {
      const index = this.stack.indexOf(this.currentLevel)
      if (index >= 0) this.stack.splice(index, 1)
    }
  }
})
