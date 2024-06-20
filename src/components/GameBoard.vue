<template>
  <div class="wrapper">
    <div class="playing-field">
      <section class="cards">
        <GameCard
          v-for="card in gameStore.randomSelectedIconsArray"
          :key="card.id"
          :card="card"
        />
      </section>
    </div>
    <div class="btn-reset">
      <Reset />
    </div>
  </div>
</template>

<script setup lang="ts">
import GameCard from "@/components/GameCard.vue";
import Reset from "@/components/Reset.vue";
import { useGameStore } from "@/store/GameStore";

const gameStore = useGameStore();
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
