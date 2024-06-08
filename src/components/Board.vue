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
    rgb(146, 137, 125) 0%,
    rgb(167, 116, 50) 35%,
    rgba(80, 65, 50, 1) 65%,
    rgb(170, 115, 55) 100%
  );
  border-radius: 30px;
  padding: 5px;
  box-shadow: 0 0 30px 20px rgba(50, 47, 47, 0.3);
}
</style>
