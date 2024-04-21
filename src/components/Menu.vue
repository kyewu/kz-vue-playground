<script setup lang="ts">
import type { MenuItemType } from './types'

withDefaults(defineProps<{ menu: MenuItemType[] }>(), { menu: () => [] })
</script>

<template>
  <div flex>
    <router-link v-for="item in menu" :key="item?.link" class="route-items" :to="item?.link">
      {{ item?.name }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.route-items {
  font-size: 12px;
  @apply relative text-black text-4 px-8 py-4 font-serif font-300 cursor-pointer;

  &:hover {
    @apply font-500 shadow-sm;

    &::after {
      content: '';
      @apply absolute bottom-0 h-[1px] bg-white w-8 left-[calc(50%-1rem)];
    }
  }
}
</style>
