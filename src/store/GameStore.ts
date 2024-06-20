import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  
  const playing = ref<boolean>(false);
  const level = ref<number>(0);
  const isClickable = ref<boolean>(true);
  const guessedCards = ref<string[]>([]);
  const firstCard = ref<string | null>(null);
  const secondCard = ref<string | null>(null);
  const openedCards = ref<{ [key: string]: boolean }>({});
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
  const randomSelectedIconsArray = ref<{ id: string, value: string }[]>([]);

  return {
    playing,
    level,
    isClickable,
    guessedCards,
    firstCard,
    secondCard,
    openedCards,
    isCompletedLevel,
    levelsQuantity,
    cardsQuantityArray,
    initalIconsArray,
    selectedIconsArray,
    duplicateSelectedIconsArray,
    randomSelectedIconsArray,
  };
});
