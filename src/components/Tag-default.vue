<script setup>
const props = defineProps({
  name: String,
})

const customClassname = `c-tag--${props.name.toLocaleLowerCase()}`
</script>

<template>
  <span :class="['c-tag', customClassname]">
    {{ props.name }}
  </span>
</template>

<style lang="scss" scoped>
$tag-colors: (
  'wordpress': #28799e,
  'figma': #f35425,
  'elementor': #950841,
  'woocommerce': #7c5baf,
  'php': #7b7fb5,
  'javascript': #000,
  'shopify': #639244,
  'vuejs': #3b4f63,
);

.c-tag {
  --background-color: var(--color-blue-01);

  background-color: var(--background-color);
  border-radius: 100px;
  border: 1px solid #fff;
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size-xs);
  font-weight: 500;
  padding: var(--size-xxs) var(--size-s);
  text-align: center;
  width: auto;

  @each $variant, $color in $tag-colors {
    &--#{$variant} {
      --background-color: #{$color};
    }
  }
}
</style>
