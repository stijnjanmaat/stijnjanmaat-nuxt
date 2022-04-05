<template>
  <div
    ref="experimentContainer"
    class="bg-white relative"
  >
    <!-- erlemeyer -->
    <div class="w-full sticky flex flex-col h-screen top-0 z-10">
      <div class="flex pt-24">
        <div class="bg-white flex-grow" />
        <img
          class="max-w-sm"
          src="assets/img/erlemeyer.svg"
        >
        <div class="bg-white flex-grow" />
      </div>
      <div class="flex-grow bg-white" />

      <div class="absolute top-0 left-0 h-full w-full">
        <s-container>
          <h3
            :style="{opacity: opacityCreative}"
            class="absolute left-[calc(45%-260px)] top-[50%] text-2xl lg:text-3xl font-semibold -rotate-3 text-orange-600"
          >
            Creative
          </h3>
          <h3
            :style="{opacity: opacityInteraction}" 
            class="absolute right-[calc(42%-260px)] top-[40%] text-2xl lg:text-3xl font-semibold rotate-6 text-pink-600"
          >
            Joy in Interaction
          </h3>
          <h3
            :style="{opacity: opacityDesignDevelopment}"
            class="absolute left-[calc(45%-260px)] top-[30%] text-2xl lg:text-3xl font-semibold -rotate-6 text-fuchsia-600 text-center"
          >
            Design & <br>
            Development
          </h3>
          <h3
            :style="{opacity: opacityIdealistic}"
            class="absolute right-[calc(45%-200px)] top-[20%] text-2xl lg:text-3xl font-semibold rotate-3 text-purple-800"
          >
            Idealistic
          </h3>

          <div class="absolute w-full bottom-12 left-0">
            <div class="relative mx-auto max-w-lg">
              <home-experiment-explanation
                :style="{opacity: opacityCreative}"
              >
                I like contributing to the creative process at the refinement of an idea. I strongly believe in cocreation from all team members from the start.
              </home-experiment-explanation>
              <home-experiment-explanation
                :style="{opacity: opacityInteraction}"
              >
                Human-product Interaction always intrigued me and am convinced it deserves more attention. There is a fitting combination of brand-function-user-context our there: but often times we resort to off the shelf a solution. Going the extra mile to facilitate this unique combination is essential to making an engaging user experience.
              </home-experiment-explanation>
              <home-experiment-explanation
                :style="{opacity: opacityDesignDevelopment}"
              >
                Ideation and execution should go hand in hand. It is very powerful to have all skills needed present, working side by side. 
              </home-experiment-explanation>
              <home-experiment-explanation
                :style="{opacity: opacityIdealistic}"
              >
                I only work for products and ideas I believe in. They serve a purpose I agree with. Then I really put my heart into it. Can be anything tho, from socially responsibility, sustainability or challenging rusty establishment.
              </home-experiment-explanation>
            </div>
          </div>
        </s-container>
      </div>
    </div>
      
    <div ref="scrollingBg">
      <div
        class="bg-gradient-to-t from-orange-500 via-pink-500 to-purple-800 h-[450px]"
      />
      <div class="bg-white h-64 text-purple-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
  // import { useScroll } from '@vueuse/core'

  interface Offsets {
    [key: string]: number
  }

  const scrollingBg = ref<HTMLElement | null>(null)
  const experimentContainer = ref<HTMLElement | null>(null)
  const boundingClientRect = ref(null);

  const opacityCommon = (offset: number): number => {
    if (!boundingClientRect.value)
      return 0;

    const correctedTopOffset = boundingClientRect.value.top - experimentContainer.value.offsetTop;

    if (correctedTopOffset + offset > 0) 
      return 0;

    return Math.min(Math.max(-(correctedTopOffset + offset) * 0.05, 0), 1);
  };

  const opacityOffsets: Offsets = {
    creative: 380,
    interaction: 460,
    designDevelopment: 550,
    idealistic: 620,
  }

  const opacityCreative = computed(() => {
    return opacityCommon(opacityOffsets.creative);
  });
  const opacityInteraction = computed(() => {
    return opacityCommon(opacityOffsets.interaction);
  });
  const opacityDesignDevelopment = computed(() => {
    return opacityCommon(opacityOffsets.designDevelopment);
  });
  const opacityIdealistic = computed(() => {
    return opacityCommon(opacityOffsets.idealistic);
  });

  const onScroll= () => {
    boundingClientRect.value = scrollingBg.value.getBoundingClientRect();
  }
  
  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
</script>
