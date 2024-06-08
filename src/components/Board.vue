<template>
  <div class="board">
    <StartMenu v-show="!store.playing" />
    <GameBoard v-if="store.playing" />
  </div>
</template>

<script setup lang="ts">
import StartMenu from "./StartMenu.vue";
import GameBoard from "@/components/GameBoard.vue";
import { useGameStore } from "@/store/GameStore";

const store = useGameStore();
</script>

<style scoped lang="scss">
.board {
  display: flex;
  justify-content: center;
  width: 900px;
  height: 500px;
  background: linear-gradient(
    45deg,
    rgba(127, 108, 83, 1) 0%,
    rgba(100, 85, 65, 1) 35%,
    rgba(80, 65, 50, 1) 65%,
    rgba(60, 45, 30, 1) 100%
  );
  border-radius: 30px;
  padding: 5px;
  box-shadow: 0 0 30px 20px rgba(50, 47, 47, 0.3);
}
</style>
