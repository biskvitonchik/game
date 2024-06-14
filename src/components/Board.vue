<template>
  <div class="board">
    <StartMenu v-show="!gameStore.playing" />
    <GameBoard v-if="gameStore.playing" />
  </div>
  <Confetti v-if="gameStore.isCompletedLevel" />
</template>

<script setup lang="ts">
import StartMenu from "@/components/StartMenu.vue";
import GameBoard from "@/components/GameBoard.vue";
import Confetti from "@/components/Confetti.vue";
import { useGameStore } from "@/store/GameStore";

const gameStore = useGameStore();
</script>

<style scoped lang="scss">
.board {
  position: relative;
  display: flex;
  justify-content: center;
  width: 900px;
  height: 550px;
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
  z-index: 1;

  @media (max-width: 600px) {
    width: 95%;
    height: 65vh;
    padding: 10px;
    border-radius: 20px;
  }
}
</style>
