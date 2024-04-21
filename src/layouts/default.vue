<script setup lang="ts">
import Logo from '@/assets/imgs/logo.png'
import type { MenuItemType, SwiperItemType } from '@/components/types'
import banner1 from '@/assets/imgs/banner/banner_0.jpg'
import banner2 from '@/assets/imgs/banner/banner_1.jpg'
import banner3 from '@/assets/imgs/banner/banner_2.jpg'
import banner4 from '@/assets/imgs/banner/banner_3.jpg'
import banner5 from '@/assets/imgs/banner/banner_4.jpg'
import banner6 from '@/assets/imgs/banner/banner_5.jpg'

const items: SwiperItemType[] = [
  {
    image: banner1,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
  {
    image: banner2,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
  {
    image: banner3,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
  {
    image: banner4,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
  {
    image: banner5,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
  {
    image: banner6,
    title: 'title',
    subTitle: 'subTitle',
    desc: 'desc',
  },
]

const menuList: MenuItemType[] = [
  { name: '产品', link: '/' },
  { name: '社区', link: '/community' },
  { name: '学习', link: '/study' },
  { name: '关于', link: '/about' },
]

const { y } = useWindowScroll()
</script>

<template>
  <div fixed top-0 w-full bg-white z-36 :class="{ ' shadow-lg': y > 0 }">
    <Container :dynamic="true">
      <img w-40 h-full :src="Logo" alt="logo">
      <Menu :menu="menuList" />
    </Container>
  </div>
  <main py-14 flex-1 overflow-y-auto>
    <Container>
      <Carousel :items="items" />
    </Container>
    <Container>
      <RouterView />
    </Container>
  </main>
  <DefaultFooter />
</template>
