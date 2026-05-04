<script setup></script>

<template>
  <section class="c-background">
    <div class="c-background__item c-background__item--right"></div>
    <div class="c-background__item c-background__item--left"></div>
  </section>
</template>

<style lang="scss" scoped>
.c-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: 1;
  overflow: hidden;
  backdrop-filter: blur(120px);
  background-color: rgba(255, 255, 255, 0.01);

  &__item {
    width: 500px;
    aspect-ratio: 1;
    border-radius: 100%;
    filter: blur(500px);
    position: absolute;

    &--right {
      background-color: #e718ff;
      top: 10px;
      left: -50px;
    }

    &--left {
      background-color: #081488;
      right: 50px;
      bottom: 50px;
    }
  }
}
</style>
