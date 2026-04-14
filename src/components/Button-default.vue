<script setup>
import CustomIcon from './Icon-default.vue'

const props = defineProps({
  url: String,
  title: String,
  icon: String,
  customStyle: Array,
  isView: Boolean,
  isAction: Boolean,
})

const getCustomStyle = (items) => {
  const prefix = 'c-button--'
  let string = ''

  if (!items) return

  items.forEach((i) => {
    string += `${prefix}${i} `
  })

  return string
}
const defaultStyle = 'c-button u-flex u-row u-align-center u-justify-center u-gap-xxs'
const customStyle = getCustomStyle(props.customStyle)
</script>

<template>
  <button v-if="props.isActionction != null" :class="[defaultStyle, customStyle]">
    <CustomIcon class="c-button__icon" v-if="props.icon" :name="props.icon" />
    {{ props.title }}
  </button>

  <RouterLink
    v-else-if="props.isView == true"
    :to="props.url"
    :class="[defaultStyle, customStyle]"
    active-class="c-button--active"
  >
    <CustomIcon class="c-button__icon" v-if="props.icon" :name="props.icon" />
    {{ props.title }}
  </RouterLink>

  <a v-else :href="props.url" target="_blank" :class="[defaultStyle, customStyle]">
    <CustomIcon class="c-button__icon" v-if="props.icon" :name="props.icon" />
    {{ props.title }}
  </a>
</template>

<style lang="scss" scoped>
.c-button {
  --accent-color: var(--color-blue-02);
  --background-color: var(--color-background);
  --text-color: var(--color-text);

  background-color: var(--background-color);
  border-radius: var(--corner-button);
  border: 2px solid var(--color-white);
  color: var(--color-text);
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px transparent);
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size-xs);
  font-weight: 700;
  padding: var(--size-s) var(--size-xl);
  text-decoration: none;
  transition: 0.3s;

  &--active,
  &:hover {
    background-color: var(--accent-color);
    filter: drop-shadow(0px 0px 10px var(--accent-color));
  }

  &--alt {
    --accent-color: var(--color-wine-02);
  }

  &--active {
    --accent-color: var(--color-blue-02);
  }

  &--inactive {
    --accent-color: var(--color-gray);
    --background-color: var(--color-gray);
    opacity: 0.8;
  }

  &--rev {
    flex-direction: row-reverse;
  }

  &--tab {
    border-bottom: unset;
    border-radius: 10px 10px 0 0;
    border-width: 1px !important;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
