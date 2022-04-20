<template>
  <div>
    <picture>
      <img
        src="@/assets/img/disco-ball.svg"
        alt="Disco ball"
      >
    </picture>

    <s-footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useHead({
  title: 'Disco 🕺 - stijnjanmaat.nl',
});
</script>
