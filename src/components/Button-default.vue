<script setup>
import ButtonContent from './Button-content.vue'

const props = defineProps({
  url: String,
  title: String,
  icon: String,
  customStyle: Array,
  isView: Boolean,
  isAction: Boolean,
  hideTextOnMobile: {
    type: Boolean,
    default: false,
  },
})

const buttonStyle = () => {
  const prefix = 'c-button--'
  const items = props.customStyle

  let style = 'c-button u-flex u-row u-align-center u-justify-center u-g-1 u-py-3 u-px-6 '
  let string = ''

  if (items) {
    items.forEach((i) => {
      string += `${prefix}${i} `
    })

    style += string
  }

  return style
}

const textStyle = () => {
  let style = 'c-button__title '

  if (props.hideTextOnMobile) {
    style += 'u-sm-hidden'
  }

  return style
}
</script>

<template>
  <button v-if="props.isActionction != null" :class="buttonStyle()">
    <ButtonContent :title="props.title" :icon="props.icon" :textStyle="textStyle()"></ButtonContent>
  </button>

  <RouterLink
    v-else-if="props.isView == true"
    :to="props.url"
    :class="buttonStyle()"
    active-class="c-button--active"
  >
    <ButtonContent :title="props.title" :icon="props.icon" :textStyle="textStyle()"></ButtonContent>
  </RouterLink>

  <a v-else :href="props.url" target="_blank" :class="buttonStyle()">
    <ButtonContent :title="props.title" :icon="props.icon" :textStyle="textStyle()"></ButtonContent>
  </a>
</template>

<style lang="scss">
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
  transition: 0.3s;
  text-decoration: none;

  &__title {
    font-family: var(--font-family-primary), sans-serif;
    font-size: var(--font-size-2);
    font-weight: 700;
  }

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
    flex-direction: row-reverse !important;
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
