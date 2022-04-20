<template>
  <h3
    class="absolute text-2xl lg:text-3xl font-semibold text-center text-shadow"
  >
    <slot />
  </h3>
</template>

<style scoped>
.text-shadow {
  text-shadow:
    1px 1px white,
    1px 2px white,
    2px 1px white,
    2px 2px white;
}
</style>
