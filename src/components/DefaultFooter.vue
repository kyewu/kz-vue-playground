<script setup lang="ts">
import type { MenuItemType } from './types'

const menuList: Ref<Array<MenuItemType>> = ref([
  { name: '企业服务', link: '/' },
  { name: '网站地图', link: '/' },
  { name: '关于我们', link: '/' },
  { name: '联系我们', link: '/' },
  { name: '讲师招募', link: '/' },
  { name: '帮助中心', link: '/' },
  { name: '意见反馈', link: '/' },
  { name: '联系我们', link: '/' },
])

const friendList: Ref<Array<MenuItemType>> = ref([
  {
    name: '帮考网',
    link: 'https://www.bkw.cn/',
  },
  {
    name: '慕课教程',
    link: 'http://www.imooc.com/wiki/',
  },
  {
    name: '育路教育',
    link: 'http://www.yuloo.com/',
  },
  {
    name: '图片素材',
    link: 'https://www.ztupic.com/',
  },
  {
    name: '精英考试网',
    link: 'http://www.jdxzz.com/',
  },
  {
    name: '求艺网',
    link: 'https://www.qeo.cn/',
  },
  {
    name: '橡皮牛教育网',
    link: 'https://www.xiangpiniu.com/',
  },
  {
    name: '高顿教育',
    link: 'https://www.gaodun.com/',
  },
  {
    name: 'W3Cschool',
    link: 'https://www.w3cschool.cn/',
  },
  {
    name: '会计学堂',
    link: 'https://www.acc5.com/',
  },
  {
    name: '招生信息网',
    link: 'https://www.bangboer.net/',
  },
  {
    name: '慕课专题',
    link: 'https://www.imooc.com/zt',
  },
  {
    name: '起点课堂 ',
    link: 'https://www.qidianla.com/',
  },
  {
    name: '在职研究生',
    link: 'https://www.eduego.com/',
  },
  {
    name: '溜溜自学网',
    link: 'https://zixue.3d66.com/',
  },
  {
    name: '人人都是产品经理',
    link: 'http://www.woshipm.com/',
  },
  {
    name: '考研',
    link: 'https://www.open.com.cn/',
  },
  {
    name: '节日作文范文',
    link: 'http://www.xuexila.cn/',
  },
  {
    name: '新东方前途出国',
    link: 'https://liuxue.xdf.cn/',
  },
  {
    name: 'APP开发',
    link: 'https://www.apicloud.com/',
  },
  {
    name: '好发表&nbsp;',
    link: 'https://www.haofabiao.com/',
  },
  {
    name: 'CRMEB',
    link: 'https://www.crmeb.com/',
  },
  {
    name: 'CG教育',
    link: 'https://www.hxsd.com/',
  },
  {
    name: '大风车网',
    link: 'http://www.wljyyjy.com/',
  },
  {
    name: '组卷网',
    link: 'http://cooco.net.cn/',
  },
  {
    name: '高考志愿填报',
    link: 'http://www.ddanl.com/',
  },
  {
    name: '运营营销推广',
    link: 'https://www.niaogebiji.com/',
  },
  {
    name: '西部数码',
    link: 'https://www.west.cn/',
  },
])

const socialList: Ref<Array<MenuItemType>> = ref([
  { name: '微信', iconClass: 'i-mdi:star-circle hover:text-red-6', link: '/' },
  { name: '微信', iconClass: 'i-mdi:wechat hover:text-[#545c63]', link: '/' },
  { name: '微信', iconClass: 'i-mdi:sina-weibo hover:text-[#545c63]', link: '/' },
  { name: '微信', iconClass: 'i-mdi:qqchat hover:text-[#545c63]', link: '/' },
])
</script>

<template>
  <div bg-white py-9>
    <Container>
      <footer class="text-[#545c63]" flex flex-col flex-nowrap text-14px font-300>
        <div flex flex-nowrap flex-row justify-between items-center>
          <section>
            <ul flex flex-row items-center>
              <li v-for="(item, index) in menuList" :key="index" mr-6 mb-3>
                <router-link :to="item.link">
                  {{ item?.name }}
                </router-link>
              </li>
            </ul>
            <p class="text-[#93999F]" mb-6 mt-2 text-12px>
              Copyright© 2024 kzv.com 沪ICP备 12003890号-11
              沪公网安备1101080203015x号
            </p>
          </section>
          <section>
            <ul flex flex-row flex-wrap>
              <li
                v-for="(item, index) in socialList" :key="index" class="text-[#545c63]" mr-6 mb-3 flex flex-col
                items-center text-12px font-500
              >
                <div class="group" relative>
                  <i class="text-[#b7bbbf]" :class="item.iconClass" text-32px mb-2 cursor-pointer />
                  <span :class="index === 0 ? 'group-hover:block' : ''" class="left-[calc(50%-1rem)] bottom-[32px]" hidden absolute />
                </div>
                {{ item.name }}
              </li>
            </ul>
          </section>
        </div>
        <div flex flex-nowrap flex-row items-start>
          <div>友情链接：</div>
          <ul flex-1 flex flex-row flex-wrap items-center>
            <li v-for="(item, index) in friendList" :key="index" mr-6 mb-3>
              <router-link :to="item.link">
                {{ item?.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  </div>
</template>

<style scoped lang="scss"></style>
