<template>
  <s-form-base-input
    type="text"
    :name="name"
    input-class="h-10"
  />
</template>

<script setup lang="ts">
defineProps<{
  name: string,
}>();
</script>