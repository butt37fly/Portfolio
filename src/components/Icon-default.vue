<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const icons = import.meta.glob('@/assets/icons/*.svg')
const decodedSvg = ref(null)

const getIcon = async (name) => {
  const path = `/src/assets/icons/${name}.svg`
  const loader = icons[path]

  if (!loader) return null

  return await loader()
}

onMounted(async () => {
  const icon = await getIcon(props.name)

  if (!icon) return

  decodedSvg.value = decodeURIComponent(icon.default.replace('data:image/svg+xml,', ''))
})
</script>

<template>
  <div class="c-icon u-flex u-align-center u-justify-center">
    <i
      class="c-icon__wrapper u-flex u-align-center u-justify-center"
      v-if="decodedSvg"
      v-html="decodedSvg"
    ></i>
  </div>
</template>

<style lang="scss" scoped>
.c-icon {
  --size: 16px;
  width: var(--size);
  height: var(--size);
  flex: 1 0 var(--size);
  margin-bottom: 1px;

  &--medium {
    --size: 24px;
  }

  &--large {
    --size: 32px;
  }

  &__wrapper {
    &,
    :deep(svg) {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
