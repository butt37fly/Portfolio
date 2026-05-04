<script setup>
import ButtonDefault from '@/components/Button-default.vue'
import { MENU } from '@/constants'
</script>

<template>
  <header class="c-header u-flex u-w-100 u-p-5 u-md-p-3">
    <nav class="c-header__menu u-flex u-g-3">
      <ButtonDefault
        v-for="item in MENU"
        :key="item.title"
        :url="item.url"
        :title="item.title"
        :icon="item.icon"
        :customStyle="item.style"
        :isView="item.isView"
        :hideTextOnMobile="true"
      />
    </nav>
    <div class="c-header__line"></div>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  grid-area: 1 / 11 / 10 / 13;
  height: 100%;
  min-width: 240px;
  overflow: hidden !important;
  z-index: 5;

  &__menu {
    z-index: 2;
  }

  &__line {
    background-color: var(--color-white);
    height: stretch;
    position: absolute;
    width: 1px;
    z-index: 1;
  }

  @include respond-to(md) {
    bottom: 0;
    grid-area: unset;
    height: auto;
    left: 0;
    position: fixed;
    z-index: 99;

    &__menu {
      flex-direction: row;
    }

    &__line {
      display: none;
    }
  }
}
</style>
