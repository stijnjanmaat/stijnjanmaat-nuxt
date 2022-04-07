<template>
  <div>
    <form-kit
      :id="name"
      :name="name"
      v-bind="$attrs"
      :type="type"
      :outer-class="`s-form-field relative w-96 max-w-full mb-5 bg-white px-4 pt-3 pb-1 ${focusClass}`"
      label-class="font-semibold text-sm pb-1 block"
      inner-class="mb-1 overflow-hidden"
      :input-class="inputClass"
      help-class="text-xs text-gray-500"
      messages-class="text-sm text-orange-600 pb-2 font-semibold"
      @focus="handleFocus"
    />
  </div>
</template>

<script setup lang="ts">
type FormKitType = 'text' | 'email' | 'textarea';

const instance = getCurrentInstance();

const props = defineProps<{
  name: string,
  type: FormKitType
}>();

const inputClass = computed(() => {
  return `border-none outline-none text-black placeholder-gray-400 w-full ${instance.attrs['input-class'] ?? ''}`;
})

const {
  handleFocus,
  focusClass,
} = useFormKitFocus(props.name)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<style scoped>
  :deep(.s-form-field) {
    transition: box-shadow 300ms ease-in-out;
    box-shadow: 0 0 0 black;
  }
  :deep(.s-form-field-focus) {
    box-shadow: 3px 5px 0 black;
  }
</style>