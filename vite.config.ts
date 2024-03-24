import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4210,
  },
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
    }), // VueRouter must be placed before Vue
    vue(),
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
      exclude: ['**/*.js', '**/components/*.vue'],
    }),
    Layouts({
      layoutsDirs: 'src/layouts', // layout file存放目录
      pagesDirs: 'src/pages',
      defaultLayout: 'default', // 对应src/layouts/default.vue
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        '@vueuse/core',
        '@vueuse/head',
        '@vueuse/math',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'], // Auto import for module exports under directories
      vueTemplate: true, // Auto import inside Vue template
    }),
    vueJsx(),
    VueDevTools(),
    UnoCSS(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets/*': fileURLToPath(new URL('./src/assets/*', import.meta.url)),
      '@pages/*': fileURLToPath(new URL('./src/pages/*', import.meta.url)),
      '@router/*': fileURLToPath(new URL('./src/router/*', import.meta.url)),
      '@store/*': fileURLToPath(new URL('./src/store/*', import.meta.url)),
      '@components/*': fileURLToPath(new URL('./src/components/*', import.meta.url)),
    },
  },
})
