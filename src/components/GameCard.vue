<template>
  <article
    class="game-card"
    @click="showIcon"
    :class="{
      successful: gameStore.guessedСards.includes(props.index),
      flip: gameStore.objOpenIcon[props.index],
    }"
  >
    <div class="card-inner">
      <div class="card-front">
        <i class="fa fa-question"></i>
      </div>
      <div class="card-back">
        <i
          :class="`fa fa-${gameStore.randomSelectedIconsArray[props.index]} icon`"
        ></i>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useGameStore } from "@/store/GameStore";
const gameStore = useGameStore();

const props = defineProps<{
  index: number;
}>();

const showIcon = (): void => {
  if (gameStore.guessedСards.includes(props.index) || props.index === gameStore.firstCard) return;
  if (gameStore.isClickable && gameStore.firstCard === null) {
    gameStore.firstCard = props.index;
    gameStore.objOpenIcon[gameStore.firstCard] = true;    
  } else if (gameStore.isClickable && gameStore.firstCard !== null) {
    gameStore.secondCard = props.index;
    gameStore.objOpenIcon[gameStore.secondCard] = true;
    gameStore.isClickable = false;
    if (gameStore.randomSelectedIconsArray[gameStore.firstCard!] !== gameStore.randomSelectedIconsArray[gameStore.secondCard!]) {
      setTimeout(() => {
        gameStore.objOpenIcon[gameStore.firstCard!] = false;
        gameStore.objOpenIcon[gameStore.secondCard!] = false;
        gameStore.firstCard = null;
        gameStore.secondCard = null;
        gameStore.isClickable = true;
      }, 800);
    } else {
      gameStore.guessedСards.push(gameStore.firstCard);
      gameStore.guessedСards.push(gameStore.secondCard);
      gameStore.firstCard = null;
      gameStore.secondCard = null;
      gameStore.isClickable = true;
        if (gameStore.randomSelectedIconsArray.length === gameStore.guessedСards.length){
          gameStore.isCompletedLevel = true;
        }
    }
  }
};
</script>

<style scoped lang="scss">
.game-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  perspective: 1000px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 85px;
    height: 85px;
  }

  &.flip .card-inner {
    transform: rotateY(180deg);
  }

  .card-inner {
    position: relative;
    width: 100px;
    height: 100px;
    transition: transform 0.7s;
    transform-style: preserve-3d;

    @media (max-width: 600px) {
      width: 85px;
      height: 85px;
    }
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    border-radius: 10px;
    background: linear-gradient(135deg, #8e44ad, #407ba3);
    padding: 10px;
    border: 2px solid rgb(108, 80, 119);
    transition: 0.2s ease;

    @media (max-width: 600px) {
      width: 85px;
      height: 85px;
      padding: 5px;
    }

    &:hover {
      background-color: rgb(93, 48, 156);
      box-shadow: 0 0 10px 13px rgba(207, 177, 78, 0.1);
    }

    i {
      color: rgb(0, 187, 255);
      font-size: 55px;
      &.icon {
        background-image: linear-gradient(
          to left,
          rgb(174, 135, 135),
          rgb(200, 255, 0)
        );
        background-clip: text;
        color: transparent;
      }

      @media (max-width: 600px) {
        font-size: 50px;
      }
    }
  }

  .card-back {
    transform: rotateY(180deg);
  }

  &.successful .card-front,
  &.successful .card-back {
    background: linear-gradient(rgb(53, 73, 224), rgb(12, 12, 12));
  }
}

</style>
