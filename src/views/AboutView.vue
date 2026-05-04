<script setup>
import TabsContainer from '@/components/Tabs-container.vue'

import { TEXTS } from '@/constants'

const texts = TEXTS.views.about
</script>

<template>
  <main class="container about u-flex u-md-justify-start u-w-100">
    <section class="u-flex u-row u-w-100 u-g-6 u-sm-column">
      <div class="u-flex u-w-50 u-sm-w-100" style="">
        <h1 class="title u-mb-5">{{ texts.title }}</h1>
        <div class="u-flex" v-html="texts.description"></div>
      </div>
      <div class="u-flex u-w-50 u-sm-w-100 u-justify-start u-align-start">
        <TabsContainer />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.about {
  @include respond-to(sm) {
    .c-tab {
      &__wrapper {
        height: 40dvh !important;
      }
    }
  }
}
</style>
