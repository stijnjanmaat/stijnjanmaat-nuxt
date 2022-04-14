<template>
  <div class="bg-gradient-to-r from-orange-600 to-amber-500">
    <header>
      <s-container class="pt-12 flex justify-between">
        <s-logo class="text-amber-300" />
        <s-menu />
      </s-container>
    </header>

    <s-container>
      <div class="flex justify-between">
        <div class="pt-24 max-w-lg min-h-[75vh]">
          <h1 class="font-semibold text-4xl md:text-5xl leading-snug md:leading-snug">
            Hi, I'm Stijn Janmaat
          </h1>
          <p class="text-amber-200 mt-12 text-xl leading-normal mb-6">
            Interaction Designer turned Frontend Developer.
          </p>
          <p class="text-amber-200 text-xl leading-normal mb-12">
            Over the years moved from product and concept development, through full stack development and growth hacking towards frontend development.
          </p>

          <a
            v-smooth-scroll
            class="s-link text-amber-200 text-xl leading-normal flex"
            href="#sectionFrontend"
          >
            Read more below <div class="ml-1 text-3xl i-uil-arrow-down" />
          </a>
        </div>

        <me-photo class="w-1/3" />
      </div>
    </s-container>

    <div class="bg-gradient-to-t to-neutral-800 from-gray-600">
      <div class="section-frontend-bg bg-repeat">
        <div class="section-frontend bg-fixed h-[90vh] bg-no-repeat">
          <s-container>
            <div class="max-w-md text-white">
              <h3
                id="sectionFrontend"
                class="text-4xl leading-snug font-semibold pt-16"
              >
                Elegant Frontend Solutions
              </h3>
              <p class="mt-12 text-xl leading-normal">
                Over 6 years of professional experience in <strong>Vue</strong>, <strong>Nuxt</strong> and <strong>Javascript ES6</strong>. Touched upon all things web and browser: technical seo, privacy measures and compliance, performance, security, responsiveness, browser compatibility, tracking etcetera.
              </p>
            </div>
          </s-container>
        </div>
      </div>
      
      <div class="section-testing min-h-[60vh] pb-24">
        <s-container class="px-8 rotate-1 -mt-4">
          <div class="bg-white px-24 pb-24">
            <div class="-rotate-1">
              <h3
                id="sectionTesting"
                class="text-4xl font-semibold pt-16 text-center"
              >
                Decent Testing
              </h3>
              <p class="mt-12 text-xl leading-normal">
                I've set up projects unit testing with <strong>Mocha</strong>, <strong>Sinon</strong> and <strong>AVA</strong>. Started off with end-to-end testing suite with <strong>Cypress</strong>, but eventually went with <strong>Playwright</strong> which is really great to work with. I got acquainted with increasing reliability and helps structure development through testing.
              </p>
            </div>
          </div>
        </s-container>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-bl from-green-500 to-emerald-800">
    <div class="section-team">
      <s-container>
        <div class="max-w-md text-white">
          <h3 class="text-4xl font-semibold pt-16">
            Team work
          </h3>
          <p class="mt-12 text-xl leading-normal">
            I've worked in many different team structures: multidisciplinary and pure development, with Agile and Kanban development framework. As <strong>Frontend Chapter Lead</strong> I developed and shared code design patterns, managed documentation, organize knowledge sharing sessions about best practices, assuring the code quality is up to standards. In some project teams I fulfilled the role of <strong>Product Owner</strong> while also contributing as a developer.
          </p>
          <p class="mt-6 text-xl leading-normal">
            My leadership style revolves around responsibility, equality and inspiration. I encourage my peers to <strong>think critically</strong> about what we're working on, having a constant discussion is vital to continuous improvement of our product. This freedom to decide what's next also means it's <strong>encouraged to take responsibility</strong>. But most importantly: by having a very <strong>clear purpose</strong> in mind and believing we can achieve the goals associated, I'd like to put energy in inspiring the team. To work for the common goals, and for eachother.
          </p>
          <p class="mt-6 text-xl leading-normal">
            This is also why I'm a <strong>big fan of Holacracy</strong>. My best experiences were with self governing teams. Everybody had their own expertises, roles and responsbilities, but have one purpose and work on one common goal. 
          </p>
        </div>

        <div class="animate-pan pb-24">
          <img
            src="@/assets/img/bee.svg"
            class="mt-12 ml-12 bee animate-hovering w-24"
          >
        </div>
      </s-container>
    </div>
  </div>

  <div class="bg-white">
    <div class="section-design min-h-[70vh]">
      <s-container>
        <div class="max-w-md pb-16 text-gray-700">
          <h3 class="text-4xl font-semibold pt-16">
            Interaction Design
          </h3>
          <p class="mt-12 text-lg">
            Raised as and trained to be an Interaction Designer, I very much believe in the <strong>power of design</strong>. Creating a perfectly fitting, elegant solution in which the user's need is properly addressed is very satisfying and I always aspire to achieve.
          </p>
          <p class="mt-6 text-lg">
            In the past I've done amongst other things <strong>Product</strong>, <strong>Interface</strong>, <strong>Graphic</strong> and <strong>Interaction design</strong>: focusing on the use and its effects on the user. I learned about research methodology and used various creative techniques to tickle brains to come up with clever solutions.
          </p>
          <p class="mt-6 text-lg">
            Since I love to be involved in both <strong>Design and Development</strong>, I know how valuable it is to have these <strong>two competences working in symbiosis</strong>. I provide insight as a developer early on in the process to contribute to ideas regarding realizability; and as a designer I keep an eye out when the product is actually being built.
          </p>
        </div>
      </s-container>
    </div>
  </div>

  <div class="bg-gray-600">
    <div class="section-full-stack min-h-[70vh]">
      <s-container>
        <div class="max-w-md text-white">
          <h3 class="text-4xl font-semibold pt-16">
            Full Stack Experience
          </h3>
          <p class="mt-12 text-xl leading-normal">
            Altough I have specialized in frontend, I started off with playing around with <strong>PHP</strong> and <strong>Wordpress</strong> 11 years ago. It quickly turned into my profession. Past couple of years I developed my skills in <strong>Node.js</strong> and <strong>Ruby on Rails</strong>. 
          </p>
          <p>
            Worked a lot with <strong>MySQL</strong>, <strong>Redis</strong>.
          </p>
          <p class="mt-6 text-xl leading-normal">
            As most senior developer at Frits, I also gained experience in devops. I (co)created and maintained complex CI pipelines in <strong>Gitlab CI</strong> and worked intensively with <strong>Docker</strong> and <strong>k8s</strong>.
          </p>
        </div>
      </s-container>
    </div>
  </div>
  

  <div>
    philosophy
    don't build everything yourself
    educated cuts
    balance in speed and quality

    leadership
    lead by example
    inspiration
    getting energy from the common cause

    impact

    future

    develop myself in educating, strategic achieving goals
  </div>

  <s-footer />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useHead({
  title: 'On me, Stijn Janmaat - stijnjanmaat.nl',
});

