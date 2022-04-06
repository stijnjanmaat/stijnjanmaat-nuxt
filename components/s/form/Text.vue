<template>
  <form-kit
    :id="name"
    :name="name"
    type="text"
    :outer-class="`s-form-field relative w-72 inline-block mb-5 bg-white px-4 pt-3 ${focusClass}`"
    label-class="font-bold text-sm block"
    inner-class="max-w-md mb-1 overflow-hidden"
    input-class="h-10 border-none outline-none text-black placeholder-gray-400"
    help-class="text-xs text-gray-500"
    @focus="handleFocus"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>();

const {
  handleFocus,
  focusClass,
} = useFormKitFocus(props.name)

</script>

<style>
  .s-form-field {
    transition: box-shadow 300ms ease-in-out;
    box-shadow: 0 0 0 black;
  }
  .s-form-field-focus {
    box-shadow: 3px 5px 0 black;
  }
</style>