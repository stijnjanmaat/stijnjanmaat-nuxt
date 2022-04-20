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
    title: 'Tools, tools, tools...',
    description: 'We made many tools for customers to calculate their mortgage options, learn things about their financial sitaution, do the actual mortgage application and many, many more. I contributed to all Vue apps and established many design patterns to consistently use Tools across Ikbenfrits\' applications. Also constributed heavily to the PHP backend.',
    img: InterestCompareImg,
  },
  {
    id: 'calendar',
    title: 'Custom Calendar',
    description: 'We built our own calendar, generating the most appropriate appointment slots based on advisor expertise, availability and most efficient distribution. I built the Vue frontend and contributed to the Ruby on Rails backend.',
    img: AgendaImg,
  },
  {
    id: 'affiliate',
    title: 'Affiliate Apps',
    description: 'We partnered up with Consumentenbond and created calculation tools to be integrated on their domains. We also white labeled our complete mortgage application apps and tools.',
    img: ConsumentenbondToolImg,
  },
  {
    id: 'admin-agenda',
    title: 'Admin Agenda',
    description: 'Next to the client\'s calendar app, we made an admin interface. Here the resources, availability and advisors\' skills can be managed. But mostly the admin agenda is central to the day to day workflow of the advisors. They can easily review their schedule, edit appointments and access the appropriate client data.',
    img: AdminAgendaImg,
  },
  {
    id: 'admin-agenda-detail',
    title: 'Admin Agenda Detail',
    description: 'Every appointment can be inspected, edited and taken action upon.',
    img: AdminAgendaModalImg,
  },
];

</script>
