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
        <v-dialog
          v-model="dialog"
          width="auto"
          persistent
        >
          <v-card>
            <v-card-text>
              Linking colors removes any individually assigned colors. Continue?
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn 
                color="primary" 
                @click="dialog = false"
              >OK</v-btn>
              <v-btn 
                color="red" 
                @click="handleDialogCancel()"
              >Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-switch
          v-model="linkColors"
          color="primary"
          label="Link Colors"
          @click="handleDialogOpen()"
        >
        </v-switch>
        <v-color-picker 
          :modes="['hsl']" 
          v-model="masterColor"
        ></v-color-picker>
        <div v-show="!linkColors">
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
  if (!linkColors.value) {
    props.data.sparkleColor.color[0] = newColor

  } else {
    props.data.sparkleColor.color = [newColor, newColor, newColor]
  }
})

const dialog = ref(false)
function handleDialogOpen() {
  if (!linkColors.value) {
    dialog.value = true
  }
}
function handleDialogCancel() {
  dialog.value = false
  linkColors.value = false
}
</script>