<template>
  <div>
    <client-only>
      <carousel
        :items-to-show="itemsToShow"
        wrap-around
        :class="color"
        @update:model-value="updateActiveSlide"
      >
        <template #slides>
          <slide
            v-for="slide in slides"
            :key="slide.id"
          >
            <div class="px-12 pb-12">
              <div
                class="absolute max-w-sm bg-white text-left px-4 py-4 left-6 bottom-6 description-shadow"
                :class="color"
              >
                <h4 class="font-semibold md:text-lg">
                  {{ slide.title }}
                </h4>
              </div>
        
              <img
                class="cursor-pointer"
                :src="slide.img"
                :alt="slide.title"
                @mousedown="mouseDownImg"
                @mouseup="(e) => mouseUpImg(e, slide)"
              >
            </div>
          </slide>
        </template>

        <template #addons>
          <pagination />
        </template>
      </carousel>

      <template #placeholder>
        <div class="text-center py-24">
          <span class="inline-block i-uil-spinner text-6xl opacity-25" />
        </div>
      </template>
    </client-only>

    <div
      v-if="focusedSlide"
      class="focused-slide fixed top-0 left-0 bottom-0 right-0 w-full p-4 z-10"
      :class="color"
      @click.self="clickBg"
    >
      <div class="bg-white max-w-5xl mx-auto">
        <div class="overflow-auto max-h-[calc(100vh-8em)] scroll-smooth">
          <img
            :src="focusedSlide.img"
            :alt="focusedSlide.title"
          >

          <h4 class="font-semibold text-2xl sticky bottom-0 bg-white pt-6 px-6 pb-6 inline-block left-4">
            <a href="#description">{{ focusedSlide.title }}</a>
          </h4>

          <div
            id="description"
            class="mt-2 text-lg pl-10 max-w-xl pb-12 leading-normal"
          >
            {{ focusedSlide.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize, onKeyStroke } from '@vueuse/core';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

type Color = 'cyan' | 'pink'
type Slide = {
  id: string,
  title: string,
  description: string,
  img: Object
}

interface Props {
  slides: Slide[]
  color?: Color
}

withDefaults(defineProps<Props>(), {
  color: 'cyan',
});

const focusedSlide = ref<Slide | null>(null);
const mouseDownEvent = ref<MouseEvent | null>(null);
const itemsToShow = ref(2.5);
const size = useWindowSize();

watch(size.width, (size) => {
  itemsToShow.value = size > 1024 ? 2.5 : 1.2;
}, { immediate:true });

const updateActiveSlide = (val) => {
  console.log(val);
};

const mouseDownImg = (event: MouseEvent) => {
  mouseDownEvent.value = event;
};

const mouseUpImg = (event: MouseEvent, slide: Slide) => {
  if (mouseDownEvent.value.clientX !== event.clientX ||
    mouseDownEvent.value.clientY !== event.clientY)
    return;

  focusedSlide.value = slide;
};

const unsetFocusedSlide = () => focusedSlide.value = null;

const clickBg = unsetFocusedSlide;
onKeyStroke('Escape', unsetFocusedSlide);

</script>

<style scoped lang="scss">
  .description-shadow {
    &.cyan {
      box-shadow: 7px 9px 0 0 theme('colors.cyan.200');
    }
    &.pink {
      box-shadow: 7px 9px 0 0 theme('colors.pink.400');
    }
  }

  .focused-slide {
    &.cyan {
      @apply bg-cyan-600/80;
    }
    &.pink {
      @apply bg-pink-800/60;
    }
  }

  .description-shadow {
    // box-shadow: 7px 9px 0 0 black;
  }

  .carousel {
    &.cyan {
      :deep(.carousel__icon) {
        fill: theme('colors.cyan.400');
      }
      :deep(.carousel__pagination-button) {
        @apply bg-cyan-200;
      }
    }
    &.pink {
      :deep(.carousel__icon) {
        fill: theme('colors.pink.500')
      }
      :deep(.carousel__pagination-button) {
        @apply bg-pink-100;
      }
    }
  }

  :deep(.carousel__slide) {
    @apply items-end;
  }

  :deep(.carousel__prev), :deep(.carousel__next) {
    @apply bg-white rounded-none p-2;
    top: auto;
    bottom: 50px;
    transform: none;
  }

  :deep(.carousel__prev) {
    @apply left-12;
    
  }
  :deep(.carousel__next) {
    @apply right-12;
  }

  :deep(.carousel__pagination) {
    @apply pt-6;
    .carousel__pagination-item {
      @apply p-2;
      .carousel__pagination-button {
        @apply w-10 md:w-16 h-4 rounded-none;
        &.carousel__pagination-button--active {
          @apply bg-white;
        }
      }
    }
  }
</style>
