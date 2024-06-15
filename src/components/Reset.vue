<template>
  <button class="btn-reset" @click="reset">reset</button>
</template>

<script setup lang="ts">
import { useGameStore } from "@/store/GameStore";

const gameStore = useGameStore();

const reset = (): void => {
  gameStore.playing = false;
  gameStore.isClickable = true;
  gameStore.guessedСards.length = 0;
  gameStore.objOpenIcon = {};
  gameStore.firstCard = null;
  gameStore.secondCard = null;
  gameStore.isCompletedLevel = false;
  gameStore.duplicateSelectedIconsArray.length = 0;
  gameStore.randomSelectedIconsArray.length = 0;
};
</script>

<style scoped lang="scss">
@import "../assets/styles/scss/style.scss";

* {
  @include font-gluten;
}

.btn-reset {
  width: 140px;
  font-size: 22px;
  padding: 10px;
  background: linear-gradient(
    45deg,
    rgb(0, 0, 0) 0%,
    rgb(167, 116, 50) 35%,
    rgba(80, 65, 50, 1) 65%,
    rgb(45, 43, 43) 100%
  );
  border-radius: 10px;
  border: none;
  box-shadow: 0 3px 20px 5px rgba(4, 37, 74, 0.2);

  &:hover {
    background: radial-gradient(rgb(202, 59, 59), rgb(71, 42, 30));
    box-shadow: 0 3px 20px 5px rgba(4, 37, 74, 0.4);
    transform: translateY(-3px);
  }
}
</style>
