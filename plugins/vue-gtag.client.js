// import Vue from 'vue';
import VueGtag from 'vue-gtag';

const vueGtag = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: nuxtApp.$config.GOOGLE_ANALYTICS_ID,
      params: {
        anonymize_ip: true,
      },
      disabled: process.env.NODE_ENV !== 'production', // Here you could ignore user privacy and set to true
    },
  });
});

export default vueGtag;
