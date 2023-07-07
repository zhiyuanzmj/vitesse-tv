import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'

// import eslint from 'vite-plugin-eslint'
import Unocss from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssTarget: ['chrome30'],
  },
  plugins: [
    legacy({
      targets: ['Android >= 4.4'],
    }),
    VueMacros({
      setupSFC: true,
      defineProp: {
        edition: 'johnsonEdition',
      },
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
        }),
      },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
        '@vueuse/head',
      ],
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
    }),
    // eslint(),
    Unocss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
