<script setup>
import IconDefault from '@/components/Icon-default.vue'
import { PROJECT_INFO, LINKS } from '@/constants'
import ThemeSwitcher from '../Theme-switcher.vue'
import CursorSwitcher from '../Cursor-switcher.vue'

const menu = {
  left: LINKS.rrss,
  rigth: [LINKS.project.repo, LINKS.project.figma],
}
</script>

<template>
  <footer class="c-footer u-flex u-p-5 u-md-p-3 u-md-my-3 u-md-mx-auto u-w-100">
    <section class="c-footer__wrapper u-flex u-row u-align-center u-justify-between u-sm-g-4">
      <ul class="c-footer__list u-flex u-row u-justify-start u-g-3 u-sm-g-1 u-sm-order-2">
        <li v-for="item in menu.left" :key="item.name" class="c-footer__item u-mb-0 u-flex">
          <a :href="item.url" target="_blank" class="c-footer__link u-flex">
            <IconDefault class="c-icon--lg" :name="item.icon" />
          </a>
        </li>
      </ul>
      <div class="c-footer__container u-flex u-sm-order-1 u-sm-w-100">
        <h2 class="c-footer__text text">{{ PROJECT_INFO.dev }}</h2>
      </div>
      <section class="c-footer__container u-flex u-row u-justify-end u-g-6 u-sm-order-3">
        <ul class="c-footer__list u-flex u-row u-justify-end u-g-3 u-sm-hidden">
          <li v-for="item in menu.rigth" :key="item.name" class="c-footer__item u-mb-0 u-flex">
            <a :href="item.url" target="_blank" class="c-footer__link u-flex u-row u-g-1">
              <span class="c-footer__text">{{ item.name }}</span>
              <IconDefault class="c-icon--md" name="link" />
            </a>
          </li>
        </ul>
        <section class="c-utilities u-flex u-row u-g-1">
          <ThemeSwitcher />
          <CursorSwitcher />
        </section>
      </section>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.c-footer {
  border-top: 1px solid var(--color-border);
  grid-area: 10 / 1 / 11 / 13;
  height: 100%;
  z-index: 5;

  &__wrapper {
    width: min(100%, 1400px);
  }

  &__list {
    flex: 0 1 250px;
    list-style: none;
    padding: unset;
  }

  &__link {
    text-decoration: underline;
    text-decoration-color: var(--color-text);
  }

  @include respond-to(md) {
    backdrop-filter: blur(60px);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: var(--corner);
    border: 2px solid rgba(255, 255, 255, 0.1);
    grid-area: unset;
    height: auto;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 96%;
    z-index: 99;
  }

  @include respond-to(sm) {
    &__list {
      flex: unset;
    }
  }
}
</style>
