<template>
  <div>
    <v-row class="d-flex align-start ml-3">
      <div 
        v-for="(chip, index) in getChipDisplay()"
        :key="chip"
      >
        <v-chip
          color="primary" 
          :prepend-icon="Object.values(summaryIconList)[index]"
          class="ml-1"
        >{{ chip }}</v-chip>
        <v-tooltip activator="parent" location="top">{{ Object.keys(summaryIconList)[index] }}</v-tooltip>
      </div>
      <v-divider
        v-if="typeof(data) === 'object' && 'color' in data"
        vertical 
        class="ml-2" 
        style="max-height: 30px;"
      ></v-divider>
      <div 
        v-if="'color' in data"
        class="ml-2"  
      >
        <div v-if="data.color.linkColors">
          <v-chip
            class="ml-1"
            :style="{'background': `hsl(
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
            :key="color.h"
            class="ml-1"
            :style="{'background': `hsl(
                    ${color.h} 
                    ${color.s*100}% 
                    ${color.l*100}%
                    )`,
                    'width': '30px'}"
          ></v-chip>
        </div>
        <v-tooltip activator="parent" location="top">Color</v-tooltip>
      </div>
      <v-spacer></v-spacer>
        <div class="mb-3">
          <v-btn
            class="mr-3"
            variant="plain"
            size="x-large"
            :icon="expand ? 'mdi-arrow-up-drop-circle-outline' : 'mdi-arrow-down-drop-circle-outline'"
            @click="expand = !expand"
            >
          </v-btn>
        </div>
    </v-row>
    <v-expand-transition>
      <v-card v-show="expand">
        <div 
          v-for="(_, key) in colorInterfaceColors"
          :key="key"
        >
          <ColorInterface 
            v-model:colors="colorInterfaceColors[key]"
            :patternType="String(key)"
          />
        </div>
                
        <v-row class="d-flex justify-center">
          <v-col cols="6">
            <v-slider 
              v-model="data.patternSpeed"
              inverse-label
              :prependIcon="Object.values(summaryIconList)[1]"
              class="mx-6" 
              min="0" 
              max="10"
              :label="`Speed: ${sliderDisplay(data.patternSpeed)}`"
            ></v-slider>
          </v-col>
          <v-col 
            v-if="typeof(data) === 'object' && 'colorCycleSpeed' in data"
          >
            <v-slider
              inverse-label
              v-model="data.colorCycleSpeed"
              :prependIcon="Object.values(summaryIconList)[2]"
              class="mx-6" 
              min="0" 
              max="10"
              :label="`Cycle Speed: ${sliderDisplay(data.colorCycleSpeed)}`"
            ></v-slider>
          </v-col>
        </v-row>
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
import { sliderDisplay } from '@/functions/sliderDisplay'

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
        Juggle|
        any // fixes type errors. Only use for npm build
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
  const colors: { [index: string] :any } = new Object
  for (let i = 0; i < colorKeys.length; i++) {
    if (colorKeys[i] in data.value) {
      colors[colorKeys[i]] = data.value[colorKeys[i]]
    }
  }
  return colors
}

function getChipDisplay() {
  let chips: string[] = []
  let onCount: number = 0
  let count: number = 0
  for (let key in props.data) {
    if (typeof(props.data[key]) === 'object' && 'on' in props.data[key]) {
      if (props.data[key].on) onCount++
      count++
    }
  }
  chips.push(`${onCount}/${count}`)

  chips.push(`${sliderDisplay(props.data.patternSpeed)}`)

  if ("colorCycleSpeed" in props.data) 
    chips.push(`${sliderDisplay(props.data.colorCycleSpeed)}`)

  return chips
}

const summaryIconList = {"Options": "mdi-puzzle", "Speed": 'mdi-speedometer', "Cycle Speed": "mdi-rotate-right"}
</script>