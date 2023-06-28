<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn
        variant="plain"
        :icon="expand ? 'mdi-arrow-up-drop-circle-outline' : 'mdi-arrow-down-drop-circle-outline'"
        @click="expand = !expand"
      >
      </v-btn>
    </div>
    <v-expand-transition>
      <v-card v-show="expand">
<!-- note saying progress will be lost on unique colors -->
        <v-switch
          v-model="linkColors"
          color="primary"
          label="Individually Assign Colors"
        ></v-switch>
        <v-color-picker 
          :modes="['hsl']" 
          v-model="masterColor"
        ></v-color-picker>
        <div v-show="linkColors">
          <v-color-picker 
            :modes="['hsl']" 
            v-model="data.sparkleColor.color[1]"
          ></v-color-picker>
          <v-color-picker 
            :modes="['hsl']" 
            v-model="data.sparkleColor.color[2]"
          ></v-color-picker>
        </div>
        {{ data.sparkleColor.color }}


      </v-card>
    </v-expand-transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
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

const linkColors = ref(true)
const masterColor = ref({
  'h': 0,
  's': 0,
  'l': 0
})

watch(masterColor, (newColor) => {
  if (linkColors.value) {
    props.data.sparkleColor.color[0] = newColor

  } else {
    props.data.sparkleColor.color = [newColor, newColor, newColor]
  }
})
</script>