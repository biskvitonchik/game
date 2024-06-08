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

  const selectedIconsArray = ref<string[]>([]);
  const duplicateSelectedIconsArray = ref<string[]>([]);
  const randomSelectedIconsArray = ref<string[]>([]);

  const setLevel = (index: number): void => {
    level.value = index;
  };

  const isClickable = ref(true);
  const flippedCards = ref<string[]>([]);

  const firstCard = ref<number | null>(null);
  const secondCard = ref<number | null>(null);

  const objOpenIcon = ref<{[key: number]: boolean}>({});


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
    isClickable,
    flippedCards,
    firstCard,
    secondCard,
    objOpenIcon
  };
});
