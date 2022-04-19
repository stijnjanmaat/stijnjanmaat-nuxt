<template>
  <div>
    <carousel
      :items-to-show="2.4"
      wrap-around
      :class="color"
      @update:model-value="herro"
    >
      <template #slides="{ currentSlide }">
        <slide
          v-for="(slide, i) in slides"
          :key="i"
        >
          <div class="p-6">
            <div class="absolute max-w-sm bg-white text-left px-8 pt-10 pb-8 left-12 top-0 description-shadow">
              <h4 class="font-semibold text-xl">
                {{ slide.title }}
              </h4>
              <div
                v-if="i === currentSlide"
                class="mt-2"
              >
                {{ slide.description }}
              </div>
            </div>
        
            <img
              :src="slide.img"
              class="img-shadow mt-4"
              :class="color"
              :alt="slide.title"
            >
          </div>
        </slide>
      </template>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

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

const props = withDefaults(defineProps<Props>(), {
  color: 'cyan',
});

const herro = (val) => {
  console.log(val);
};
</script>

<style>
/* Overwrites */
:root {
  --vc-nav-width: 2em;
}
</style>

<style scoped lang="scss">
  .img-shadow {
    &.cyan {
      box-shadow: 7px 9px 0 0 theme('colors.cyan.200');
    }
    &.pink {
      box-shadow: 7px 9px 0 0 theme('colors.pink.400');
    }
  }

  .description-shadow {
    box-shadow: 7px 9px 0 0 black;
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
    @apply pt-4;
    .carousel__pagination-item {
      @apply p-2;
      .carousel__pagination-button {
        @apply w-12 h-4 rounded-none;
        &.carousel__pagination-button--active {
          @apply bg-white;
        }
      }
    }
  }
</style>
