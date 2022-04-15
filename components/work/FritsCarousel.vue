<template>
  <div>
    <carousel
      :items-to-show="2.4"
      @update:model-value="herro"
    >
      <template #slides="{ currentSlide }">
        <slide
          v-for="(slide, i) in slides"
          :key="i"
        >
          <div class="p-6">
            <div class="absolute max-w-sm bg-white text-left px-8 pt-10 pb-8 left-12 -top-4 description-shadow">
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
              class="img-shadow"
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

import InterestCompareImg from '@/assets/img/work/interest-compare.png';
import AgendaImg from '@/assets/img/work/agenda.png';
import ConsumentenbondToolImg from '@/assets/img/work/consumentenbond-tool.png';

const slides = [
  {
    title: 'Tools, tools, tools',
    description: 'We made many tools for customers to calculate their mortgage options, learn things about their mortgage, do the application and many, many more. I built the Vue backend, established many design patterns to consitently use Tools across Ikbenfrits\' applications. Also constributed to the PHP backend',
    img: InterestCompareImg,
  },
  {
    title: 'Custom Calendar',
    description: 'We built our own calendar, generating the most appropriate appointment slots based on advisor expertise, availability and most efficient distribution. We created customer and admin interfaces. I built the Vue frontend and contributed to the Ruby on Rails backend',
    img: AgendaImg,
  },
  {
    title: 'Affiliate Apps',
    description: 'We partnered up with Consumentenbond and created calculation tools to be integrated on their domains. We also white labeled our complete mortgage application apps and Vue tools leveraging our calculation services',
    img: ConsumentenbondToolImg,
  },
];

const herro = (val) => {
  console.log(val);
};

</script>

<style scoped>
  .img-shadow {
    box-shadow: 7px 9px 0 0 theme('colors.cyan.200');
  }
  .description-shadow {
    box-shadow: 7px 9px 0 0 black;
  }
</style>
