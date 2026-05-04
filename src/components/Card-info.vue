<script setup>
import IconDefault from '@/components/Icon-default.vue'

const props = defineProps({
  title: String,
  date: String,
  at: String,
  location: String,
  type: String,
  content: String,
})
</script>

<template>
  <div class="c-card u-flex u-w-100 u-p-4 u-g-4">
    <div class="c-card__head u-flex u-w-100 u-justify-start u-align-start u-g-1">
      <h2 class="c-card__title subtitle">{{ props.title }}</h2>
      <div class="c-card__details u-flex u-row u-w-100 u-justify-start u-align-start u-g-2">
        <div class="c-card__detail u-flex u-row u-g-1">
          <IconDefault name="clock" />
          {{ props.date }}
        </div>
        <div class="c-card__detail u-flex u-row u-g-1">
          <IconDefault name="company" />
          {{ props.at }}
        </div>
      </div>
    </div>
    <div
      v-show="props.content != undefined"
      class="c-card__content u-flex u-align-start u-justify-start"
      v-html="props.content"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.c-card {
  background: var(--color-gray);
  border-radius: var(--corner);

  &__detail {
    color: var(--color-text);
  }
}
</style>
