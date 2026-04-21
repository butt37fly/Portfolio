<script setup>
import IconDefault from '@/components/Icon-default.vue'
import TagDefault from '@/components/Tag-default.vue'

const getRandomImgHeight = () => {
  const max = 120
  const min = 300

  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>

<template>
  <article
    v-if="onModal == true"
    class="c-card c-card--modal u-flex u-align-start u-justify-start u-w-100"
  >
    <div class="c-card__content u-flex u-w-100 u-padding-m u-gap-m">
      <div class="c-card__heading u-flex u-w-100 u-align-start u-gap-s">
        <h3 class="c-card__title subtitle">{{ props.title }}</h3>
        <div class="c-card__details u-flex u-row u-gap-s">
          <span v-show="props.date != ''" class="c-card__detail u-flex u-row u-gap-xxs">
            <IconDefault name="clock" />
            {{ props.date }}
          </span>
          <span v-show="props.at != ''" class="c-card__detail u-flex u-row u-gap-xxs">
            <IconDefault name="link" />
            {{ props.at_text }}
            <a :href="props.at_url" target="_blank"> {{ props.at }}</a>
          </span>
        </div>
        <div
          class="c-card__tags u-flex u-row u-align-start u-justify-start u-w-100 u-pb-xs u-gap-xs"
        >
          <TagDefault v-for="item in props.tags" :key="item" :name="item" />
        </div>
      </div>
      <div :v-html="props.content" class="c-card__text"></div>
    </div>
  </article>

  <article v-else class="c-card-skeleton u-flex u-align-start u-justify-start u-w-100">
    <div
      class="c-card-skeleton__image u-skeleton"
      :style="`--heigth: ${getRandomImgHeight()}px;`"
    ></div>
    <div class="c-card-skeleton__content u-flex u-w-100 u-padding-m u-gap-m">
      <div class="c-card-skeleton__heading u-flex u-row u-w-100 u-align-end u-gap-xxs">
        <h3 class="c-card-skeleton__title u-skeleton subtitle"></h3>
        <div class="c-card-skeleton__details u-skeleton u-flex u-row u-gap-s">
          <span class="c-card-skeleton__detail u-flex u-row u-gap-xxs"> </span>
        </div>
      </div>
      <div
        class="c-card-skeleton__tags u-flex u-row u-align-start u-justify-start u-w-100 u-gap-xs"
      >
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

.c-card--modal {
  border: unset;
  height: 100%;

  &__image {
    cursor: default;
  }

  &:hover {
    filter: unset;
  }
}
</style>
