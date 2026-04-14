<script setup>
import CardInfo from '@/components/Card-info.vue'
import ButtonDefault from '@/components/Button-default.vue'
import { onMounted, ref } from 'vue'
import { fetchJson } from '@/composables/fetchJson'

const path = '/json/profile.json'
const data = ref([])

const activeTab = ref(null)

const changeTab = (id) => {
  activeTab.value = id
}

onMounted(async () => {
  const result = await fetchJson(path)

  data.value = Object.values(result)

  if (data.value.length > 0) {
    activeTab.value = data.value[0].slug
  }
})
</script>

<template>
  <div class="c-tab js-tab u-flex u-justify-start u-align-start u-w-100">
    <div role="tablist" class="c-tab__head u-flex u-row u-w-100 u-align-start u-justify-start">
      <ButtonDefault
        v-for="key in data"
        :key="`${key.title}-button`"
        :title="key.title"
        :customStyle="['tab', 'inactive']"
        :datu-align-tab-button="key.slug"
        :onClick="() => changeTab(key.slug)"
      />
    </div>
    <div
      role="tabpanel"
      class="c-tab__wrapper u-flex u-w-100 u-justify-start u-align-start u-padding-s"
    >
      <div
        class="c-tab__content js-tab-content u-flex u-w-100 u-justify-start u-align-start u-gap-s"
        v-for="key in data"
        :key="`${key.title}-tab`"
        :datu-align-tab-content="key.slug"
        v-show="activeTab === key.slug"
      >
        <CardInfo v-for="item in key.content" :key="item.title" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-tab {
  height: 100%;

  &__head {
    z-index: 1;
    margin-bottom: -1px;
  }

  &__wrapper {
    border-radius: 0 6px 6px 18px;
    border: 1px solid var(--color-white);
    height: 70dvh;
    overflow: auto;
  }
}
</style>
