<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: null
  },
  to: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'flex'
  },
  activeColor: {
    type: String,
    default: 'text-primary'
  },
  hasDivider: Boolean,
  isDesktopIconOnly: Boolean,
  dropdown: Boolean,
  active: Boolean
})

const is = computed(() => {
  if (props.href) {
    return 'a'
  }

  if (props.to) {
    return 'router-link'
  }

  return 'div'
})

const componentClass = computed(() => {
  const base = [
    props.type,
    'items-center',
    'grow-0',
    'shrink-0',
    'relative',
    'cursor-pointer',
    'hover:text-primary',
    props.active ? props.activeColor : 'text-on-menu'
  ]

  if (props.type === 'block') {
    base.push('lg:flex')
  }

  if (!props.dropdown) {
    base.push('py-2', 'px-3')
  } else {
    base.push('p-0', 'lg:py-2', 'lg:px-3')
  }

  if (props.hasDivider) {
    base.push('lg:border-r-menu-divider')
  }

  if (props.isDesktopIconOnly) {
    base.push('lg:w-16', 'lg:justify-center')
  }

  return base
})

const activeClass = computed(() => {
  return is.value === 'router-link' ? props.activeColor : null
})
</script>

<template>
  <Component
    :is="is"
    :class="componentClass"
    :to="to"
    :href="href"
    :exactActiveClass="activeClass"
  >
    <slot />
  </Component>
</template>
