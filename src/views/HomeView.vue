<script setup>
import ButtonDefault from '@/components/Button-default.vue'
import IconDefault from '@/components/Icon-default.vue'
import { TEXTS, LINKS } from '@/constants'

const texts = TEXTS.views.home
const links = [LINKS.rrss.github, LINKS.rrss.linkedin]
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
    <section class="u-flex u-gap-l">
      <div class="u-flex u-w-100 u-row u-gap-xl">
        <img id="home__pfp" src="" alt="" width="220" height="220" />
        <div class="u-flex u-align-start u-gap-l">
          <div class="u-flex">
            <h1 class="title">{{ texts.title }}</h1>
            <h2 class="subtitle">{{ texts.subtitle }}</h2>
          </div>
          <div class="u-flex u-row u-justify-start u-gap-xs">
            <a
              v-for="item in links"
              :key="item.name"
              :href="item.url"
              target="_blank"
              class="c-list__link"
            >
              <IconDefault class="c-icon--large" :name="item.icon" />
            </a>
          </div>
          <div class="u-flex u-justify-start u-align-start" v-html="texts.description"></div>
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

<style lang="scss" scoped>
#home__pfp {
  border: 1px solid var(--color-white);
  border-radius: 1000px;
  width: 230px;
  aspect-ratio: 1;
  object-fit: cover;
}
</style>
