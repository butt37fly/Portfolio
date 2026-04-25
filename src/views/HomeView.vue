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
  <main class="container home">
    <section class="c-box u-flex u-align-start u-padding-xl u-gap-l">
      <div class="u-flex u-w-100 u-row u-gap-xl">
        <div class="u-flex u-align-start u-gap-l">
          <div class="u-flex">
            <h1 class="subtitle">{{ texts.title }} - {{ texts.subtitle }}</h1>
          </div>
          <div class="u-flex" v-html="texts.description"></div>
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
