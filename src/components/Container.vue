<script setup lang="ts">
const props = withDefaults(defineProps<{ dynamic?: boolean }>(), { dynamic: false })

const widthClass = computed(() => {
  if (props?.dynamic)
    return 'dynamic default'

  return 'default'
})
</script>

<template>
  <div :class="widthClass" flex mx-auto justify-start items-center flex-col>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.default {
  @apply w-[1152px];

  &>.dynamic {
    @apply max-w-[1366px] min-w-[1152px];
  }
}
</style>
