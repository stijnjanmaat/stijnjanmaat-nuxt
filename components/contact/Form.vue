<template>
  <div>
    <form-kit
      v-if="!submitted"
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
        class="mt-4"
        color="green"
        @click="clickSubmit"
      >
        <div class="flex items-center">
          Send it! <span class="inline-block text-xl ml-2 i-uil-rocket" />
        </div>
      </s-button>
    </form-kit>

    <div
      v-else
      class="mail-sent-message relative bg-green-800 font-semibold pl-20 pr-5 py-4 mt-8 text-white"
    >
      Thanks, mail sent!
      <span class="absolute bg-white -rotate-2 px-2 py-2 left-4 -top-2 font-black text-black text-4xl text-center leading-snug">
        <div class="i-uil-envelope-check" />
      </span>
    </div>

    <div
      v-if="errored"
      class="mail-sent-error relative bg-red-800 font-semibold pl-24 pr-5 py-4 mt-8 text-white"
    >
      Oops, something went bad... To be sure the mail gets to me, <a href="mailto:stijn@stijnjanmaat.nl">email me</a>.
      <span class="absolute bg-white -rotate-2 px-2 py-2 left-4 -top-2 font-black text-black text-4xl text-center leading-snug">
        <div class="i-uil-envelope-exclamation" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { submitForm, getNode } from '@formkit/core';

const formId = 'contact';

const submitted = ref(false);
const errored = ref(false);
const formData = ref({
  name: '',
  message: '',
  email: '',
});

const clickSubmit = () => submitForm(formId);
const submitHandler = async(formData) => {
  try {
    await $fetch('/api/mail', { method: 'POST', body: formData });
    submitted.value = true;
    getNode(formId).reset();
  } catch(err) {
    console.log(err);
    errored.value = true;
  }
};
</script>

<style scoped>
  :deep(.formkit-form-messages:before) {
    @apply absolute bg-white -rotate-2 w-10 left-4 -top-2 font-black text-black text-4xl text-center leading-snug;
    content: '!';
  }
</style>
