<template>
  <div>
    <s-form-text
      v-model="name"
      name="name"
      label="Your name"
      validation="required|length:2"
    />
    <s-form-email
      v-model="email"
      name="email"
      label="Your email"
      validation="required|*email"
    />
    <s-form-textarea
      v-model="message"
      name="message"
      placeholder="Tell me!"
      validation="required|length:10"
    />

    <s-button to="#">
      Send it! 🛸
    </s-button>
  </div>
</template>

<script setup lang="ts">
const name = ref('');
const message = ref('');
const email = ref('');
</script>
