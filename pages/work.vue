<template>
  <div class="bg-gradient-to-br to-indigo-600 from-cyan-500">
    <header>
      <s-container class="pt-12 flex justify-between">
        <s-logo class="text-cyan-200" />
        <s-menu />
      </s-container>
    </header>

    <s-container>
      <div class="pt-24 min-h-[65vh]">
        <h1 class="font-semibold text-4xl md:text-5xl leading-snug md:leading-snug mb-6">
          Check out some of my work
        </h1>
        <p class="text-amber-200 text-xl leading-normal mb-12 max-w-lg">
          Over the years moved from product and concept development, through full stack development and growth hacking towards frontend development.
        </p>

        <a
          v-smooth-scroll
          class="s-link text-amber-200 text-xl leading-normal flex pb-24"
          href="#sectionIkbenfrits"
        >
          Read on <div class="ml-1 text-3xl i-uil-arrow-down" />
        </a>
      </div>
    </s-container>
  </div>

  <div class="bg-gradient-to-br from-green-200 via-teal-300 to-sky-400">
    <s-container>
      <div class="pt-12 min-h-[65vh]">
        <h1 class="font-semibold text-4xl md:text-5xl leading-snug md:leading-snug mb-4">
          Ikbenfrits (2016 to 2022)
        </h1>

        <p class="text-amber-600 text-xl leading-normal mb-12 max-w-lg">
          Online mortgage advisor
        </p>

        <p>
          Started off as Growth Hacker: coming up with ways to engage with our customers
        </p>
      </div>
    </s-container>
  </div>

  <div>
    ikbenfrits

    vue apps, dashboard, tools
    seo
  </div>

  Backend
  agenda, calendar

  Shifter
  2013

  Zappotv
  Design
  <div class="references-box">
    Wanna check my references? <s-link to="/contact">Let me know!</s-link>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useHead({
  title: 'My work - stijnjanmaat.nl',
});

onMounted(() => {
  const visitedCookie = useVisitedCookie();

  visitedCookie.workVisited = true;
});
</script>
