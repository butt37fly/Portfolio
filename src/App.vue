<script setup>
import Header from '@/components/templates/Header-default.vue'
import Footer from '@/components/templates/Footer-default.vue'
import BackgroundDefault from './components/Background-default.vue'
</script>

<template>
  <Header></Header>
  <BackgroundDefault />
  <RouterView v-slot="{ Component }">
    <Transition name="page-slid" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <Footer></Footer>
</template>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100dvw;
  height: 100dvh;

  @include respond-to(md) {
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    min-height: 100dvh;
  }
}

.page-slid-enter-active,
.page-slid-leave-active {
  transition: 400ms ease all;
}

.page-slid-enter-from,
.page-slid-leave-to {
  opacity: 0;
}

.page-slid-enter-from {
  transform: translateX(60px);
}

.page-slid-leave-to {
  transform: translateX(-60px);
}
</style>
