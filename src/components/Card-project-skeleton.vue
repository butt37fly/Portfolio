<script setup>
const getRandomImgHeight = () => {
  const max = 120
  const min = 300

  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>

<template>
  <article class="c-card-skeleton u-flex u-align-start u-justify-start u-w-100">
    <div
      class="c-card-skeleton__image u-skeleton"
      :style="`--heigth: ${getRandomImgHeight()}px;`"
    ></div>
    <div class="c-card-skeleton__content u-flex u-w-100 u-p-4 u-g-4">
      <div class="c-card-skeleton__heading u-flex u-row u-w-100 u-align-end u-g-1">
        <h3 class="c-card-skeleton__title u-skeleton subtitle"></h3>
        <div class="c-card-skeleton__details u-skeleton u-flex u-row u-g-3">
          <span class="c-card-skeleton__detail u-flex u-row u-g-1"> </span>
        </div>
      </div>
      <div class="c-card-skeleton__tags u-flex u-row u-align-start u-justify-start u-w-100 u-g-2">
        <span class="c-card-skeleton__tag u-skeleton"></span>
        <span class="c-card-skeleton__tag u-skeleton"></span>
        <span class="c-card-skeleton__tag u-skeleton"></span>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.c-card-skeleton {
  background-color: var(--color-background);
  border-radius: 10px;
  border: 1px solid var(--color-white);
  overflow: hidden;
  transition: filter 0.3s;

  &__image {
    height: var(--heigth);
    object-fit: cover;
    width: 100%;
  }

  &__title {
    flex: 1 1 auto;
    width: 90%;
  }

  &__details {
    width: 10%;
  }

  &__tags {
    overflow: auto;
  }

  &__tag {
    width: 80px;
    height: 24px;
  }
}
</style>
