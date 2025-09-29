<template>
  <div class="image-gallery">
    <div v-for="image in images" :key="image.name" class="image-item">
      <img :src="image.src" :alt="image.name" />
      <p>{{ image.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  folder: {
    type: String,
    default: 'budovy'
  }
})

const images = ref([])

onMounted(() => {
  // Image mappings for different folders
  const imageMappings = {
    budovy: {
      'bytove_domy.webp': 'Bytové domy',
      'domecky.webp': 'Rodinné domečky',
      'farma.webp': 'Zemědělská farma',
      'letiste.webp': 'Letiště',
      'namesti.webp': 'Městské náměstí',
      'nemocnice.webp': 'Nemocnice',
      'obchodak.webp': 'Obchodní centrum',
      'skola.webp': 'Škola',
      'stadion.webp': 'Stadion',
      'tech_centrum.webp': 'Technologické centrum',
      'tovarna.webp': 'Továrna',
      'universita.webp': 'Univerzita'
    },
    elektrarny: {
      'baterie.webp': 'Bateriové úložiště',
      'jaderka.webp': 'Jaderná elektrárna',
      'plynova.webp': 'Plynová elektrárna',
      'precerpavacka.webp': 'Přečerpávací elektrárna',
      'rozvodna.webp': 'Rozvodna',
      'solary.webp': 'Solární elektrárna',
      'stozar.webp': 'Elektrický stožár',
      'uhelka.webp': 'Uhelná elektrárna',
      'vetrna.webp': 'Větrná elektrárna',
      'vodni.webp': 'Vodní elektrárna'
    }
  }
  
  const currentMapping = imageMappings[props.folder] || {}
  
  images.value = Object.entries(currentMapping).map(([filename, displayName]) => ({
    src: `/img/${props.folder}/${filename}`,
    name: displayName
  }))
})
</script>

<style scoped>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.image-item {
  text-align: center;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.image-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.image-item img {
  max-width: 100%;
  width: 100%;
  /*height: 200px;*/
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
}

.image-item p {
  margin-top: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}
</style>