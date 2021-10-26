<template>
  <button :class="[$style['ui-button'], $style[`ui-button--${design}`]]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    design: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style module lang="sass">
.ui-button
  height: max-content
  @apply w-max px-4 py-2 text-gray-800 relative rounded text-lg bg-red-500
</style>
