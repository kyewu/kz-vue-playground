<script setup lang="ts">
import Logo from '@/assets/imgs/logo.png'

const { y } = useWindowScroll()
</script>

<template>
  <div fixed top-0 w-full bg-black z-36 :class="{ ' shadow-lg': y > 0 }">
    <Container>
      <img w-40 h-full filter-invert :src="Logo" alt="logo">
      <Menu />
    </Container>
  </div>
  <main px-4 py-10 flex-1 min-h-4000 overflow-y-auto>
    Main
    <RouterView />
  </main>
  <footer>Footer</footer>
</template>
