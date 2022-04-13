const vueGtag = defineNuxtPlugin((nuxtApp) => {
  const preloadLinks = [
    {
      rel: 'preload',
      as: 'script',
      href: `https://www.googletagmanager.com/gtag/js?id=${nuxtApp.$config.GOOGLE_ANALYTICS_ID}`,
    },
    {
      rel: 'preconnect',
      href: 'https://www.google-analytics.com/',
    },
  ];

  useHead({
    link: preloadLinks,
  });
});

export default vueGtag;
