<template>
  <div>
    <Dialog v-model:showDialog="colorDialog">
        <template #content>
          <v-color-picker
          :modes="['hsl']"
          :show-swatches="true"
          :hide-inputs="true"
          :hide-sliders="true"
          :hide-canvas="true"
          v-model="colors.color[colorIndex]"
          elevation="0"
          swatches-max-height="450"
          width="400"
          class="pa-5"
          ></v-color-picker>
        </template>
        <template #actions>
          <v-btn
            color="primary"
            @click="colorDialog = false"
          >OK</v-btn>
        </template>
    </Dialog>

    <v-card elevation="0" class="mx-6">
      <v-checkbox
        v-if="typeof(colors) === 'object' && 'on' in colors"
        v-model="colors.on"
        :label="colors.name"
      ></v-checkbox>
      <v-expand-transition v-show="colors.on === undefined || colors.on">
        <v-card>
          <v-card-actions class="ml-6">
            <div>
              <v-btn
                :icon="colors.linkColors ? 'mdi-link' : 'mdi-link-off'"
                variant="plain"
                density="compact"
                @click="colors.linkColors = !colors.linkColors"
              ></v-btn>
              <v-tooltip activator="parent" location="top">{{ colors.linkColors ? "Unlink Colors" : "Link Colors" }}</v-tooltip>
            </div>
          </v-card-actions>

          <!-- colors -->
          <div v-if="colors.linkColors" class="mb-4">
            <v-col
              v-for="(_, index) in colors.color.slice(2, -1)"
              :key="index"
              class="d-flex justify-center"
            >
              <v-btn :style="{'background': `hsl(
                ${colors.color[index].h}
                ${colors.color[index].s*100}%
                ${colors.color[index].l*100}%
                )`,
                'width': '45%'}"
                @click="colorDialog = true;
                        colorIndex = 0"
              ></v-btn>
            </v-col>
          </div>
          <div v-else class="d-flex justify-space-around mb-4">
            <v-col
              v-for="(_, index) in colors.color.slice(1)"
              :key="index"
            >
              <v-btn :style="{'background': `hsl(
                ${colors.color[index+1].h}
                ${colors.color[index+1].s*100}%
                ${colors.color[index+1].l*100}%
                )`,
                'width': '100%'}"
                @click="colorDialog = true;
                        colorIndex = index + 1"
              ></v-btn>
            </v-col>
          </div>

          <!-- sliders -->
          <v-row class="d-flex align-center">
              <v-col
                v-if="typeof(colors) === 'object' && 'speed' in colors"
                cols="6"
              >
                <v-slider
                  v-model="colors.speed"
                  inverse-label
                  :prependIcon="summaryIconList[0]"
                  class="mx-6" 
                  min="0" 
                  max="10"
                  :label="`Speed: ${sliderDisplay(colors.speed, 120)}`"
                ></v-slider>
              </v-col>
            <v-col
              v-if="'duration' in colors"
              cols="6"
            >
              <v-slider
                v-model="colors.duration"
                inverse-label
                :prependIcon="summaryIconList[1]"
                class="mx-6" 
                min="5" 
                max="120"
                :label="`Duration: ${sliderDisplay(colors.duration, 120)}`"
              ></v-slider>
            </v-col>
            <v-col 
              v-if="'intensity' in colors"
            >
              <v-slider
                inverse-label
                v-model="colors.intensity"
                :prependIcon="Object.values(summaryIconList)[2]"
                class="mx-6" 
                min="0" 
                max="10"
                :label="`Intensity: ${sliderDisplay(colors.intensity, -1)}`"
              ></v-slider>
            </v-col>
            <v-col 
              v-if="'dutyCycle' in colors"
            >
              <v-slider
                inverse-label
                v-model="colors.dutyCycle"
                :prependIcon="Object.values(summaryIconList)[3]"
                class="mx-6" 
                min="0" 
                max="10"
                :label="`Duty Cycle: ${sliderDisplay(colors.dutyCycle, -1)}`"
              ></v-slider>
            </v-col>
          </v-row>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { sliderDisplay } from '@/functions/sliderDisplay'
import Dialog from './Dialog.vue';

const props= defineProps<{
  colors: {
    name: string,
    on: boolean,
    linkColors: boolean,
    color: {
      'h': number,
      's': number,
      'l': number
    }[],
    speed: number,
    intensity: number,
    dutyCycle: number,
    duration: number,
  },
  patternType: string
}>()

const emits = defineEmits([
  "update:colors",
])

const colors = computed({
  get: () => props.colors,
  set: (value) => emits("update:colors", value)
})

const colorDialog = ref(false)
const colorIndex = ref(0)

const summaryIconList = ["mdi-speedometer", "mdi-timer-sand", "mdi-lightbulb-outline", "mdi-chip"]
</script>