import VueSmoothScroll from 'vue3-smooth-scroll';

const vue3SmoothScroll = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSmoothScroll, {
    easingFunction: 'easeInOutCubic',
  });
});

export default vue3SmoothScroll;
