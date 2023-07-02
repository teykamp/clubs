<template>
  <div>
    <v-container class="d-inline">
      <div v-if="colors.color">
        <v-col 
          v-for="(_, index) in Object.values(colors).pop()" 
          :key="index"
        >
          <v-color-picker 
            :modes="['hsl']"
            :show-swatches="true"
            :hide-inputs="true"
            :hide-sliders="true"
            :hide-canvas="true"
            v-model="Object.values(colors).pop()[index]"
          ></v-color-picker>
        </v-col>
      </div>
      <div v-else>
        <!-- maybe add a check here and an else for an error code? -->
        <v-col 
          v-for="(_, index) in Object.values(colors).pop().color" 
          :key="index"
        >
          <v-color-picker 
            :modes="['hsl']"
            :show-swatches="true"
            :hide-inputs="true"
            :hide-sliders="true"
            :hide-canvas="true"
            v-model="Object.values(colors).pop().color[index]"
          ></v-color-picker>
        </v-col>
      </div>
      {{ colors }}
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props= defineProps<{
  colors: object
}>()

const emits = defineEmits([
  "update:colors",
])

const colors = computed({
  get: () => props.colors,
  set: (value) => emits("update:colors", value)
})

</script>