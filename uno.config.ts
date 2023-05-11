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
    ['font-mon', { 'font-family': 'Montserrat' }]
  ],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center'
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
