<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { SwiperItemType } from './types'

defineProps({
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => [],
  },
})

function onSlideChange() {
}

const modules = [Navigation, Pagination]
</script>

<template>
  <Swiper
    :modules="modules" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :pagination="{ clickable: true }" :slides-per-view="1" :loop="true"
    :space-between="50" h-80 @slide-change="onSlideChange"
  >
    <SwiperSlide v-for="(item, index) in items" :key="index" bg-sky-1 h-full>
      <slot :item="item">
        <div :style="{ backgroundImage: `url(${item.image})` }" w-full h-full bg-cover bg-repeat-unset bg-no-repeat bg-center-top />
      </slot>
    </SwiperSlide>
    <div class="swiper-button-prev i-ios-arrow-left" />
    <div class="swiper-button-next i-ios-arrow-right" />
  </Swiper>
</template>

<style scoped lang="scss"></style>
