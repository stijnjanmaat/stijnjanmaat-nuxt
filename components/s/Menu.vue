<template>
  <menu
    class="text-right -mt-1 space-x-4"
    :class="{flex: inline}"
  >
    <s-menu-item
      to="/me"
      :color="color"
    >
      Me
    </s-menu-item>
    <s-menu-item
      to="/work"
      :color="color"
    >
      Work
    </s-menu-item>
    <s-menu-item
      to="/contact"
      :color="color"
    >
      Contact
    </s-menu-item>
  </menu>
</template>

<script lang="ts" setup>
import type { MenuItemColor } from './MenuItem.vue';

withDefaults(defineProps<{
  inline?: boolean,
  color?: MenuItemColor,
}>(), {
  inline: false,
  color: 'white',
});
</script>
