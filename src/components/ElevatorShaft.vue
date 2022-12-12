<template>
  <div class="shaft">
    <ElevatorBlock />
  </div>
</template>

<script setup>
import ElevatorBlock from '@/components/ElevatorBlock.vue'
</script>

<style scoped>
.shaft {
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid grey;
  height: 100%;
}
</style>