<template>
  <article class="game-card" @click="showIcon">
    <i
      :class="`fa ${
        store.objOpenIcon[props.index]
          ? 'fa-' + store.randomSelectedIconsArray[props.index] + ' open'
          : 'fa-question'
      }`"
    ></i>
  </article>
</template>

<script setup lang="ts">
import { useGameStore } from "@/store/GameStore";
const store = useGameStore();

const props = defineProps<{
  index: number;
}>();

const showIcon = () => {
  if (store.isClickable && store.firstCard === null) {
    store.firstCard = props.index;
    store.objOpenIcon[store.firstCard] = true;
    console.log(store.firstCard);
    console.log(store.objOpenIcon);
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
    }
  }
};
</script>

<style scoped lang="scss">
.game-card {
  width: 100px;
  height: 100px;
  background-color: rgb(57, 75, 75);
  padding: 10px;
  border: 1px solid black;
  font-size: 30px;
  text-align: center;

  &:hover {
    background-color: rgb(129, 109, 109);
  }
  &:active {
    transition: 0.4s ease;
    background-color: rgb(140, 131, 131);
    transform: perspective(100px) rotateY(30deg);
  }
}
.flip {
  transition: 0.5s ease;
  transform: perspective(100px) rotateY(30deg);
}
</style>
