<template>
  <button class="btn-level">
    {{ props.cardsQuantity }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  cardsQuantity: number;
}>();
</script>

<style scoped lang="scss">
.btn-level {
  padding: 15px;
  width: 180px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(grey, rgb(135, 103, 73));
  box-shadow: 0 0 10px 5px rgba(1, 1, 1, 0.2);
  font-size: 30px;
  font-weight: 600;
  color: rgb(230, 163, 9);

  &:hover {
    background: linear-gradient(rgb(114, 106, 106), rgb(157, 107, 61));
    box-shadow: 0 0 30px 20px rgba(61, 72, 83, 0.3);
  }
  &:active {
    background: linear-gradient(rgb(163, 136, 136), rgb(191, 116, 45));
    box-shadow: 0 0 30px 20px rgba(155, 66, 66, 0.5);
  }
}
</style>
