<template>
  <div class="app">
    <Board />
  </div>
</template>

<script setup lang="ts">
import Board from "@/components/Board.vue";
</script>

<style scoped lang="scss">
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgb(57, 57, 52), rgb(76, 102, 76));
}
</style>
