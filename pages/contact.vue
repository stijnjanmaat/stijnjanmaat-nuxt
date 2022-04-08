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
        <h1 class="text-white text-4xl leading-snug pt-24 pb-12 font-semibold">
          Reach out
        </h1>

        <p class="text-xl leading-normal text-lime-200">
          Think you might have cool project for me? Or tripped up by something on here? Send me a message!
        </p>
      </s-container>

      <s-container class="pb-32">
        <contact-form />
      </s-container>

      <s-container class="pb-32">
        <p class="text-white text-lg">
          Or you just email me @ <a href="mailto:stijn@stijnjanmaat.nl">stijn@stijnjanmaat.nl</a>.
        </p>
      </s-container>
    </main>

    <s-footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Reach out - stijnjanmaat.nl',
});
</script>
