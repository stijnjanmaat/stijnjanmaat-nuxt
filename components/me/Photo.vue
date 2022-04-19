<template>
  <div>
    <div
      ref="target"
      class="flex flex-col justify-center min-h-[500px]"
      :style="targetStyle"
    >
      <div
        class="mx-auto"
        :style="containerStyle"
      >
        <div :style="cardStyle">
          <div :style="cardWindowStyle">
            <div
              :style="layerBg"
              class="bg-white"
            />
            <img
              :style="layerStijn"
              src="@/assets/img/stijn.jpg"
              alt="Stijn's hoofd"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useParallax } from '@vueuse/core';

const target = ref(null);
const parallax = reactive(useParallax(target));
const targetStyle: CSSProperties = {
  transition: '.3s ease-out all',
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
const containerStyle: CSSProperties = {
  perspective: '300px',
};
const layerBg = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(1.13)`,
}));

const layerStijn = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 50}px) translateY(${
    parallax.roll * 50
  }px) scale(1.1) rotate(${(parallax.tilt + parallax.roll) * 5}deg)`,
}));

const cardStyle = computed(() => ({
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,
}));
</script>
