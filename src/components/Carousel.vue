<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import type {Swiper as ISwiper} from 'swiper'

const imgs: Ref<Array<number>> = ref([1, 2, 3])

function onSlideChange() {
}

const modules = [Navigation, Pagination]
</script>

<template>
  <Swiper
    :modules="modules" :navigation="true" :pagination="{ clickable: true }" :slides-per-view="1" :loop="true"
    :space-between="50" class="h-[300px]" @slide-change="onSlideChange"
  >
    <SwiperSlide v-for="(item, index) in imgs" :key="index" bg-sky-1 h-full>
      Slide {{ index }}
    </SwiperSlide>
    <!-- ... -->
  </Swiper>
</template>

<style scoped lang="scss"></style>
