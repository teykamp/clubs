<template>
  <div>
    <div 
      v-for="(chip, index) in getChipDisplay()"
      :key="chip"
    >
      <v-chip color="primary" :prepend-icon="summaryIconList[index]">{{ chip }}</v-chip>
    </div>

    <v-icon>mdi-palette</v-icon>
    <div v-if="'color' in data">
      <div v-if="data.color.linkColors">
        <v-chip :style="{'background': `hsl(
                  ${data.color.color[0].h} 
                  ${data.color.color[0].s*100}% 
                  ${data.color.color[0].l*100}%
                  )`,
                  'width': '30px'}"
        ></v-chip>
      </div>
      <div v-else>
        <v-chip
          v-for="color in data.color.color.slice(1)"
          :key="color"
          :style="{'background': `hsl(
                  ${color.h} 
                  ${color.s*100}% 
                  ${color.l*100}%
                  )`,
                  'width': '30px'}"
        ></v-chip>
      </div>
    </div>
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
                
        <v-slider 
          v-model="data.patternSpeed" 
          class="mx-6" 
          min="0" 
          max="10"
        ></v-slider>
        <v-card-text>{{ sliderDisplay(data.patternSpeed) }}</v-card-text>

            
        <div v-if="data.colorCycleSpeed !== undefined">
          <v-slider
            v-model="data.colorCycleSpeed" 
            class="mx-6" 
            min="0" 
            max="10"
          ></v-slider>
          <v-card-text>{{ sliderDisplay(data.colorCycleSpeed) }}</v-card-text>
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

function sliderDisplay(sliderValue: number) {
  return sliderValue === 0 ? 'Frozen' : sliderValue.toFixed(1)
}

function getChipDisplay() {
  let chips: string[] = []
  // added patterns (puzzle icon)
  let onCount: number = 0
  let count: number = 0
  for (let key in props.data) {
    if (typeof(props.data[key]) === 'object' && 'on' in props.data[key]) {
      if (props.data[key].on) onCount++
      count++
    }
  }
  chips.push(`${onCount}/${count}`)

  // speed (speedometer icon)
  chips.push(`${sliderDisplay(props.data.patternSpeed)}`)

  // cycleSpeed if exists (idk icon)
  if ("colorCycleSpeed" in props.data) 
    chips.push(`${sliderDisplay(props.data.colorCycleSpeed)}`)

  return chips
}

const summaryIconList = ref(["mdi-puzzle", "mdi-animation", 'mdi-speedometer'])
</script>