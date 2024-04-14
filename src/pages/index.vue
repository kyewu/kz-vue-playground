<script setup lang="ts">
import type { CardItemType } from '@/components/types'

const cardList: Ref<CardItemType[]> = ref([
  {
    image: getImagePath('course_0.jpg'),
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
    level: 'Junior',
    price: 499,
    oPrice: 599,
    tag: 'New',
    learnerCount: 1000,
  },
  {
    image: getImagePath('course_1.jpg'),
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
    level: 'Junior',
    price: 499,
    learnerCount: 1000,
  },
  {
    image: getImagePath('course_1.jpg'),
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
    level: 'Junior',
    price: 499,
    learnerCount: 1000,
  },
  {
    image: getImagePath('course_1.jpg'),
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
    level: 'Junior',
    price: 499,
    learnerCount: 1000,
  },
  {
    image: getImagePath('course_1.jpg'),
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
    level: 'Junior',
    price: 499,
    learnerCount: 1000,
  },
  {
    image: getImagePath('course_1.jpg'),
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
    level: 'Junior',
    price: 499,
    learnerCount: 1000,
  },
  {
    image: getImagePath('course_1.jpg'),
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
    level: 'Junior',
    price: 499,
    learnerCount: 1000,
  },
  {
    image: getImagePath('course_1.jpg'),
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
    level: 'Junior',
    price: 499,
    learnerCount: 1000,
  },
])
</script>

<template>
  <div w-full flex-col py-8>
    <card-header :type-id="2" />
    <div class="grid-cols-[repeat(auto-fill,16.875rem)]" grid grid-flow-row gap-6 w-full>
      <card v-for="(card, index) in cardList" :key="index" :card="card" img-height="h-38" width="w-67.5">
        <template #default="{ card }">
          <div class="text-[#9199a1]" w-full text-12px>
            <div my-2>
              {{ levelPipe(card.level) }}
              <em> · </em>
              {{ card.learnerCount }}人报名
            </div>
            <footer>
              <span v-if="card.tag" class="b-[rgba(242,13,13,0.2)] bg-[rgba(242,13,13,0.6)]" px-1 b-1 rounded-0.5 mr-1 text-white>{{ tagLabelPipe(card.tag) }}</span>
              <span v-if="card.price" text-red font-bold mr-1>{{ pricePipe(card.price) }}</span>
              <span v-if="card.oPrice" class="text-[#6D7278]" line-through>{{ pricePipe(card?.oPrice) }}</span>
            </footer>
          </div>
        </template>
      </card>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
