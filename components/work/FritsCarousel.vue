<template>
  <s-carousel
    :slides="slides"
    color="cyan"
  />
</template>

<script setup lang="ts">
import InterestCompareImg from '@/assets/img/work/interest-compare.png';
import AgendaImg from '@/assets/img/work/agenda.png';
import ConsumentenbondToolImg from '@/assets/img/work/consumentenbond-tool.png';
import AdminAgendaImg from '@/assets/img/work/admin-agenda.png';
import AdminAgendaModalImg from '@/assets/img/work/admin-agenda-modal.png';

const slides = [
  {
    id: 'tools',
    title: 'Tools, tools, tools',
    description: 'We made many tools for customers to calculate their mortgage options, learn things about their mortgage, do the application and many, many more. I built the Vue backend, established many design patterns to consitently use Tools across Ikbenfrits\' applications. Also constributed to the PHP backend',
    img: InterestCompareImg,
  },
  {
    id: 'calendar',
    title: 'Custom Calendar',
    description: 'We built our own calendar, generating the most appropriate appointment slots based on advisor expertise, availability and most efficient distribution. We created customer and admin interfaces. I built the Vue frontend and contributed to the Ruby on Rails backend',
    img: AgendaImg,
  },
  {
    id: 'affiliate',
    title: 'Affiliate Apps',
    description: 'We partnered up with Consumentenbond and created calculation tools to be integrated on their domains. We also white labeled our complete mortgage application apps and Vue tools leveraging our calculation services',
    img: ConsumentenbondToolImg,
  },
  {
    id: 'admin-agenda',
    title: 'Admin Agenda',
    description: 'Dit dus',
    img: AdminAgendaImg,
  },
  {
    id: 'admin-agenda-detail',
    title: 'Admin Agenda Detail',
    description: 'Dit dus ook',
    img: AdminAgendaModalImg,
  },
];

</script>
