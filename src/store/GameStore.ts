import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("store", () => {
  const playing = false;
  const levelsQuantity = [1, 2, 3, 4];
  const cardsQuantityArray = [10, 12, 14, 16];
  const initalIconsArray = [
    "music",
    "paw",
    "bell",
    "bolt",
    "sun",
    "lock",
    "snowflake",
    "heart",
  ];

  const level = ref(0);

  const selectedIconsArray: string[] = [];
  const duplicateSelectedIconsArray: string[] = [];
  const randomSelectedIconsArray: string[] = [];

  const setLevel = (index: number): void => {
    level.value = index;
  };

  const isCardClickable = ref(true);
  const flippedCards: string[] = [];

  return {
    playing,
    levelsQuantity,
    cardsQuantityArray,
    initalIconsArray,
    level,
    setLevel,
    selectedIconsArray,
    duplicateSelectedIconsArray,
    randomSelectedIconsArray,
    isCardClickable,
    flippedCards,
  };
});
