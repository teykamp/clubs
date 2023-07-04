<template>
  <div>
    <v-dialog
      v-model="colorDialog"
      width="auto"
    >
      <v-color-picker 
        :modes="['hsl']"
        :show-swatches="true"
        :hide-inputs="true"
        :hide-sliders="true"
        :hide-canvas="true"
        v-model="colors.color[colorIndex]"
      ></v-color-picker>
      <v-card>
        
        <v-card-actions class="d-flex justify-center">
          <v-btn 
            color="primary" 
            @click="colorDialog = false"
          >OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card elevation="0" class="mx-6">
      <v-checkbox 
        v-if="colors.on !== undefined" 
        v-model="colors.on" 
        :label="colors.name"
      ></v-checkbox>
      <v-expand-transition v-show="colors.on || colors.on === undefined">
        <v-card>
          <v-card-actions class="ml-6"> 
            <v-btn 
              :icon="colors.linkColors ? 'mdi-link' : 'mdi-link-off'"
              variant="plain"
              density="compact"
              @click="colors.linkColors = !colors.linkColors"
            ></v-btn>
          </v-card-actions>
          
          <!-- colors -->
          <div v-if="colors.linkColors" class="d-flex justify-space-around mb-2">
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
          <div v-else class="mb-2">
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
                'width': '66%'}"
                @click="colorDialog = true;
                        colorIndex = 0"
              ></v-btn>
            </v-col>
          </div>
          
          <!-- sliders -->
          <div 
            v-if="colors.speed !== undefined"
            class="d-flex"
          >
            <v-slider 
              v-model="colors.speed" 
              class="mx-6" 
              min="0" 
              max="10"
            ></v-slider>
            <v-card-text>{{ sliderDisplay(colors.speed) }}</v-card-text>
          </div>
          <div 
            v-if="colors.duration !== undefined"
            class="d-flex"
          >
            <v-slider 
              v-model="colors.duration" 
              class="mx-6" 
              min="0" 
              max="10"
            ></v-slider>
            <v-card-text>{{ sliderDisplay(colors.duration) }}</v-card-text>
          
          
          </div>
        </v-card>
      </v-expand-transition>

    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props= defineProps<{
  colors: object,
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

function sliderDisplay(sliderValue: number) {
  return sliderValue === 0 ? 'Frozen' : sliderValue.toFixed(1)
}
</script>