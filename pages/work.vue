<template>
  <div>
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

          <p class="pb-24 text-amber-200 text-xl leading-normal flex">
            <a
              v-smooth-scroll
              class="s-link flex"
              href="#sectionIkbenfrits"
            >
              Read on <div class="ml-1 text-3xl i-uil-arrow-right" />
            </a>
            <a
              v-smooth-scroll
              class="s-link flex ml-8"
              href="#sectionEducation"
            >
              Jump to education <div class="ml-1 text-3xl i-uil-arrow-down" />
            </a>
          </p>
        </div>
      </s-container>
    </div>

    <div class="bg-gradient-to-br from-green-200 via-teal-300 to-sky-400">
      <s-container>
        <div class="pt-16 mb-16">
          <h1 class="font-semibold text-4xl md:text-5xl leading-snug md:leading-snug mb-2">
            Ikbenfrits <span class="text-cyan-500">from 2016 to 2022</span>
          </h1>

          <p class="text-lg leading-normal mb-6 max-w-lg">
            Online Mortgage Advice company
          </p>

          <p class="text-lg mb-4 text-gray-800">
            Started off as <strong>Growth Hacker</strong>: coming up with ways to engage with our customers, building it, testing it, measure performance, analysing and going back to the drawing board. As Ikbenfrits grew, I grew into <strong>Full Stack Development</strong>, building and maintaining the public facing, free to use tools and client's dashboard. The last years I fulfilled the role of <strong>Frontend Chapter Lead</strong>.
          </p>

          <p class="text-lg mb-4 text-gray-800">
            Over the years, we built 80+ Vue apps, ranging from client leadmagnets to automatically generated pages based on Funda listings, from dashboard mortgage data dollection forms to document upload interfaces. Touched upon everything related to effective frontend solutions.
          </p>

          <p class="text-lg mb-4 text-gray-800">
            My magnus opus was converting all Vue apps into one glorious Nuxt app. Over a year me and my team refactored all apps into one Nuxt project. This resulted in a clear distinction of a SSR frontend by Nuxt, while all content and other data was delivered by our Ruby and PHP backends over api's.
          </p>
        </div>
      </s-container>

      <work-frits-carousel class="pb-8" />
    </div>


    <div class="bg-gradient-to-br from-purple-400 via-pink-300 to-sky-200">
      <s-container>
        <div class="pt-16 mb-16">
          <h1 class="font-semibold text-4xl md:text-5xl leading-snug md:leading-snug mb-2">
            Shifter <span class="text-pink-500">from 2013 to 2016</span>
          </h1>

          <p class="text-lg leading-normal mb-6 max-w-lg">
            Payroll and Personnel Planning
          </p>

          <p class="text-lg mb-4 text-gray-800">
            Designed the interface of our personnel planning application. Features applying personal contract definitions and applicable labor laws. B2B solution, with interesting design challenges: on the one hand intensive use by power users and employees checking their schedule twice a week on the other. Also directly contributed to the application theme: templating and styling.
          </p>
        </div>
      </s-container>

      <work-shifter-carousel />
    </div>

    <!-- Backend
  agenda, calendar

  Shifter
  2013

  Zappotv
  Design -->

    <div class="references-box">
      Wanna check my references? <s-link to="/contact">Let me know!</s-link>
    </div>
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
