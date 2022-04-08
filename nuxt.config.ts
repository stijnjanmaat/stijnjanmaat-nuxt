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
  // buildModules: [
  //   '@/modules/google-fonts',
  // ],
  modules: ['@formkit/nuxt'],
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/global.css'
  ],
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      // copied manually from head, because head 
      // from buildModules doesn't seem to work in this nuxt3 beta
      {
        hid: 'gf-prefetch',
        rel: 'dns-prefetch',
        href: 'https://fonts.gstatic.com/'
      },
      {
        hid: 'gf-preconnect',
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: ''
      },
      {
        hid: 'gf-preload',
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600&display=swap'
      },
      {
        hid: 'gf-style',
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600&display=swap'
      }
    ]
  },
  googleFonts: {
    display: 'swap',
    useStylesheet: true,
    inject: true,
    families: {
      'Poppins': [100, 400, 600]
    }
  },
  privateRuntimeConfig: {
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  },
  hooks: {
    // 'ready': (nuxt) => {
    //   console.log(nuxt.options.head);
    // },
  }
})
