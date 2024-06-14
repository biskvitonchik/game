<template>
    <div class="confetti">
      <div class="confetti-piece" v-for="n in 50" :key="n" :style="{ left: randomLeft(), animationDelay: randomDelay() }"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  const randomLeft = () => `${Math.random() * 100}%`;
  const randomDelay = () => `${Math.random() * 4}s`;
  </script>
  
  <style scoped lang="scss">
  $yellow: #ffd300;
  $blue: #17d3ff;
  $pink: #ff4e91;
  $green: #00ff00;
  $orange: #ff4500;
  $purple: #800080;
  
  $duration: 4000;
  
  @function randomNum($min, $max) {
    $rand: random();
    $randomNum: $min + floor($rand * (($max - $min) + 1));
  
    @return $randomNum;
  }
  
  .confetti {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 2;
  }
  
  .confetti-piece {
    position: absolute;
    width: 8px;
    height: 16px;
    background: $yellow;
    top: 0;
    opacity: 0;
    
    @for $i from 1 through 50 {
      &:nth-child(#{$i}) {
        left: $i * 3%;
        transform: rotate(#{randomNum(-80, 80)}deg);
        animation: makeItRain $duration * 1ms infinite ease-out;
        animation-delay: #{randomNum(0, $duration * .5)}ms;
        animation-duration: #{randomNum($duration * .7, $duration * 1.2)}ms;
      }
    }
    
    &:nth-child(odd) {
      background: $blue;
    }
    
    &:nth-child(even) {
      z-index: 1;
    }
    
    &:nth-child(4n) {
      width: 5px;
      height: 12px;
      animation-duration: $duration * 2ms;
    }
    
    &:nth-child(3n) {
      width: 3px;
      height: 10px;
      animation-duration: $duration * 2.5ms;
      animation-delay: $duration * 1ms;
    }
    
    &:nth-child(4n-7) {
      background: $pink;
    }
  
    &:nth-child(5n) {
      background: $green;
    }
  
    &:nth-child(6n) {
      background: $orange;
    }
  
    &:nth-child(7n) {
      background: $purple;
    }
  }
  
  @keyframes makeItRain {
    from {
      opacity: 0;
    }
    
    50% {
      opacity: 1;
    }
    
    to {
      transform: translateY(100vh);
    }
  }
  </style>
  