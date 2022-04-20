<template>
  <div
    ref="target"
    class="overflow-hidden"
    :style="targetStyle"
  >
    <div :style="containerStyle">
      <s-container class="flex justify-between items-center flex-col-reverse sm:flex-row gap-16">
        <slot />
        <div class="flex-grow sm:w-1/3 min-h-[350px] relative">
          <div
            :style="cardStyle"
            class="card w-full absolute h-full bottom-0"
          >
            <div
              :style="cardWindowStyle"
              class="card-window"
            >
              <div
                :style="layerBg"
                class="bg-white"
              />
              <img
                :style="layerPhoto"
                src="@/assets/img/stijn.jpg"
                alt="Stijn's head"
              >
            </div>
          </div>
        </div>
      </s-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useParallax } from '@vueuse/core';

const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));

const targetStyle: CSSProperties = {
  transition: '.3s ease-out all',
};

const containerStyle: CSSProperties = {
  perspective: '200px',
};

const cardWindowStyle: CSSProperties = {
  fontSize: '8rem',
  position: 'absolute',
  top: 'calc(50% - 1em)',
  right: 'calc(50% - 1em)',
  height: '2em',
  width: '2em',
  margin: 'auto',
};

const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
};

const layerBg = computed(() => ({
  ...layerBase,
  transform: `
    translateX(${-(parallax.tilt || -0.5) * 5}px) 
    translateY(${(parallax.roll || 0.5) * 5}px)
    scale(1.13)`,
}));

const layerPhoto = computed(() => ({
  ...layerBase,
  transform: `
    translateX(${(parallax.tilt || -0.5) * 50}px)
    translateY(${-(parallax.roll || 0.5) * 50}px)
    scale(1.1)
    rotate(${((parallax.tilt || -0.5) + (parallax.roll || 0.5)) * 4}deg)`,
}));

const cardStyle = computed(() => ({
  bottom: 0,
  transform: `
    rotateX(${(parallax.roll || 0.5) * 20}deg)
    rotateY(${-(parallax.tilt || -0.5) * 20}deg)`,
}));
</script>
