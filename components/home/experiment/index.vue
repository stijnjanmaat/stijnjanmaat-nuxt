<template>
  <div
    ref="experimentContainer"
    class="bg-white relative"
  >
    <!-- erlemeyer -->
    <div class="w-full sticky flex flex-col h-screen top-0 z-10">
      <div class="flex flex-col">
        <div class="h-16 md:h-24 bg-white" />
        <div class="flex">
          <div class="bg-white flex-grow" />
          <img
            class="max-w-[50%] sm:max-w-sm max-h-[50vh]"
            src="@/assets/img/erlenmeyer.svg"
            alt="Erlenmeyer"
          >
          <div class="bg-white flex-grow" />
        </div>
      </div>
      <div class="flex-grow bg-white" />

      <div class="absolute top-0 left-0 h-full w-full">
        <s-container>
          <home-experiment-label
            :style="{opacity: opacityCreative}"
            class="absolute left-4 sm:left-[calc(45%-260px)] top-[50%] -rotate-3 text-orange-600"
          >
            Creative
          </home-experiment-label>
          <home-experiment-label
            :style="{opacity: opacityInteraction}" 
            class="right-4 sm:right-[calc(42%-260px)] top-[40%] rotate-6 text-pink-600"
          >
            Joy in Interaction
          </home-experiment-label>
          <home-experiment-label
            :style="{opacity: opacityDesignDevelopment}"
            class="absolute left-4 sm:left-[calc(45%-260px)] top-[30%] -rotate-6 text-fuchsia-600"
          >
            Design & <br>
            Development
          </home-experiment-label>
          <home-experiment-label
            :style="{opacity: opacityIdealistic}"
            class="absolute right-4 sm:right-[calc(45%-200px)] top-[20%] rotate-3 text-purple-800"
          >
            Idealistic
          </home-experiment-label>

          <div class="absolute w-full bottom-12 left-0">
            <div class="relative mx-auto max-w-lg h-72 md:h-64 -mt-72 md:-mt-64 overflow-hidden">
              <home-experiment-explanation
                :style="{opacity: opacityCreative, zIndex: zIndexCreative}"
              >
                I like contributing to the creative process at the refinement of an idea. I strongly believe in co-creation, as the whole team is involved from the start. <s-link to="/work/#sectionDesign">More on Interaction</s-link>.
              </home-experiment-explanation>
              <home-experiment-explanation
                :style="{opacity: opacityInteraction, zIndex: zIndexInteraction}"
              >
                Human-product Interaction always intrigued me. There is always a fitting combination of brand/function/user/context out there: but often we accept a sub-optimal compromise. Going the extra mile to facilitate this unique combination is essential to making an engaging user experience.
              </home-experiment-explanation>
              <home-experiment-explanation
                :style="{opacity: opacityDesignDevelopment, zIndex: zIndexDesignDevelopment}"
              >
                Ideation and execution should go hand in hand. It is very powerful to have all skills needed present, working side by side. <s-link to="/work/#sectionTeamWork">More on Team Work</s-link>.
              </home-experiment-explanation>
              <home-experiment-explanation
                :style="{opacity: opacityIdealistic, zIndex: zIndexIdealistic}"
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
      <div class="bg-white h-64" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Offsets {
  [key: string]: number
}

const scrollingBg = ref<HTMLElement | null>(null);
const experimentContainer = ref<HTMLElement | null>(null);
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
};

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

const zIndexCreative = computed(() => {
  return opacityCreative.value > 0 ? 100 : 1;
});
const zIndexInteraction = computed(() => {
  return opacityInteraction.value > 0 ? 100 : 1;
});
const zIndexDesignDevelopment = computed(() => {
  return opacityDesignDevelopment.value > 0 ? 100 : 1;
});
const zIndexIdealistic = computed(() => {
  return opacityIdealistic.value > 0 ? 100 : 1;
});


const onScroll= () => {
  boundingClientRect.value = scrollingBg.value.getBoundingClientRect();
};
  
onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
