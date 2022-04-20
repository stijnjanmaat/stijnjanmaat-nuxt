<template>
  <div>
    <h1 class="text-white text-4xl md:text-5xl leading-snug md:leading-snug pt-16 md:pt-24 pb-12">
      Hi, I'm
      <strong>Stijn Janmaat</strong> and I create web things.
    </h1>

    <p
      class="text-amber-200 text-xl pb-6"
    >
      Vue & Nuxt enthusiast, and overall modern Javascript fan-boy.
    </p>

    <p class="text-amber-200 text-xl pb-8 disco-link-p">
      <span>Also, </span>
      <span 
        class="s-link disco-link"
        @mouseover="emit('disco-link-mouse-over')" 
        @mouseleave="emit('disco-link-mouse-leave')"
      >disco</span><span>.</span>
    </p>

    <p class="text-white">
      <s-button
        :disabled="hireMeNowDisabled"
        to="/contact"
        @click="hireMeNowClicked = true"
      >
        Hire me now
      </s-button>

      <span class="px-4">or</span>
      <s-button
        to="/me"
        class="mt-4"
      >
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
  </div>

  <s-modal
    :show="meNotVisited"
    type="warning"
    title="Can't do that, yet!"
    @close="hireMeNowClicked = false"
  >
    <template #body>
      Can't do that, you don't know me yet! <s-link to="/me">Get to know me first</s-link>.
    </template>
  </s-modal>
      
  <s-modal
    :show="!meNotVisited && workNotVisited"
    type="warning"
    title="Can't do that, yet!"
    @close="hireMeNowClicked = false"
  >
    <template #body>
      You don't know what I can do! <s-link to="/work">Check out my work first</s-link>.
    </template>
  </s-modal>
</template>

<script setup lang="ts">
const emit = defineEmits([
  'disco-link-mouse-over',
  'disco-link-mouse-leave',
]);

const visited = ref<{ me: boolean, work: boolean }>();
const hireMeNowClicked = ref(false);

const hireMeNowDisabled = computed(() => {
  return !visited.value || !visited.value.me || !visited.value.work;
});

const meNotVisited = computed(() => {
  return hireMeNowClicked.value && !visited.value.me;
});

const workNotVisited = computed(() => {
  return hireMeNowClicked.value && !visited.value.work;
});

// disabled hire me now
onMounted(() => {
  const visitedCookie = useVisitedCookie();
  
  visited.value = {
    me: visitedCookie.meVisited,
    work: visitedCookie.workVisited,
  };
});
</script>

<style scoped>
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

</style>
