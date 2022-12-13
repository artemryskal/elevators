<template>
  <ul class="list">
    <FloorLevel v-for="i in 5" :key="i" :number="i" />
  </ul>
</template>

<script setup>
import FloorLevel from '@/components/FloorLevel.vue'
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}
</style>