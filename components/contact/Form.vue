<template>
  <div>
    <form-kit
      :id="formId"
      v-model="formData"
      type="form"
      :actions="false"
      messages-class="formkit-form-messages relative bg-orange-500 font-semibold pl-20 pr-5 py-4 mt-8 text-white"
      @submit="submitHandler"
    >
      <s-form-text
        name="name"
        label="Your name"
        validation="required|length:2"
      />
      <s-form-email
        name="email"
        label="Your email"
        validation="required|email"
      />
      <s-form-textarea
        name="message"
        placeholder="Tell me!"
        validation="required|length:10"
      />

      <s-button
        to="#"
        @click="clickSubmit"
      >
        Send it! 🛸
      </s-button>
    </form-kit>
  </div>
</template>

<script setup lang="ts">
import { submitForm } from '@formkit/core';

const formId = 'contact';

const formData = ref({
  name: '',
  message: '',
  email: ''
})

const clickSubmit = () => submitForm(formId);
const submitHandler = async(formData) => {
  const response = await $fetch('/api/mail', { method: 'POST', body: formData });
  console.log(response);
}
</script>

<style scoped>
  :deep(.formkit-form-messages:before) {
    @apply absolute bg-white -rotate-2 w-10 left-4 -top-2 font-black text-black text-4xl text-center leading-snug;
    content: '!';
  } 
</style>