<template>
  <div class="elevator" style=""></div>
</template>

<script lang="ts" setup>
import { useStackStore } from '@/stores/stack'

const stackStore = useStackStore()
</script>

<style lang="scss" scoped>
.elevator {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: tomato;

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
