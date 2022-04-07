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
    '~/modules/google-fonts',
  ],
  modules: ['@formkit/nuxt'],
  css: [
    "assets/css/tailwind.css",
    "assets/css/global.css"
  ],
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
  googleFonts: {
    display: 'swap',
    useStylesheet: true,
    inject: true,
    families: {
      'Poppins': [100, 400, 600]
    }
  },
})
