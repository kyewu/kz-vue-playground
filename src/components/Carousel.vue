<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'
import arrowLeft from '@assets/imgs/banner/arrow-left.png'
import type { SwiperItemType } from './types'

defineProps({
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => [],
  },
})

function onSlideChange() {
}

const modules = [Navigation, Pagination, Autoplay]
</script>

<template>
  <Swiper
    py-8 :modules="modules" :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    :pagination="{ clickable: true, el: '.swiper-pagination' }" :slides-per-view="1" :loop="true" :space-between="50"
    w-full h-95.5 @slide-change="onSlideChange"
  >
    <SwiperSlide v-for="(item, index) in items" :key="index" bg-sky-1 h-full>
      <slot :item="item">
        <div
          :style="{ backgroundImage: `url(${item.image})` }" w-full h-full bg-cover bg-repeat-unset bg-no-repeat
          bg-center-top
        />
      </slot>
    </SwiperSlide>
    <div class="swiper-button-prev">
      <img :src="arrowLeft" alt="arrow-left">
    </div>
    <div class="swiper-button-next">
      <img class="arrow-right" :src="arrowLeft" alt="arrow-right">
    </div>
    <template #pagination>
      <div class="swiper-pagination" />
    </template>
  </Swiper>
</template>

<style scoped lang="scss">
::v-deep(.swiper-pagination-bullet) {
  @apply bg-[rgba(255,255,255,0.75)] opacity-100;

  &.swiper-pagination-bullet-active {
    @apply w-5 rounded-2;
  }
}

.swiper-pagination {
  @apply text-right pr-5;
}

.swiper-button-prev,
.swiper-button-next {
  @apply position-absolute top-[50%] w-12 h-12 z-10 cursor-pointer rounded-6 text-[#fff] bg-[rgba(28,31,33,0.1)] transition-delay-200 select-none;

  &::after {
    font-size: 0;
  }

  &:hover {
    background: rgba(28, 31, 33, 0.5);
  }

  &>img {
    width: 1rem;

    &.arrow-right {
      @apply rotate-y-180;
    }
  }
}
</style>
