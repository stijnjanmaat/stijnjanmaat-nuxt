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
          <h2 class="font-semibold leading-snug text-3xl">
            Hi, I'm Stijn Janmaat
          </h2>
          <p class="text-amber-300 mt-12 text-xl leading-normal">
            Interaction Designer turned Frontend Developer
          </p>
        </div>
        <me-photo class="w-1/3" />
      </div>
    </s-container>

    skills

    <s-footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'On me, Stijn Janmaat - stijnjanmaat.nl',
});
</script>
