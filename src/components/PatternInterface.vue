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
        <v-color-picker :modes="['hsl']" v-model="colors"></v-color-picker>
        {{ colors }}
      </v-card>
    </v-expand-transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { hexToHSL } from '@/functions/hexToHSL'
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
const colors = ref({"h": 0, "s": 0, "l": 0})
</script>