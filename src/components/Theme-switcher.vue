<script setup>
import { onMounted, ref, watch } from 'vue'
import IconDefault from './Icon-default.vue'

const themes = { dark: 'dark', light: 'light' }
const themeActive = ref(themes.dark)

let isChanging = false

const changeTheme = (newTheme) => {
  if (!isChanging && themeActive.value !== newTheme) {
    themeActive.value = newTheme
    isChanging = true

    // Actualiza en el localstorage el tema elegido
    localStorage.setItem('userDefaultTheme', newTheme)

    setTimeout(() => {
      isChanging = false
    }, 1500)
  }
}

onMounted(() => {
  let userDefaultTheme = localStorage.getItem('userDefaultTheme')

  if (!userDefaultTheme) {
    let webDefaultTheme =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    userDefaultTheme = webDefaultTheme ? themes.dark : themes.light

    // Crea en el localstorage el tema elegido
    localStorage.setItem('userDefaultTheme', userDefaultTheme)
  }

  themeActive.value = userDefaultTheme
})

watch(
  themeActive,
  (newTheme) => {
    document.body.setAttribute('data-theme', newTheme)
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="c-theme-switcher u-flex u-column u-justify-center u-align-center"
    :data-theme-active="themeActive"
    data-clickable
  >
    <IconDefault
      class="c-theme-switcher__icon c-theme-switcher__icon--dark c-icon--md"
      name="moon"
      :onClick="
        () => {
          changeTheme(themes.light)
        }
      "
    />
    <IconDefault
      class="c-theme-switcher__icon c-theme-switcher__icon--light c-icon--md"
      name="sun"
      :onClick="
        () => {
          changeTheme(themes.dark)
        }
      "
    />
  </div>
</template>

<style lang="scss" scoped>
.c-theme-switcher {
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

  &[data-theme-active='dark'] {
    .c-theme-switcher__icon--light {
      transform: translateY(var(--size));
    }
  }

  &[data-theme-active='light'] {
    .c-theme-switcher__icon--dark {
      transform: translateY(var(--size));
    }
  }
}
</style>
