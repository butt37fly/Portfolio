<script setup>
import IconDefault from '@/components/Icon-default.vue'
import TagDefault from '@/components/Tag-default.vue'

const props = defineProps({
  onModal: Boolean,
  image: String,
  title: String,
  date: String,
  at: String,
  at_url: String,
  at_text: String,
  excerpt: String,
  content: String,
  tags: Array,
})
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
          <span class="c-card__detail u-flex u-row u-gap-xxs">
            <IconDefault name="clock" />
            {{ props.date }}
          </span>
          <span class="c-card__detail u-flex u-row u-gap-xxs">
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

  <article v-else class="c-card u-flex u-align-start u-justify-start u-w-100">
    <img class="c-card__image" :src="props.image" :alt="props.title" />
    <div class="c-card__content u-flex u-w-100 u-padding-m u-gap-m">
      <div class="c-card__heading u-flex u-row u-w-100 u-align-end u-gap-xxs">
        <h3 class="c-card__title subtitle">{{ props.title }}</h3>
        <div class="c-card__details u-flex u-row u-gap-s">
          <span class="c-card__detail u-flex u-row u-gap-xxs">
            <IconDefault name="clock" />
            {{ props.date }}
          </span>
        </div>
      </div>
      <p class="c-card__text">{{ props.excerpt }}</p>
      <div class="c-card__tags u-flex u-row u-align-start u-justify-start u-w-100 u-pb-xs u-gap-xs">
        <TagDefault v-for="item in props.tags" :key="item" :name="item" />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.c-card {
  background-color: var(--color-background);
  border-radius: 10px;
  border: 1px solid var(--color-white);
  filter: drop-shadow(0px 0px 5px transparent);
  overflow: hidden;
  transition: filter 0.3s;

  &:hover {
    filter: drop-shadow(0px 0px 10px var(--color-secondary));
  }

  &__image {
    border-radius: 10px;
    cursor: pointer;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &__title {
    flex: 1 1 auto;
  }

  &__detail {
    &,
    & a {
      color: var(--color-text);
    }
  }

  &__tags {
    overflow: auto;
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
