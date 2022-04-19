<template>
  <div>
    <div
      class="bg-gradient-to-br via-purple-600 to-orange-400 from-cyan-500"
      :class="{ 'disco-bg': discoHovering }"
    >
      <header>
        <s-container class="pt-12 flex justify-between">
          <s-logo class="text-cyan-200" />
          <s-menu />
        </s-container>
      </header>

      <main>
        <s-container>
          <home-hero 
            @disco-link-mouse-over="discoHover" 
            @disco-link-mouse-leave="discoHoverOut"
          />
        </s-container>
      </main>
    </div>

    <home-experiment />
    
    <home-work />

    <s-footer />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
});

const discoHovering = ref(false);
const discoAnimationFinished = ref(false);
// const discoExcuseShown = ref(false);

let discoTimeout;

function discoHover() {
  discoTimeout = setTimeout(() => {
    discoAnimationFinished.value = true;
  }, 4000);

  discoHovering.value = true;
}

function discoHoverOut() {
  if (!discoAnimationFinished.value)
    console.log('hij is nog niet afgemaakt');

  clearTimeout(discoTimeout);

  discoHovering.value = false;
}

useHead({
  title: 'Hi, i\'m Stijn Janmaat - stijnjanmaat.nl',
});
</script>

<style scoped lang="scss">

@keyframes discoBg {
  0% {
    @apply bg-yellow-300;
  }
  10% {
    @apply bg-cyan-300;
  }
  20% {
    @apply bg-pink-400;
  }
  30% {
    @apply bg-green-500;
  }
  40% {
    @apply bg-purple-500;
  }
  50% {
    @apply bg-orange-500;
  }
  60% {
    @apply bg-gray-800;
  }
  70% {
    @apply bg-gray-800;
  }
  81%, 83%, 85% {
    @apply bg-black;
  }
  80%, 82%, 84%, 90% {
    @apply bg-white;
  }
  95% {
    @apply bg-red-600;
  }
  100% {
    @apply bg-yellow-300;
  }
}

.disco-bg {
  @apply bg-transparent bg-no-repeat;
  background-position: 80% 150px;
  background-image: url("@/assets/img/disco-ball.png");
  background-size: clamp(100px, 100%, 400px) auto;
  animation: discoBg 4s linear infinite;
  * {
    @apply opacity-0;
  }
  .disco-link {
    @apply opacity-100;
  }
}

</style>
