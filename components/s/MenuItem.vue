<template>
  <li class="py-1">
    <nuxt-link
      :to="to"
      class="text-white text-sm opacity-75 hover:opacity-100 transition ease-in-out"
    >
      <slot />
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

defineProps<{
  to: RouteLocationRaw
}>()
</script>