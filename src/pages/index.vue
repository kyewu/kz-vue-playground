<script setup lang="ts">
import CardImage from '@assets/imgs/course/course_0.jpg'
import type { CardItemType } from '@/components/types'

const cardList: CardItemType[] = [
  {
    image: CardImage,
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
  },
]
</script>

<template>
  <card v-for="(card, index) in cardList" :key="index" :card="card" img-height="h-38" width="w-67.5" />
</template>

<route lang="yaml">
meta:
  layout: default
</route>
