import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const playing = ref<boolean>(false);
  const level = ref<number>(0);
  const isClickable = ref<boolean>(true);
  const guessedCards = ref<number[]>([]);
  const firstCard = ref<number | null>(null);
  const secondCard = ref<number | null>(null);
  const openedCards = ref<{ [key: number]: boolean }>({});
  const isCompletedLevel = ref<boolean>(false);

  const levelsQuantity: number[] = [1, 2, 3, 4];
  const cardsQuantityArray: number[] = [10, 12, 14, 16];
  const initalIconsArray: string[] = [
    "music",
    "paw",
    "bell",
    "bolt",
    "sun",
    "lock",
    "snowflake",
    "heart",
  ];

  const selectedIconsArray = ref<string[]>([]);
  const duplicateSelectedIconsArray = ref<string[]>([]);
  const randomSelectedIconsArray = ref<string[]>([]);

  return {
    playing,
    levelsQuantity,
    cardsQuantityArray,
    initalIconsArray,
    level,
    selectedIconsArray,
    duplicateSelectedIconsArray,
    randomSelectedIconsArray,
    isClickable,
    guessedCards,
    firstCard,
    secondCard,
    openedCards,
    isCompletedLevel,
  };
});
