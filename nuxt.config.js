export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'multiLanguage-app',
    htmlAttrs: {
      dir: 'ltr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/custom.scss', '@/assets/less/rtl.less'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/route.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/pwa'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'EN',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
          },
          {
            name: 'AR',
            code: 'ar',
            iso: 'ar',
            file: 'ar.js',
          },
        ],
        lazy: true,
        seo: true,
        loadLanguagesAsync: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        vueI18nLoader: true,
        vueI18n: { fallbackLocale: 'en' },
      },
    ],
  ],
  bootstrapVue: {
    icons: true, // Install the IconsPlugin (in addition to BootStrapVue plugin
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  pwa: {
    icon: false, // disables the icon module
  },
  loading: '~/components/loading.vue',
}
