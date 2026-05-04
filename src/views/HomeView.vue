<script setup>
import ButtonDefault from '@/components/Button-default.vue'
import { TEXTS } from '@/constants'

const texts = TEXTS.views.home
const button = {
  url: '/proyectos',
  title: 'Continuar',
  icon: 'arrow',
  customStyle: ['rev'],
  isView: true,
}
</script>

<template>
  <main class="container home u-flex u-align-center u-w-100">
    <section class="u-flex u-align-center u-w-100 u-g-6">
      <div class="u-flex u-w-100 u-row u-g-7">
        <div class="u-flex u-align-center u-g-6">
          <div class="u-flex">
            <h1 class="title u-text-center" v-html="texts.title"></h1>
            <h2 class="title title--alt u-text-center" v-html="texts.subtitle"></h2>
          </div>
          <div class="u-flex u-text-center" v-html="texts.description"></div>
        </div>
      </div>
      <div class="u-flex">
        <ButtonDefault
          :url="button.url"
          :title="button.title"
          :icon="button.icon"
          :customStyle="button.customStyle"
          :isView="button.isView"
        />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
