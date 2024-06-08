<template>
  <div class="wrapper">
    <div class="playing-field">
      <section class="cards">
        <GameCard
          v-for="(card, index) in store.cardsQuantityArray[store.level]"
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

const store = useGameStore();

const reset = ():void => {
  store.playing = false;
  store.isClickable = true;
  store.guessedСards = [];
  store.objOpenIcon = {};
  store.firstCard = null;
  store.secondCard = null;
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
