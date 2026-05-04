<script setup>
import { onMounted, ref, watch } from 'vue'
import IconDefault from './Icon-default.vue'

import CursorDefault from './Cursor-default.vue'

const cursorActive = ref(true)
const isChanging = ref(false)

const useCustomCursor = (value) => {
  if (!isChanging.value && cursorActive.value !== value) {
    cursorActive.value = value
    isChanging.value = true

    // Actualiza en el localstorage la preferencia del cursor
    localStorage.setItem('userCustomCursor', value)

    setTimeout(() => {
      isChanging.value = false
    }, 1500)
  }
}

onMounted(() => {
  const userCustomCursor = localStorage.getItem('userCustomCursor')
  cursorActive.value = userCustomCursor === 'true'
})

watch(
  cursorActive,
  (value) => {
    document.body.setAttribute('data-custom-cursor-active', value)
  },
  { immediate: true },
)
</script>

<template>
  <Teleport to="body">
    <CursorDefault :active="cursorActive" />
  </Teleport>

  <div
    class="c-cursor-switcher u-flex u-column u-justify-center u-align-center u-md-hidden"
    :data-cursor-active="cursorActive"
    data-clickable
  >
    <IconDefault
      class="c-cursor-switcher__icon c-cursor-switcher__icon--active c-icon--md"
      name="cursor"
      :onClick="
        () => {
          useCustomCursor(false)
        }
      "
    />
    <IconDefault
      class="c-cursor-switcher__icon c-cursor-switcher__icon--deactive c-icon--md"
      name="cursor-blocked"
      :onClick="
        () => {
          useCustomCursor(true)
        }
      "
    />
  </div>
</template>

<style lang="scss" scoped>
.c-cursor-switcher {
  --size: 26px;
  position: relative;
  width: 24px;
  height: var(--size);
  aspect-ratio: 1;
  overflow: hidden;

  &__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 1s cubic-bezier(1, -0.67, 0.5, 1);
    will-change: transform;
  }

  &[data-cursor-active='true'] {
    .c-cursor-switcher__icon--deactive {
      transform: translateY(var(--size));
    }
  }

  &[data-cursor-active='false'] {
    .c-cursor-switcher__icon--active {
      transform: translateY(var(--size));
    }
  }
}
</style>
