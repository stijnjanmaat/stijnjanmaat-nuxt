<template>
  <div class="bg-gradient-to-br to-orange-600 from-red-500">
    <header>
      <s-container class="pt-12 flex justify-between">
        <s-logo class="text-amber-300" />
        <s-menu />
      </s-container>
    </header>

    <s-container>
      <div class="flex justify-between">
        <div class="pt-32">
          <h1 class="font-semibold text-4xl md:text-5xl leading-snug md:leading-snug">
            Hi, I'm Stijn Janmaat
          </h1>
          <p class="text-amber-300 mt-12 text-xl leading-normal">
            Interaction Designer turned Frontend Developer.
          </p>
          <p>
            Over the years moved from product and concept development, through full stack development and growth hacking towards frontend development.
          </p>
        </div>
        <me-photo class="w-1/3" />
      </div>
    </s-container>

    <s-container>
      <!-- <h2 class="text-3xl font-semibold">
        Skills
      </h2> -->

      <ul>
        <li>
          <h3 class="text-3xl font-semibold">
            Elegant Frontend Solutions
          </h3>
          <p>
            Over 6 years of professional experience in <strong>Vue</strong>, <strong>Nuxt</strong>, <strong>Javascript ES6</strong> and <strong>Node.js</strong>. Touched upon all things web and browser: technical seo, performance, responsiveness, security, compatibility.
          </p>
        </li>
        <li>
          <h3 class="text-3xl font-semibold">
            Decent Testing
          </h3>
          <p>Unit testing with Mocha, Sinon and AVA. End-to-end testing with Playwright and Cypress. Reliability and structured development</p>
        </li>
        <li>
          <h3>Team work</h3>
          <p>
            Creating and managing teams. 
          </p>
        </li>
        <li>
          <h3 class="text-3xl font-semibold">
            Backend
          </h3>
          <p>11 years on in PHP, Wordpress, and some Ruby on Rails.</p>
        </li>
        <li>
          <h3>Interaction design</h3>
          <p>
            Occasional graphic design
          </p>
        </li>
      </ul>
    </s-container>

    <s-footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'On me, Stijn Janmaat - stijnjanmaat.nl',
});

onMounted(() => {
  const visitedCookie = useVisitedCookie();
  
  visitedCookie.meVisited = true;
});
</script>
