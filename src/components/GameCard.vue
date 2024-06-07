<template>
  <article class="game-card">
    <i class="fa fa-question"></i>
  </article>
</template>

<script setup lang="ts">
import { useGameStore } from "@/store/GameStore";
const gameStore = useGameStore();



// switch (gameStore.selectedQuantityCards) {
//     case 10:
//       return iconsArray.slice(0, 5);
//     case 12:
//       return iconsArray.slice(0, 6);
//     case 14:
//       return iconsArray.slice(0, 7);
//     case 16:
//       return iconsArray.slice(0, 8);
//   }
</script>

<style scoped lang="scss">
.game-card {
  width: 100px;
  height: 100px;
  background-color: rgb(215, 221, 221);
  padding: 10px;
  border: 1px solid black;
  font-size: 30px;
  text-align: center;

  &:hover {
    background-color: rgb(129, 109, 109);
  }
  &:active {
    transform: perspective(100px) rotateY(30deg);
    transition: 0.4s ease;
    background-color: rgb(140, 131, 131);
  }
}
</style>
