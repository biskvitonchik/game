<template>
  <article
    class="game-card"
    @click="showIcon"
    :class="{
      successful: store.guessedСards.includes(props.index),
      flip: store.objOpenIcon[props.index],
    }"
  >
    <div class="card-inner">
      <div class="card-front">
        <i class="fa fa-question"></i>
      </div>
      <div class="card-back">
        <i
          :class="`fa fa-${store.randomSelectedIconsArray[props.index]} icon`"
        ></i>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useGameStore } from "@/store/GameStore";
const store = useGameStore();

const props = defineProps<{
  index: number;
}>();

const showIcon = () => {
  if (store.guessedСards.includes(props.index) || props.index === store.firstCard) return;
  if (store.isClickable && store.firstCard === null) {
    store.firstCard = props.index;
    store.objOpenIcon[store.firstCard] = true;
  } else if (store.isClickable && store.firstCard !== null) {
    store.secondCard = props.index;
    store.objOpenIcon[store.secondCard] = true;
    store.isClickable = false;
    if (
      store.randomSelectedIconsArray[store.firstCard!] !==
      store.randomSelectedIconsArray[store.secondCard!]
    ) {
      setTimeout(() => {
        store.objOpenIcon[store.firstCard!] = false;
        store.objOpenIcon[store.secondCard!] = false;
        store.firstCard = null;
        store.secondCard = null;
        store.isClickable = true;
      }, 1000);
    } else {
      store.guessedСards.push(store.firstCard);
      store.guessedСards.push(store.secondCard);
      store.firstCard = null;
      store.secondCard = null;
      store.isClickable = true;
      console.log(store.guessedСards);
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

  &.flip .card-inner {
    transform: rotateY(180deg);
  }

  .card-inner {
    position: relative;
    width: 100px;
    height: 100px;
    transition: transform 0.7s;
    transform-style: preserve-3d;
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
