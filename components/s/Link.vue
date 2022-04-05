<template>
  <nuxt-link
    :to="to"
    class="underline decoration-2 underline-offset-2"
  >
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

defineProps<{
  to?: RouteLocationRaw
}>()
</script>