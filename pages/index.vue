<template>
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
        <h1 class="text-white text-4xl leading-snug pt-24 pb-12">
          Hi, I'm
          <strong>Stijn Janmaat</strong> and I create web things.
        </h1>

        <p
          class="text-cyan-200 text-xl pb-6"
        >
          Vue & Nuxt enthusiast, and overall modern Javascript fan-boy.
        </p>

        <p class="text-cyan-200 text-xl pb-12">
          Also,
          <s-link 
            class="disco-link" 
            @mouseover="discoHover" 
            @mouseleave="discoHoverOut"
          >disco</s-link>.
        </p>

        <p class="text-white">
          <s-button
            disabled
            to="/contact"
          >
            Hire me now
          </s-button>
          <span class="px-4">or</span>
          <s-button to="/me">
            Get to know me first
          </s-button>
        </p>

        <div class="relative">
          <img
            class="mr-16 pt-16"
            src="@/assets/img/chaos-of-creation-sloppy.svg"
          >
          <img
            class="absolute w-24 left-[1%] bottom-[17%] animate-wiggle"
            src="@/assets/img/wrong-question-mark.svg"
          >

          <div class="absolute w-8 top-[25%] left-[34%] animate-rotating">
            <img
              class="animate-hovering"
              src="@/assets/img/triangle.svg"
            >
          </div>

          <div class="absolute w-16 right-[28%] top-[28%] animate-hovering">
            <img
              class="animate-wiggle"
              src="@/assets/img/star.svg"
            >
          </div>
        </div>
      </s-container>
    </main>

    <home-experiment />
    
    <home-work />

    <s-footer />
  </div>
</template>

<script lang="ts" setup>
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
  title: 'Hi, i\'m Stijn Janmaat'
})
</script>

<style scoped lang="scss">

@keyframes hovering {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15%);
  }
}

@keyframes rotating {
  0% {
    transform: rotate(360deg)
  }
  100% {
    transform: rotate(0);
  }
}

@keyframes wiggle {
  0%, 100% { 
    transform: rotate(-3deg) }
  50% { transform: rotate(3deg) }
}

.animate-hovering {
  animation: hovering 5s ease-in-out infinite;
}
.animate-rotating {
  animation: rotating 20s linear infinite;
}
.animate-wiggle {
  animation: wiggle 3s 2s ease-in-out infinite;
}

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
  100% {
    @apply bg-red-600;
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