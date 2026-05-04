<script setup></script>

<template>
  <section class="c-background">
    <div class="c-background__item c-background__item--right"></div>
    <div class="c-background__item c-background__item--left"></div>
  </section>
</template>

<style lang="scss">
.c-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: 1;
  overflow: hidden;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    backdrop-filter: blur(120px);
    background-color: var(--color-background-translucent);
  }

  &__item {
    width: 500px;
    aspect-ratio: 1;
    border-radius: 100%;
    position: absolute;
    animation-name: bouncing !important;
    filter: blur(250px);

    &--right {
      background-color: #5b1463;
      top: 10px;
      left: -50px;
      animation: 5s infinite ease-in;
    }

    &--left {
      background-color: #12294b;
      right: 50px;
      bottom: 50px;
      animation: 7s infinite ease-in;
    }
  }

  @include respond-to(md) {
    &__item {
      width: 250px;
    }
  }

  @keyframes bouncing {
    0% {
      transform: translateX(0px) scale(1);
    }
    50% {
      transform: translateX(-60px) scale(1.5);
    }
    100% {
      transform: translateX(0px) scale(1);
    }
  }
}
</style>
