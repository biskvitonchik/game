<template>
  <div class="start-menu">
    <h1>Find a couple</h1>
    <div class="lvl-btns">
      <LevelButton
        @click="startGame(index)"
        v-for="(button, index) in store.levelsQuantity"
        :key="index"
        :index="index"
        :cardsQuantity="store.cardsQuantityArray[index]"
        :button="button"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LevelButton from "@/components/LevelButton.vue";
import { useGameStore } from "@/store/GameStore";

const store = useGameStore();

const startGame = (index: number) => {
  store.setLevel(index);
  store.playing = true;

  switch (store.cardsQuantityArray[index]) {
    case 10:
      store.selectedIconsArray = store.initalIconsArray.slice(0, 5);
      break;
    case 12:
      store.selectedIconsArray = store.initalIconsArray.slice(0, 6);
      break;
    case 14:
      store.selectedIconsArray = store.initalIconsArray.slice(0, 7);
      break;
    case 16:
      store.selectedIconsArray = store.initalIconsArray;
      break;
  }

  store.duplicateSelectedIconsArray.push(...store.selectedIconsArray, ...store.selectedIconsArray);
  store.randomSelectedIconsArray.push(...store.duplicateSelectedIconsArray.sort(() => 0.5 - Math.random()));
};
</script>

<style scoped lang="scss">
@import "../assets/styles/scss/style.scss";

* {
  @include font-gluten;
}

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
  margin-top: 75px;
  gap: 10px;
}

h1 {
  font-size: 40px;
  color: rgb(91, 220, 243);
}
</style>
