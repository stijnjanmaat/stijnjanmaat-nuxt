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
          <h1 class="font-semibold text-4xl md:text-5xl leading-tight md:leading-tight mb-6">
            Check out some of my work
          </h1>
          <p class="text-amber-200 text-xl leading-normal mb-10 max-w-lg">
            Scroll down to find some of my projects on concept and web development as well as my education and other occupations.
          </p>

          <p class="pb-24 text-amber-200 text-xl leading-normal sm:flex">
            <a
              v-smooth-scroll
              class="s-link flex mt-2"
              href="#sectionIkbenfrits"
            >
              Read on <span class="ml-1 text-3xl i-uil-arrow-right" />
            </a>
            <a
              v-smooth-scroll
              class="s-link flex sm:ml-8 mt-2"
              href="#sectionEducation"
            >
              Jump to education <span class="ml-1 text-3xl i-uil-arrow-down" />
            </a>
          </p>
        </div>
      </s-container>
    </div>

    <div class="bg-gradient-to-br from-green-200 via-teal-300 to-sky-400 pb-8">
      <s-container>
        <div class="max-w-xl">
          <div class="pt-8 mb-16">
            <h2
              id="sectionIkbenfrits"
              class="font-semibold text-4xl md:text-5xl leading-tight md:leading-tight mb-2 pt-8"
            >
              Ikbenfrits <span class="text-cyan-500">from 2016 to 2022</span>
            </h2>

            <p class="text-lg font-semibold leading-normal mb-6 max-w-lg">
              Online Mortgage Advice company
            </p>

            <p class="text-lg mb-4 text-gray-800">
              Started off as <strong>Growth Hacker</strong>: coming up with ways to engage with our customers, building it, testing it, measure performance, analysing and going back to the drawing board. As Ikbenfrits grew, I grew into <strong>Full Stack Development</strong>, building and maintaining the public facing, free to use tools and client's dashboard. The last years I fulfilled the role of <strong>Frontend Chapter Lead</strong>.
            </p>

            <p class="text-lg mb-4 text-gray-800">
              Over the years, we built 80+ Vue apps, ranging from public leadmagnets to automatically generated pages based on Funda listings, from client dashboards to document upload flows. Learned about everything related to effective frontend solutions.
            </p>

            <p class="text-lg mb-4 text-gray-800">
              My magnus opus was converting all <strong>Vue apps to Nuxt</strong>, a higher order framework for Vue. Over a period of a year me and my team refactored and replaced all Frits's frontend into a future proof, consistent and predictable form. The result is a clear distinction of a SSR frontend by Nuxt, while all content and other data was delivered by our Ruby and PHP backends over api's.
            </p>
          </div>
        </div>
      </s-container>

      <work-frits-carousel />
    </div>

    <div class="bg-gradient-to-br from-purple-400 via-pink-300 to-sky-200 pb-8">
      <s-container>
        <div class="max-w-xl">
          <div class="pt-16 mb-16">
            <h2 class="font-semibold text-4xl md:text-5xl leading-tight md:leading-tight mb-2">
              Shifter <span class="text-pink-500">from 2013 to 2016</span>
            </h2>

            <p class="text-lg leading-normal font-semibold mb-6 max-w-lg">
              Payroll and Personnel Planning company
            </p>

            <p class="text-lg mb-4 text-gray-800">
              Designed the interface of our personnel planning application. Features applying personal contract definitions and applicable labor laws. B2B solution, with interesting design challenges: on the one hand intensive use by power users and employees checking their schedule twice a week on the other. Also directly contributed to the application theme: templating and styling.
            </p>
          </div>
        </div>
      </s-container>

      <work-shifter-carousel />
    </div>

    <div class="py-12 bg-purple-100">
      <s-container class="grid sm:grid-cols-2 gap-8 lg:gap-12 pb-6">
        <div class="text-right mt-6">
          <h3 class="font-semibold text-2xl sm:text-3xl mb-6 sm:leading-snug">
            Wanna check my references?
          </h3>
          <p>
            <s-button to="/contact">Let me know!</s-button>
          </p>
        </div>

        <div class="flex flex-col justify-end mt-6">
          <h3 class="font-semibold text-2xl sm:text-3xl mb-6 sm:leading-snug">
            Here's my resume
          </h3>
          <p>
            <s-button to="@/static/resume-stijn-janmaat-2022-04.pdf">Download PDF 
            </s-button>
          </p>
        </div>
      </s-container>
    </div>

    <div class="pb-8">
      <s-container>
        <div class="pt-8 mb-16 max-w-2xl">
          <h2
            id="sectionEducation"
            class="font-semibold text-4xl md:text-5xl leading-snug md:leading-snug mb-2 pt-8"
          >
            Education
          </h2>

          <h3 class="text-2xl leading-normal mb-6 max-w-lg font-semibold text-teal-400">
            Industrial Design Engineering @ TU Delft
          </h3>

          <ul class="text-lg mb-8 text-gray-800">
            <li class="mb-3">
              <h4 class="flex mb-1">
                <span class="inline-block w-32 font-semibold flex-none">2010 - 2012</span>
                <span>Master Design for Interaction</span>
              </h4>
              <p class="flex">
                <span class="inline-block w-32 flex-none" />
                <span class="text-base">Graduated cum laude on redesign of media mobile app interface and interaction design</span>
              </p>
            </li>
            <li class="mb-3">
              <h4 class="flex">
                <span class="inline-block w-32 font-semibold flex-none">2010</span>
                <span>Participation in the YES!Delft course Writing a Business Plan</span>
              </h4>
            </li>
            <li class="mb-3">
              <h4 class="flex">
                <span class="inline-block w-32 font-semibold flex-none">2005 - 2010</span>Bachelor Industrial Design Engineering
              </h4>
            </li>
          </ul>

          <h3 class="text-2xl leading-normal mb-6 max-w-lg font-semibold text-emerald-400">
            Gymnasium @ Gymnasium Beekvliet, Sint-Michielsgestel
          </h3>

          <ul class="text-lg mb-8 text-gray-800">
            <li class="mb-3">
              <h4 class="flex mb-1">
                <span class="inline-block w-32 font-semibold flex-none">1999 - 2005</span>
                <span>Gymnasium</span>
              </h4>
              <p class="flex">
                <span class="inline-block w-32 flex-none" />
                <span class="text-base">Profile Natuur & Techniek</span>
              </p>
            </li>
          </ul>
        </div>
        
        <div class="mb-16 max-w-2xl">
          <h2
            class="font-semibold text-4xl md:text-5xl leading-snug md:leading-snug mb-2"
          >
            Other Occupations
          </h2>

          <h3 class="text-2xl leading-normal mb-6 max-w-lg font-semibold text-green-400">
            Volunteer work
          </h3>

          <ul class="text-lg mb-8 text-gray-800">
            <li class="mb-3">
              <h4 class="flex mb-1">
                <span class="inline-block w-32 font-semibold flex-none">2019 - 2021</span>
                <span>Tennis Association Tie-Breakers Amsterdam</span>
              </h4>
              <p class="flex">
                <span class="inline-block w-32 flex-none" />
                <span class="text-base">Participated in various committees, organized yearly open tournament.</span>
              </p>
            </li>

            <li class="mb-3">
              <h4 class="flex mb-1">
                <span class="inline-block w-32 font-semibold flex-none">2006 - 2012</span>
                <span>Student Tennis Association Tenniphil Delft</span>
              </h4>
              <p class="flex">
                <span class="inline-block w-32 flex-none" />
                <span class="text-base">Chairman in the board and participated in the advisory board and various committees.</span>
              </p>
            </li>

            <li class="mb-3">
              <h4 class="flex mb-1">
                <span class="inline-block w-32 font-semibold flex-none">2011 - 2012</span>
                <span>Website Committee @ Study Association i.d.</span>
              </h4>
            </li>
          </ul>
          
          <h3 class="text-2xl leading-normal mb-6 max-w-lg font-semibold text-lime-400">
            Private company
          </h3>

          <ul class="text-lg mb-4 text-gray-800">
            <li class="mb-3">
              <h4 class="flex mb-1">
                <span class="inline-block w-32 font-semibold flex-none">2010 - 2020</span>
                <span>Owner @ TOIT Design</span>
              </h4>
              <p class="flex">
                <span class="inline-block w-32 flex-none" />
                <span class="text-base">Personal design & development company. Did assignments for small clients, in graphic design, web design and web development, mostly with Wordpress.</span>
              </p>
            </li>
          </ul>
        </div>
      </s-container>
    </div>

    <div class="py-12 bg-slate-200">
      <s-container>
        <div class="max-w-2xl text-left mt-6">
          <h2 class="font-semibold text-4xl md:text-5xl leading-tight md:leading-tight mb-2">
            stijnjanmaat.nl <span class="text-gray-500">2022</span>
          </h2>
          
          <p class="text-lg font-semibold leading-normal mb-6 max-w-lg">
            This website
          </p>

          <p class="text-lg mb-4 text-gray-800">
            My goal was to tell about me, in a way that also tells about me. So form follows message so to say. That's why I created some playful interactions and experiment with new tech, while dicussing my experiences.
          </p>
          <p class="text-lg mb-4 text-gray-800">
            I used Nuxt 3 beta, Vue 3 and Typescript. I experimented with how to build with Nuxt 3 framework paradigm and leveraging Vue 3's composition API. CSS framework Tailwind 3 helped me a great deal of making it look fresh. 
          </p>
          
          <p class="text-lg mb-4 text-gray-800">
            Please note this project is not production ready, but merely a simple, rough show case.
          </p>

          <p class="flex text-lg mb-4 text-gray-800">
            <strong>stijnjanmaat.nl</strong>&nbsp;is open source. Check it out at&nbsp;<s-link
              to="https://github.com/stijnjanmaat/stijnjanmaat-nuxt"
              class="flex"
            ><span class="inline-block text-2xl i-uil-github mr-1" />GitHub</s-link>.
          </p>
        </div>
      </s-container>
    </div>

    <s-footer />
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
