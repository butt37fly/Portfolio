<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorPosition = ref({ x: 0, y: 0 })
const isClickable = ref(false)
const isVisible = ref(false)

let ticking = false

const isElementClickable = (element) => {
  if (!element) return false

  const clickableTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'DETAILS', 'SUMMARY']
  if (clickableTags.includes(element.tagName)) return true

  if (element.closest('a, button')) return true

  const role = element.getAttribute('role')
  const clickableRoles = ['button', 'link', 'checkbox', 'radio', 'tab', 'menuitem']
  if (role && clickableRoles.includes(role)) return true

  const tabIndex = element.getAttribute('tabindex')
  if (tabIndex !== null && parseInt(tabIndex) >= 0) return true

  if (element.closest('[data-clickable]')) return true

  if (typeof element.onclick === 'function') return true

  return false
}

const updateCursorPosition = (event) => {
  cursorPosition.value.x = event.clientX
  cursorPosition.value.y = event.clientY

  const element = document.elementFromPoint(event.clientX, event.clientY)
  isClickable.value = isElementClickable(element)
}

const handleMouseMove = (event) => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateCursorPosition(event)
      ticking = false
    })
    ticking = true
  }
}

const handleMouseLeave = () => {
  isVisible.value = false
}

const handleMouseEnter = () => {
  isVisible.value = true
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
  document.addEventListener('mouseenter', handleMouseEnter)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseleave', handleMouseLeave)
  document.removeEventListener('mouseenter', handleMouseEnter)
})
</script>

<template>
  <div
    v-show="isVisible"
    :class="['c-cursor', { 'c-cursor--clickable': isClickable }]"
    :style="`--x: ${cursorPosition.x}px; --y: ${cursorPosition.y}px;`"
  >
    <div class="c-cursor__element"></div>
  </div>
</template>

<style lang="scss">
html,
body,
* {
  cursor: none !important;

  @include respond-to(md) {
    cursor: auto !important;
  }
}

.c-cursor {
  --size: 32px;
  --scale: 1;
  --x: 0px;
  --y: 0px;

  height: var(--size);
  left: calc(var(--size) / -2);
  mix-blend-mode: difference;
  pointer-events: none;
  position: fixed;
  top: calc(var(--size) / -2);
  transform: translate(var(--x, 10px), var(--y, 10px));
  transition: scale 0.2s ease;
  width: var(--size);
  will-change: transform;
  z-index: 9999;

  &__element {
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: 100%;
    display: block;
    height: 100%;
    opacity: 1;
    transform: scale(var(--scale));
    transition: all 0.15s ease-in-out;
    width: 100%;
  }

  &--clickable {
    --scale: 1.7;
  }

  @include respond-to(md) {
    display: none;
  }
}
</style>
