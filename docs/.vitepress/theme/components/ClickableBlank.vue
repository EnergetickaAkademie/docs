<template>
  <a v-if="imageSrc" :href="imageSrc" class="clickable-image" :aria-label="alt" target="_blank" rel="noopener noreferrer">
    <img :src="imageSrc" :alt="alt" />
  </a>
</template>

<script setup>
import { useSlots, computed } from 'vue';

defineProps({
  alt: {
    type: String,
    default: ''
  }
});

const slots = useSlots();

const imageSrc = computed(() => {
  const slotContent = slots.default?.()?.[0]?.children;
  return typeof slotContent === 'string' ? slotContent.trim() : '';
});
</script>

<style scoped>
.clickable-image,
.clickable-image img {
  display: block;
}
.clickable-image img {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  border: none;
  margin: 0 auto;
}
</style>
