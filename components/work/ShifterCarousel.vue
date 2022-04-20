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
    id: 'shift-list',
    title: 'Shift List',
    description: 'Shifter\'s planning application is designed to acommodate large organizations, with many locations, all fixed and flexible personnel. The goal is optimize the deployment of personnel and provide insight and maintain actionability when incidents occur. Among our clients were Amsterdam RAI and Roompot Vakantiehuizen. The Shift List is the main view power users use to make multi-shift changes and inspect details of shifts.',
    img: ShifterListImg,
  },
  {
    id: 'shift-grid',
    title: 'Shift Grid and Detail',
    description: 'The Shift Grid is designed to get an overview of the staffing per location. In the pop-up shown a shift details can be reviewed and edited.',
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
