<script setup>
import CustomIcon from './Icon-default.vue'

const props = defineProps({
  title: String,
  icon: String,
  textStyle: String,
})
</script>

<template>
  <CustomIcon class="c-button__icon c-icon--md" v-if="props.icon" :name="props.icon" />
  <span :class="props.textStyle">{{ props.title }}</span>
</template>
