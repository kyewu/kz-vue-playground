<script setup lang="ts">
import Logo from '@/assets/imgs/logo.png'
</script>

<template>
  <div flex align-items-center bg-black>
    <img w-40 h-full filter-invert :src="Logo" alt="logo">
    <div flex>
      <router-link class="route-items" to="/">
        产品
      </router-link>
      <router-link class="route-items" to="/community">
        社区
      </router-link>
      <router-link class="route-items" to="/study">
        学习
      </router-link>
      <router-link class="route-items" to="/about">
        关于
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.route-items {
    @apply relative text-white text-xl px-8 py-2 font-300 cursor-pointer;

    &:hover {
        @apply font-500 shadow-sm;

        &::after {
            content: '';
            @apply absolute bottom-0 h-1 bg-white w-8 left-[calc(50%-1rem)];
        }
    }
}
</style>
