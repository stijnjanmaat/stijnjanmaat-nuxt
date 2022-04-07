<template>
  <nuxt-link
    :to="to"
    :disabled="disabled"
    class="relative s-button inline-block"
  >
    <span class="relative inline-block px-6 py-4 bg-white text-xl font-bold text-purple-900 z-1">
      <slot />
    </span>
  </nuxt-link>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

interface Props {
  to: RouteLocationRaw,
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

<style>
.s-button:before {
  content: "";
  position: absolute;
  z-index: 0;
  top: 6px;
  right: -6px;
  left: 4px;
  bottom: -6px;
  background: black;
  transition: transform 150ms ease-in-out;
}
.s-button:hover:before {
  transform: rotate(1deg) translateY(2px);
}
</style>