<template>
  <nuxt-link
    :to="disabled ? '#' : to"
    class="relative s-button inline-block"
  >
    <span
      class="relative inline-block px-6 py-4 bg-white text-xl font-bold z-1"
      :class="textColor"
    >
      <slot />
    </span>
  </nuxt-link>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

type ButtonColor = 'purple' | 'red' | 'orange'; 

interface Props {
  to: RouteLocationRaw
  color?: ButtonColor
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  color: 'purple',
});

const textColor = computed(() => {
  switch (props.color) {
  case 'purple':
    return 'text-purple-900';
  case 'red':
    return 'text-red-800';
  case 'orange':
    return 'text-orange-800';
  }
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
