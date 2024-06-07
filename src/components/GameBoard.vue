<template>
  <div class="wrapper">
    <div class="playing-field">
      <section class="cards">
        <GameCard
          v-for="(card, index) in gameStore.cardsQuantityArray[gameStore.level]"
          :card="card"
          :key="index"
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
const reset = () => {
  gameStore.playing = false;
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
