<script setup>
import { onMounted, ref, computed } from 'vue'
import { fetchJson } from '@/composables/fetchJson'
import { MasonryWall } from '@yeger/vue-masonry-wall'

import CardProject from '@/components/Card-project.vue'
import ButtonDefault from '@/components/Button-default.vue'
import CardProjectSkeleton from '@/components/Card-project-skeleton.vue'

const path = '/json/projects.json'
const projects = ref([])
const activeProject = ref({})
const isLoading = ref(true)

const body = ref(null)

let isModalActive = ref(null)

const openProject = (data) => {
  isModalActive.value = true
  activeProject.value = data
  body.value.classList.add('u-modal-active')
}
const closeProject = () => {
  isModalActive.value = false
  body.value.classList.remove('u-modal-active')
}

const masonryItems = computed(() => {
  if (isLoading.value) {
    return Array(6).fill({ isSkeleton: true })
  }
  return projects.value
})

onMounted(async () => {
  body.value = document.querySelector('body')

  isLoading.value = true
  projects.value = await fetchJson(path)
  isLoading.value = false

  if (projects.value.length > 0) {
    activeProject.value = projects.value[0]
  }
})
</script>

<template>
  <main class="container projects u-flex u-w-100 u-align-start u-justify-start">
    <MasonryWall
      class="c-feed"
      :items="masonryItems"
      :gap="16"
      :column-width="300"
      :min-columns="1"
      :max-columns="6"
    >
      <template #default="{ item }">
        <CardProjectSkeleton v-if="item.isSkeleton" />
        <CardProject v-else v-bind="item" :onClick="() => openProject(item)" />
      </template>
    </MasonryWall>
    <Teleport to="body">
      <section v-show="isModalActive" class="c-modal u-flex u-align-center u-justify-center">
        <div
          class="c-modal__wrapper u-flex u-row u-md-column u-align-center u-justify-center u-g-3"
        >
          <div class="c-modal__images u-flex u-align-center u-justify-start u-g-3 u-px-3">
            <img
              v-for="item in activeProject.gallery"
              :key="item"
              :src="item"
              :alt="activeProject.title"
              class="c-modal__image"
            />
          </div>
          <div class="c-modal__content">
            <CardProject v-bind="activeProject" :onModal="true" />
            <div
              class="c-modal__footer u-flex u-w-100 u-row u-align-center u-justify-between u-g-3 u-p-3"
            >
              <div class="c-modal__actions u-flex u-row u-g-2"></div>
              <div class="c-modal__actions u-flex u-row u-g-2">
                <ButtonDefault title="Visitar web" icon="link" :url="activeProject.url" />
                <ButtonDefault
                  title="Cerrar"
                  icon="cancel"
                  :isAction="true"
                  :onClick="closeProject"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Teleport>
  </main>
</template>

<style lang="scss" scoped>
.c-feed {
  width: 100%;
}
.c-modal {
  height: 100dvh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100dvw;
  z-index: 100;

  &::before {
    background: rgba(0, 0, 0, 0.3);
    content: '';
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  &__wrapper {
    background-color: var(--color-gray);
    border-radius: 10px;
    border: 1px solid var(--color-white);
    height: 90%;
    width: min(90%, 1000px);
    z-index: 100;
    overflow: hidden;
  }

  &__images {
    width: 55%;
    background-color: var(--color-gray);
    height: 95%;
    overflow: auto;

    scrollbar-width: thin;
    scrollbar-color: var(--color-white) var(--color-black);
  }

  &__image {
    width: 100%;
    border-radius: 6px;
    object-fit: contain;
  }

  &__content {
    width: 45%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background-color: var(--color-background);
    position: relative;
  }

  &__footer {
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: 10;
  }

  @include respond-to(md) {
    &__wrapper {
      flex-direction: column-reverse;
    }

    &__images,
    &__content {
      width: 100%;
    }

    &__content {
      height: auto;
      border-radius: 10px;
    }

    &__footer {
      position: relative;
    }
  }
}
</style>
