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

console.log(props.content)
</script>

<template>
  <div class="c-card u-flex u-w-100 u-padding-m u-gap-m">
    <div class="c-card__head u-flex u-w-100 u-justify-start u-align-start u-gap-xxs">
      <h2 class="c-card__title subtitle">{{ props.title }}</h2>
      <div class="c-card__details u-flex u-row u-w-100 u-justify-start u-align-start u-gap-xs">
        <div class="c-card__detail u-flex u-row u-gap-xxs">
          <IconDefault name="clock" />
          {{ props.date }}
        </div>
        <div class="c-card__detail u-flex u-row u-gap-xxs">
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
  border-radius: 10px;

  &__detail {
    color: var(--color-text);
  }
}
</style>
