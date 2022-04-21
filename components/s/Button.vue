<template>
  <span class="contents">
    <a
      v-if="isA"
      v-bind="$attrs"
      :href="to"
      class="relative s-button inline-block"
    >
      <span
        class="relative inline-block px-6 py-4 bg-white text-xl font-bold z-1"
        :class="textColor"
      >
        <slot />
      </span>
    </a>
    
    <nuxt-link
      v-else
      v-bind="$attrs"
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
  </span>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

type Tag = 'a' | 'nuxt-link'; 
type ButtonColor = 'purple' | 'red' | 'orange' | 'green'; 

interface Props {
  tag?: Tag
  to: RouteLocationRaw
  color?: ButtonColor
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'nuxt-link',
  disabled: false,
  color: 'purple',
});

const isA = computed(() => {
  return props.tag === 'a';
});

const textColor = computed(() => {
  switch (props.color) {
  case 'purple':
    return 'text-purple-900';
  case 'red':
    return 'text-red-800';
  case 'orange':
    return 'text-orange-800';
  case 'green':
    return 'text-emerald-800';
  }
});

</script>

<style scoped>
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
