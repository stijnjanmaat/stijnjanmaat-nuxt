<template>
  <nuxt-link
    :to="to"
    class="s-link"
  >
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

defineProps<{
  to?: RouteLocationRaw
}>();
</script>
