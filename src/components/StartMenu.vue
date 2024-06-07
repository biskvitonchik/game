<template>
  <div class="start-menu">
    <h1>Guess</h1>
    <div class="lvl-btns">
      <LevelButton
        @click="startGame(index)"
        v-for="(button, index) in gameStore.levelsQuantity"
        :key="index"
        :index="index"
        :cardsQuantity="gameStore.cardsQuantityArray[index]"
        :button="button"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LevelButton from "@/components/LevelButton.vue";
import { useGameStore } from "@/store/GameStore";

const gameStore = useGameStore();

const startGame = (index: number) => {
  gameStore.setLevel(index);
  gameStore.playing = true;


switch (gameStore.cardsQuantityArray[index]) {
    case 10:
    gameStore.selectedIconsArray = gameStore.initalIconsArray.slice(0, 5);
      break;
    case 12:
    gameStore.selectedIconsArray = gameStore.initalIconsArray.slice(0, 6);
    break;
    case 14:
    gameStore.selectedIconsArray = gameStore.initalIconsArray.slice(0, 7);
      break;
    case 16:
    gameStore.selectedIconsArray = gameStore.initalIconsArray.slice(0, 8);
      break;
  }
  console.log(gameStore.selectedIconsArray);
  
};


</script>

<style lang="scss">
.start-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.lvl-btns {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 10px;
}
</style>
