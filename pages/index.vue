<template>
  <div :class="$style['index']">
    <UiButton>Hello</UiButton>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton.vue'

export default {
  components: {
    UiButton,
  },
}
</script>

<style module lang="sass">
.index
    @apply bg-primary-800 relative
</style>
