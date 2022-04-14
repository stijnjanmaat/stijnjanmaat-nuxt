<template>
  <div>
    <transition>
      <div
        v-if="show"
        class="fixed top-24 left-0 w-full"
      >
        <s-container>
          <div
            class="hire-me-now-disabled-msg text-white pl-16 pr-10 pt-8 pb-8 top-24 max-w-md"
            :class="bgClass"
          >
            <slot>
              <slot name="title">
                <h3
                  v-if="title"
                  class="text-2xl font-semibold mb-4"
                >
                  {{ title }}
                </h3>
              </slot>
              <slot name="body">
                {{ body }}
              </slot>
            </slot>

            <footer class="text-right mt-8">
              <s-button
                v-if="closable"
                to="#"
                color="orange"
                @click="emit('close')"
              >
                Close
              </s-button>
            </footer>
          </div>
        </s-container>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
type ModalType = 'success' | 'info' | 'warning' | 'error';

const props = withDefaults(defineProps<{
  title?: string,
  body?: string,
  show: boolean,
  closable?: boolean,
  type?: ModalType
}>(), {
  type: 'info',
  title: null,
  body: '',
  closable: true, 
});

const bgClass = computed(() => {
  switch (props.type) {
  case 'success':
    return 'bg-green-500';
  case 'info':
    return 'bg-cyan-700';
  case 'warning':
    return 'bg-amber-500';
  case 'error':
    return 'bg-red-500';
  }
});

const emit = defineEmits(['close']);
</script>

<style>
  .v-enter-active,
  .v-leave-active {
    transition: transform 0.5s ease-out;
  }

  .v-enter-from,
  .v-leave-to {
    transform: translateY(calc(-200%));
  }

  .hire-me-now-disabled-msg {
    box-shadow: 1px 3px 0 6px white;
  }
</style>
