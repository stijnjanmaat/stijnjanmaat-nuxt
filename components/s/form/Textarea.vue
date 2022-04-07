<template>
  <s-form-base-input
    type="textarea"
    rows="5"
    :name="name"
    inner-class="max-w-md"
  />
</template>

<script setup lang="ts">
defineProps<{
  name: string,
}>();
</script>