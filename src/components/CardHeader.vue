<script setup lang="ts">
const props = defineProps({
  typeId: {
    type: Number,
    default: 0,
  },
})

const imageUrl = computed(() => {
  return getImagePath(`title-bg_${props.typeId}.jpg`)
})
</script>

<template>
  <div w-full h-9 mb-7.5>
    <h3 h-full :style="{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'auto 29px' }" bg-no-repeat />
  </div>
</template>

<style scoped lang="scss"></style>
