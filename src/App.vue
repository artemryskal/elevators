<template>
  <div class="app container">
    <ElevatorShaft />
    <LevelsList />
  </div>
</template>

<script lang="ts" setup>
import ElevatorShaft from '@/components/ElevatorShaft.vue'
import LevelsList from '@/components/LevelsList.vue'
</script>

<style lang="scss">
@use '@/assets/scss/styles.scss';
</style>
