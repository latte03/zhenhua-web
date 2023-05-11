// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  rules: [
    ['text-base-sm', { 'font-size': '15px' }],
    ['font-mon', { 'font-family': 'Montserrat' }],
    ['transition-base', { transition: 'all 0.3s ease' }]
  ],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
      'wh-full': 'w-full h-full',
      'to-left-top': 'absolute top-0 left-0'
    }
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  presets: [presetUno(), presetIcons(), presetTypography(), presetRemToPx()],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
