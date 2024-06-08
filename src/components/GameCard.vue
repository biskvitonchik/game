<template>
  <article class="game-card" @click="showIcon">
    <i
      :class="`fa ${
        isShowIcon
          ? 'fa-' + store.randomSelectedIconsArray[props.index]
          : 'fa-question'
      }`"
    ></i>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGameStore } from "@/store/GameStore";
const store = useGameStore();

const props = defineProps<{
  index: number;
}>();

const isShowIcon = ref(false);

const showIcon = () => {
  if (store.isCardClickable) {
    isShowIcon.value = true;
    store.flippedCards.push(store.randomSelectedIconsArray[props.index]);
    console.log(store.flippedCards);
  }
  if (store.flippedCards.length === 2) {
    store.isCardClickable = false;
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
    transform: perspective(100px) rotateY(30deg);
    transition: 0.4s ease;
    background-color: rgb(140, 131, 131);
  }
}
</style>
