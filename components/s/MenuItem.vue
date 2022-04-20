<template>
  <li class="py-1">
    <nuxt-link
      :to="to"
      class="hover:opacity-100 transition ease-in-out no-underline"
      :class="{
        'opacity-60': !current,
        [colorClass]: true
      }"
    >
      <slot />
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

export type MenuItemColor = 'white' | 'gray';

const props = defineProps<{
  color: MenuItemColor,
  to: RouteLocationRaw
}>();

const route = useRoute();

const current = computed(() => {
  return props.to === route.path;
});

const colorClass = computed(() => {
  switch (props.color) {
  case 'white':
    return 'text-white';
  case 'gray':
    return 'text-gray-900';
  }
});
</script>
