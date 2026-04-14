<script setup>
import Header from '@/components/templates/Header-default.vue'
import Footer from '@/components/templates/Footer-default.vue'
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style>
#app {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100dvw;
  height: 100dvh;
}
</style>
