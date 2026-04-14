<script setup>
import IconDefault from '@/components/Icon-default.vue'
import { PROJECT_INFO, LINKS } from '@/constants'

const menu = {
  left: LINKS.rrss,
  rigth: [LINKS.project.repo, LINKS.project.figma],
}
</script>

<template>
  <footer class="c-footer u-flex u-padding-l u-w-100">
    <section class="c-footer__wrapper u-flex u-row u-align-center u-justify-between">
      <ul class="c-footer__list u-flex u-row u-justify-start u-gap-xs">
        <li v-for="item in menu.left" :key="item.name" class="c-footer__item u-mb-0 u-flex">
          <a :href="item.url" target="_blank" class="c-footer__link u-flex">
            <IconDefault class="c-icon--large" :name="item.icon" />
          </a>
        </li>
      </ul>
      <div class="c-footer__container u-flex">
        <h2 class="c-footer__text text">{{ PROJECT_INFO.dev }}</h2>
      </div>
      <ul class="c-footer__list u-flex u-row u-justify-end u-gap-s">
        <li v-for="item in menu.rigth" :key="item.name" class="c-footer__item u-mb-0 u-flex">
          <a :href="item.url" target="_blank" class="c-footer__link u-flex u-row u-gap-xxs">
            <span class="c-footer__text">{{ item.name }}</span>
            <IconDefault name="link" />
          </a>
        </li>
      </ul>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.c-footer {
  border-top: 1px solid var(--color-white);
  grid-area: 10 / 1 / 11 / 13;
  height: 100%;

  &__wrapper {
    width: min(100%, 1400px);
  }

  &__list {
    flex: 0 1 250px;
    list-style: none;
  }

  &__link {
    text-decoration: underline;
    text-decoration-color: var(--color-white);
  }
}
</style>
