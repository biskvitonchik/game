import { v4 as uuidv4 } from "uuid";
import { useGameStore } from "@/store/GameStore";

export const showIcon = (cardId: string): void => {
  const gameStore = useGameStore();

  if (gameStore.guessedCards.includes(cardId) || cardId === gameStore.firstCard) {
    return;
  }

  if (gameStore.isClickable && gameStore.firstCard === null) {
    gameStore.firstCard = cardId;
    gameStore.openedCards[gameStore.firstCard] = true;
  } else if (gameStore.isClickable && gameStore.firstCard !== null) {
    gameStore.secondCard = cardId;
    gameStore.openedCards[gameStore.secondCard] = true;
    gameStore.isClickable = false;

    const firstCardValue = gameStore.randomSelectedIconsArray.find(card => card.id === gameStore.firstCard)?.value;
    const secondCardValue = gameStore.randomSelectedIconsArray.find(card => card.id === gameStore.secondCard)?.value;

    if (firstCardValue !== secondCardValue) {
      setTimeout(() => {
        gameStore.openedCards[gameStore.firstCard!] = false;
        gameStore.openedCards[gameStore.secondCard!] = false;
        gameStore.firstCard = null;
        gameStore.secondCard = null;
        gameStore.isClickable = true;
      }, 800);
    } else {
      gameStore.guessedCards.push(gameStore.firstCard);
      gameStore.guessedCards.push(gameStore.secondCard);
      gameStore.firstCard = null;
      gameStore.secondCard = null;
      gameStore.isClickable = true;
      if (gameStore.randomSelectedIconsArray.length === gameStore.guessedCards.length) {
        gameStore.isCompletedLevel = true;
      }
    }
  }
};

export const startGame = (index: number): void => {
  const gameStore = useGameStore();
  setLevel(index);
  gameStore.playing = true;

  switch (gameStore.cardsQuantityArray[index]) {
    case 10:
      gameStore.selectedIconsArray = gameStore.initalIconsArray.slice(0, 5);
      break;
    case 12:
      gameStore.selectedIconsArray = gameStore.initalIconsArray.slice(0, 6);
      break;
    case 14:
      gameStore.selectedIconsArray = gameStore.initalIconsArray.slice(0, 7);
      break;
    case 16:
      gameStore.selectedIconsArray = gameStore.initalIconsArray;
      break;
  }

  gameStore.duplicateSelectedIconsArray.push(
    ...gameStore.selectedIconsArray,
    ...gameStore.selectedIconsArray
  );

  gameStore.randomSelectedIconsArray.push(
    ...gameStore.duplicateSelectedIconsArray
      .sort(() => 0.5 - Math.random())
      .map((icon) => ({ id: uuidv4(), value: icon }))
  );
};

export const setLevel = (index: number): void => {
  const gameStore = useGameStore();
  gameStore.level = index;
};

export const reset = (): void => {
  const gameStore = useGameStore();
  gameStore.playing = false;
  gameStore.isClickable = true;
  gameStore.guessedCards.length = 0;
  gameStore.openedCards = {};
  gameStore.firstCard = null;
  gameStore.secondCard = null;
  gameStore.isCompletedLevel = false;
  gameStore.duplicateSelectedIconsArray.length = 0;
  gameStore.randomSelectedIconsArray.length = 0;
};
