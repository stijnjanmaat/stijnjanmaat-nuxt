import { defineNuxtConfig } from 'nuxt3'

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
    '@/modules/google-fonts',
  ],
  modules: ['@formkit/nuxt'],
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/global.css'
  ],
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    // link: [
    //   {
    //     hid: 'test',
    //     rel: 'test',
    //     href: 'https://asd.nl'
    //   }
    // ]
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
    'ready': (nuxt) => {
      // console.log(nuxt.options.head);
    },
  }
})
