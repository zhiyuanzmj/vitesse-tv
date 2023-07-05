import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        DEFAULT: '#409EFF',
        ...Array(9).fill('').reduce((a, _, index) => (a[index + 1] = `rgba(var(--el-color-primary-rgb) / ${index + 1}0%)`, a), {}),
      },
    },
  },
  rules: [
    ['shadow-all-side', { 'box-shadow': '0 0 10px #239fcf' }],
  ],
  shortcuts: [
    ['btn', 'inline-block cursor-pointer text-base select-none transition duration-200 ease-in-out !hover:text-primary text-gray-500  dark:text-gray-200'],
    ['link', 'text-primary hover:opacity-70 hover:underline'],
    ['layout', 'flex flex-col flex-nowrap bg-zinc-100 dark:bg-zinc-800 overflow-hidden'],
    ['main', 'm-3 p-3 pb-2 bg-white dark:bg-zinc-900 shadow rounded flex flex-1 flex-col gap-2 overflow-auto'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
      },
      collections: {
        custom: FileSystemIconLoader(
          './src/assets/icons',
        ),
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    ...['blue-500', 'teal-500', 'indigo-500', 'rose-500'].map(i => `group-hover:bg-${i} text-${i}`).join(' ').split(' '),
  ],
})
