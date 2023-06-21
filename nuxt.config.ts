export default defineNuxtConfig({
  srcDir: 'src',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }
      ],
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'referrer', content: 'no-referrer' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  routeRules: {
    '/about/*': { swr: true },
    '/contact': { swr: true },
    '/public/recruitment': { swr: true }
  },
  vue: {
    compilerOptions: {
      directiveTransforms: {
        motion: () => ({
          props: [],
          needRuntime: true
        })
      }
    }
  },
  modules: [
    // https://github.com/nuxt-modules/icon https://icones.js.org/
    'nuxt-icon',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // unocss plugin - https://github.com/unocss/unocss
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    // https://github.com/huntersofbook/huntersofbook/tree/main/packages/naive-ui-nuxt
    '@huntersofbook/naive-ui-nuxt'
  ],

  build: {
    transpile: [/echarts/, 'claygl']
  },
  sourcemap: {
    server: false
  },
  css: ['@/assets/css/index.scss'],

  // localization - i18n config
  i18n: {
    locales: [
      { code: 'zh', file: 'zh-CN.json' },
      { code: 'en', file: 'en-US.json' }
    ],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'zh',
      fallbackLocale: 'zh',
      availableLocales: ['en', 'zh']
    }
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts']
      }
    }
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode'
  },

  naiveUI: {
    // inlineThemeDisabled: true
  },

  vite: {
    logLevel: 'info'
  }
})
