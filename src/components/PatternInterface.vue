<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn
        variant="plain"
        size="x-large"
        :icon="expand ? 'mdi-arrow-up-drop-circle-outline' : 'mdi-arrow-down-drop-circle-outline'"
        @click="expand = !expand"
      >
      </v-btn>
    </div>
    <v-expand-transition>
      <v-card v-show="expand">
        <div 
          v-for="(_, key) in colorInterfaceColors"
          :key="key"
        >
          <ColorInterface 
            v-model:colors="colorInterfaceColors[key]"
            :patternType="key"
          />

        </div>
      </v-card>
    </v-expand-transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ColorInterface from './ColorInterface.vue';
import type { SolidColor,
              PulsingColor,
              Confetti,
              MultiPole,
              VerticalWave,
              Torch,
              LinearRainbow,
              VerticalRainbow,
              BPM,
              Juggle
            } from '@/data/types' 
import { colorKeys } from '@/data/types'

const props= defineProps<{
  data: SolidColor|
        PulsingColor|
        Confetti|
        MultiPole|
        VerticalWave|
        Torch|
        LinearRainbow|
        VerticalRainbow|
        BPM|
        Juggle
}>()

const expand = ref(false)

const emits = defineEmits([
  "update:data",
])

const data = computed({
  get: () => props.data,
  set: (value) => emits("update:data", value)
})
const colorInterfaceColors = ref(getColorInterfaceColors())
function getColorInterfaceColors() {
  let colors: object = new Object
  for (let i = 0; i < colorKeys.length; i++) {
    if (colorKeys[i] in data.value) {
      colors[colorKeys[i]] = data.value[colorKeys[i]]
    }
  }
  return colors
}
</script>