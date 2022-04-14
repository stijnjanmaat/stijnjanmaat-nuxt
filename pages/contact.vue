<template>
  <div class="bg-gradient-to-br via-emerald-600 to-lime-400 from-green-700">
    <main>
      <header>
        <s-container class="pt-12 flex justify-between">
          <s-logo class="text-lime-200" />
          <s-menu />
        </s-container>
      </header>

      <s-container class="pb-32">
        <h1 class="text-white text-4xl md:text-5xl leading-snug md:leading-snug pt-24 mb-6 font-semibold">
          Reach out
        </h1>

        <p class="text-xl leading-normal text-amber-200">
          Think you might have cool project for me? Or is it something I said? Send me a message!
        </p>
      </s-container>

      <s-container class="pb-32">
        <contact-form />
      </s-container>

      <s-container class="pb-32">
        <p class="text-white text-lg flex items-center">
          Or just&nbsp;<span class="inline-block text-xl i-uil-envelope" />&nbsp;me&nbsp;<a href="mailto:stijn@stijnjanmaat.nl">stijn@stijnjanmaat.nl</a>.
        </p>
        <p class="text-white text-lg flex">
          Find me on&nbsp;<s-link
            to="https://www.linkedin.com/in/stijn-janmaat"
            class="flex items-center"
          ><span class="inline-block text-xl i-uil-linkedin mr-1" />LinkedIn</s-link>.
        </p>
      </s-container>
    </main>

    <s-footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useHead({
  title: 'Reach out - stijnjanmaat.nl',
});
</script>
