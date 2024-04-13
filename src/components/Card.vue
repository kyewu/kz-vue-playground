<script setup lang="ts">
import type { CardItemType } from './types'

interface Params {
  card: CardItemType
  imgHeight?: string
  width?: string
}
const props = withDefaults(defineProps<Params>(), {
  imgHeight: 'h-40',
  width: 'w-80',
  card: () => ({ image: '', title: '234' }),
})

const cardClass = computed(() => {
  const cardWidth = props.width || 'w-80'
  const defaultClass = `flex flex-col overflow-hidden flex-nowrap pb-4.5 rounded-2 shadow-[0_6px_10px_0_rgba(95,101,105,0.15)] hover:translate-y-[-2px] transition-all-200 ${cardWidth}`
  return defaultClass
})
</script>

<template>
  <div :class="cardClass">
    <header
      v-if="card.image" :class="imgHeight" w-full bg-no-repeat bg-center bg-cover
      :style="{ backgroundImage: `url(${card.image})` }"
    />
    <section v-if="card.title" class="body" my-0.5 px-2 h-10>
      <p class="text-[#545c63]" font-300 line-clamp-2 line-height-5 hover:font-500 text-14px>
        {{ card.title }}
      </p>
      <slot :item="{ ...card }" />
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
