<script setup>
import { computed } from 'vue'
import { getButtonColor } from '@/colors.js'
import Icon from '@/components/UI/Icon.vue'
// import { useGlobal } from '@/stores/global'

const props = defineProps({
  label: {
    type: [String, Number],
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  type: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: 'white'
  },
  as: {
    type: String,
    default: null
  },
  outline: {
    type: Boolean,
    default: null
  },
  small: Boolean,
  active: Boolean,
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const is = computed(() => {
  if (props.as) {
    return props.as
  }

  if (props.to) {
    return 'router-link'
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const computedType = computed(() => {
  if (is.value === 'button') {
    return props.type ?? 'button'
  }

  return null
})

// const isDarkMode = computed(() => useGlobal().darkMode)

const isOutlined = computed(() =>
  props.outline !== null
    ? props.outline
    // : props.color === 'white'
    // ? isDarkMode.value
    : false
)

const labelClass = computed(() => (props.small && props.icon ? 'px-1' : 'px-2'))

const componentClass = computed(() => {
  // const base = [
  //   'inline-flex',
  //   'cursor-pointer',
  //   'justify-center',
  //   'items-center',
  //   'whitespace-nowrap',
  //   'focus:outline-none',
  //   'transition-colors',
  //   'focus:ring',
  //   'duration-150',
  //   'border-button',
  //   'rounded-button',
  //   props.active ? 'ring ring-black dark:ring-white' : 'ring-blue-700',
  //   props.small ? 'p-1' : 'p-2',
  //   getButtonColor(props.color, isOutlined.value, !props.disabled)
  // ]
  const base = [
    'button',
    // props.active ? 'ring ring-black dark:ring-white' : 'ring-blue-700',
    // props.small ? 'p-1' : 'p-2',
    // getButtonColor(props.color, isOutlined.value, !props.disabled)
    'button-'+props.color,
    isOutlined.value ? 'button-outline' : '',
    props.small ? 'button-sm' : '',
    // props.disabled ? 'button-disabled' : '',
    props.loading ? 'loading' : ''
  ]

  // if (props.disabled) {
  //   base.push(
  //     'cursor-not-allowed',
  //     'opacity-50'
  //   )
  // }

  // if (props.loading) {
  //   base.push(
  //     'cursor-not-allowed',
  //     'opacity-50',
  //     'button-loading'
  //   )
  // }

  return base
})
</script>

<template>
  <Component
    :is="is"
    :class="componentClass"
    :href="props.href"
    :type="computedType"
    :to="props.to"
    :target="props.target"
    :disabled="props.disabled ? true : null"
  >
    <UiIconify v-if="icon" :icon="icon" />
    <span v-if="label" :class="labelClass">{{ label }}</span>
  </Component>
</template>
