import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: [
    // '@/modules/google-fonts',
    '@unocss/nuxt',
  ],
  modules: [
    '@formkit/nuxt',
    'cookie-universal-nuxt',
  ],
  css: [
    'vue3-carousel/dist/carousel.css',
    '@/assets/css/tailwind.css',
    '@/assets/css/global.css',
  ],
  meta: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // TODO: indexing disabled
      { hid: 'robots', name: 'robots', content: 'no-index, no-follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'stijnjanmaat.nl' },
    ],
    link: [
      // copied manually from head, because head 
      // from buildModules doesn't seem to work in this nuxt3 beta
      {
        hid: 'gf-prefetch',
        rel: 'dns-prefetch',
        href: 'https://fonts.gstatic.com/',
      },
      {
        hid: 'gf-preconnect',
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: '',
      },
      {
        hid: 'gf-preload',
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600&display=swap',
      },
      {
        hid: 'gf-style',
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600&display=swap',
      },
    ],
  },
  googleFonts: {
    display: 'swap',
    useStylesheet: true,
    inject: true,
    families: {
      'Poppins': [100, 400, 600],
    },
  },
  unocss: {
    // presets
    uno: false,
    icons: true, // enabled `@unocss/preset-icons`
    attributify: false,
  },
  publicRuntimeConfig: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
  privateRuntimeConfig: {
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  },
  hooks: {
    // 'ready': (nuxt) => {
    //   console.log(nuxt.options.head);
    // },
  },
});
