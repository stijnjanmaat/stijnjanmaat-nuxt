<template>
  <li class="py-1">
    <nuxt-link
      :to="to"
      class="text-white text-sm hover:opacity-100 transition ease-in-out no-underline"
      :class="current ? '' : 'opacity-60'"
    >
      <slot />
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to: RouteLocationRaw
}>();

const route = useRoute();

const current = computed(() => {
  return props.to === route.path;
});
</script>
