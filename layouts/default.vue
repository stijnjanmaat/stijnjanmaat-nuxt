<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { pageview } from 'vue-gtag';

$fetch('/api/ping');

onMounted(() => {
  const route = useRoute();
  pageview(route);
});
</script>
