<template>
  <div class="bg-white overflow-hidden py-24">
    <s-container class="bg-gradient-to-b to-rose-600 from-pink-600 rotate-1 px-24 pt-20 pb-36 md:pb-24 relative">
      <img
        class="absolute -bottom-4 right-6 md:right-16 w-32 sm:w-48 md:w-52"
        src="@/assets/img/work-tent.svg"
        alt="Tent"
      >
      <div class="-rotate-1">
        <h2 class="text-white text-4xl font-semibold text-center">
          Check out some of my work
        </h2>
        <p class="text-center mt-12">
          <s-button to="/work">
            Let's get to work
          </s-button>
        </p>
      </div>
      <img
        class="absolute -bottom-4 left-8 w-32 sm:w-48 md:w-52"
        src="@/assets/img/work-frame.svg"
        alt="Frame"
      >
    </s-container>
  </div>
</template>
