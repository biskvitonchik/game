<template>
  <div class="wrapper">
    <div class="playing-field">
      <section class="cards">
        <GameCard
          v-for="(card, index) in gameStore.cardsQuantityArray[gameStore.level]"
          :key="index"
          :index="index"
          :card="card"
        />
      </section>
    </div>
    <div class="btn-reset">
      <Reset @click="reset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GameCard from "@/components/GameCard.vue";
import Reset from "@/components/Reset.vue";
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
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
