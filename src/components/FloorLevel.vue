<template>
  <li class="level">
    <p class="level__number">
      {{ number }}
    </p>
    <button class="btn" @click="addLevel(number)">
      <img
        v-if="stackStore.stack.includes(number) || stackStore.currentLevel === number"
        src="@/assets/icons/elevator-button-active.svg"
        alt="Вызвать лифт"
      >
      <img
        v-else
        src="@/assets/icons/elevator-button.svg"
        alt="Вызвать лифт"
      >
    </button>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useStackStore } from '@/stores/stack'

interface Props {
  number: number
}
const props = defineProps<Props>()

const stackStore = useStackStore()

const addLevel = (level: number) => {
  if (stackStore.addToStack(level)) {
    stackStore.goNextFloor()
  }
}
</script>

<style lang="scss" scoped>
.level {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid grey;
  padding: 1rem;

  &__number {
    margin-bottom: 1rem;
  }
}
</style>