onMounted(() => {
  const visitedCookie = useVisitedCookie();
  
  visitedCookie.meVisited = true;
});
</script>

<style scoped>
  
  .section-frontend-bg {
    background-image: url('@/assets/img/starry-bg.svg');
    background-size: 50%;
  }

  .section-frontend {
    background-image: url('@/assets/img/frontend-logos.svg');
    background-size: 70% 80%;
    background-position-y: center;
    background-position-x: 85%;

    text-shadow:
      1px 1px rgba(38,38,38),
      1px 2px rgba(38,38,38),
      2px 1px rgba(38,38,38),
      2px 2px rgba(38,38,38);
  }

  .section-team {
    background-image: url('@/assets/img/growing-grass.svg');
    background-size: 45%;
    background-position-y: calc(100% + 3px);
    background-position-x: 70%;
    background-repeat: no-repeat;
  }

@keyframes hovering {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12%);
  }
}
.animate-hovering {
  animation: hovering 3s ease-in-out infinite;
}

@keyframes pan {
  0%, 100% { transform: translateX(0) }
  50% { transform: translateX(12px) }
}

.animate-pan {
  animation: pan 2s ease-in-out infinite;
}

.section-design {
  background-image: url('@/assets/img/creative-process.svg');
  background-repeat: no-repeat;
  background-size: 40% 100%;
  background-position-x: 90%;
  background-position-y: calc(100% + 50px);

  text-shadow:
      1px 1px white,
      1px 2px white,
      2px 1px white,
      2px 2px white;
}
</style>
