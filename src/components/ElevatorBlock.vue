<template>
  <div
    ref="elevator"
    :class="['elevator', { 'elevator--waiting': isWaiting }]"
    :style="{transform: `translateY(${stackStore.transform}px)`, 'transition-duration': `${stackStore.transitionDuration}s`}"
    @transitionend="nextFloor"
  >
    <div
      v-if="stackStore.direction !== 'stop'"
      class="elevator__info"
    >
      <p>
        {{ stackStore.currentLevel }}
      </p>
      <img
        :src="require(`@/assets/icons/direction-${stackStore.direction}.svg`)"
        alt="Направление"
        class="elevator__direction"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useElevatorStore } from '@/stores/elevator'
import { onMounted, ref } from 'vue'

const stackStore = useElevatorStore()
const isWaiting = ref(false)

const nextFloor = () => {
  if (!stackStore.stack.length) return false
  isWaiting.value = true

  setTimeout(() => {
    stackStore.preventLevel = stackStore.currentLevel
    stackStore.removeCurrentFloor()
    stackStore.goNextFloor()
    isWaiting.value = false
  }, 3000)
}

onMounted(() => {
  nextFloor()
})
</script>

<style lang="scss" scoped>
.elevator {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: tomato;
  transition: transform 1s linear;

  &--waiting {
    animation: blink 0.6s infinite forwards alternate;
  }

  &__info {
    display: flex;
    position: absolute;
    top: 0.5rem;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem;
    border-radius: 3px;
    font-size: 1.25rem;
    color: #fff;
    transform: translateX(-50%);
  }

  &__direction {
    margin-left: 0.5rem;
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
