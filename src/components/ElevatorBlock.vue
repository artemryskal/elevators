<template>
  <div
    ref="elevator"
    class="elevator"
    :style="{transform: `translateY(${stackStore.transform}px)`}"
    @transitionend="nextFloor"
  >
  </div>
</template>

<script lang="ts" setup>
import { useStackStore } from '@/stores/stack'
import { ref } from 'vue'

const stackStore = useStackStore()
const elevator = ref<HTMLDivElement | null>(null)

const nextFloor = () => {
  elevator.value.classList.add('elevator--waiting')

  setTimeout(() => {
    stackStore.removeCurrentFloor()
    stackStore.goNextFloor()
    elevator.value.classList.remove('elevator--waiting')
  }, 3000)
}
</script>

<style lang="scss" scoped>
.elevator {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: tomato;
  transition: transform 0.4s;

  &--waiting {
    animation: blink 0.6s infinite forwards alternate;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.4;
    }
  }
}
</style>
