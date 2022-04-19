<template>
  <s-carousel
    :slides="slides"
    color="pink"
  />
</template>

<script setup lang="ts">
import ShifterListImg from '@/assets/img/work/shifter-list.png';
import ShifterGridImg from '@/assets/img/work/shifter-grid.png';

const slides = [
  {
    title: 'Shift List',
    description: 'We made many tools for customers to calculate their mortgage options, learn things about their mortgage, do the application and many, many more. I built the Vue backend, established many design patterns to consitently use Tools across Ikbenfrits\' applications. Also constributed to the PHP backend',
    img: ShifterListImg,
  },
  {
    title: 'Grid and Detail',
    description: 'thingies',
    img: ShifterGridImg,
  },
];


</script>

<style scoped>
  .img-shadow {
    box-shadow: 7px 9px 0 0 theme('colors.pink.500');
  }
  .description-shadow {
    box-shadow: 7px 9px 0 0 black;
  }
</style>
