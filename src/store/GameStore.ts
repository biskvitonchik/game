import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("store", () => {
  const playing = ref<boolean>(false);
  const level = ref<number>(0);
  const isClickable = ref<boolean>(true);
  const guessedСards = ref<number[]>([]);
  const firstCard = ref<number | null>(null);
  const secondCard = ref<number | null>(null);
  const objOpenIcon = ref<{ [key: number]: boolean }>({});
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

  const setLevel = (index: number): void => {
    level.value = index;
  };
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
    guessedСards,
    firstCard,
    secondCard,
    objOpenIcon,
    isCompletedLevel,
  };
});
