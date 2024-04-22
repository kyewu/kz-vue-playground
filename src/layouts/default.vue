<script setup lang="ts">
import Logo from '@/assets/imgs/logo.png'
import type { MenuItemType } from '@/components/types'

const menuList: MenuItemType[] = [
  { name: '产品', link: '/' },
  { name: '社区', link: '/community' },
  { name: '学习', link: '/study' },
  { name: '关于', link: '/about' },
]

const { y } = useWindowScroll()
</script>

<template>
  <div class="border-b-[#f3f5f6]" border-b-1 fixed top-0 w-full bg-white z-36 :class="{ ' shadow-lg': y > 0 }">
    <Container :dynamic="true">
      <img w-40 h-full :src="Logo" alt="logo">
      <Menu :menu="menuList" />
    </Container>
  </div>
  <main pt-14 flex-1 overflow-y-auto>
    <RouterView />
    <DefaultFooter />
  </main>
</template>
