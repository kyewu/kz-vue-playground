<script setup lang="ts">
import Logo from '@/assets/imgs/logo.png'
import type { SwiperItemType } from '@/components/types'
import banner from '@/assets/imgs/banner_1.jpg'

const items: SwiperItemType[] = [
  {
    image: banner,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
  {
    image: banner,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
  {
    image: banner,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
  {
    image: banner,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
]

const { y } = useWindowScroll()
</script>

<template>
  <div fixed top-0 w-full bg-black z-36 :class="{ ' shadow-lg': y > 0 }">
    <Container>
      <img w-40 h-full filter-invert :src="Logo" alt="logo">
      <Menu />
    </Container>
  </div>
  <main py-10 flex-1 min-h-500 overflow-y-auto>
    <Carousel :items="items" />
    <RouterView px-4 />
  </main>
  <footer>Footer</footer>
</template>
