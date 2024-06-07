import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const playing = false;
  const levelsQuantity = [1, 2, 3, 4];
  const cardsQuantityArray = [10, 12, 14, 16];
  const iconsArray = [
    "react",
    "vuejs",
    "bell",
    "bolt",
    "sun",
    "lemon",
    "snowflake",
    "heart",
  ];

  const level = ref(0);
  const selectedQuantityCards = ref(0);

  const setLevel = (index: number): void => {
    level.value = index;
  };


  return {
    playing,
    levelsQuantity,
    cardsQuantityArray,
    iconsArray,
    level,
    setLevel,
    selectedQuantityCards
  };
});
