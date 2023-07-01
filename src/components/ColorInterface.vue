<template>
  <div>
    <div v-if="colors.color">
      <div 
        v-for="(_, index) in Object.values(colors).pop()" 
        :key="index"
      >
        <v-color-picker 
          :modes="['hsl']" 
          v-model="Object.values(colors).pop()[index]"
        ></v-color-picker>
      </div>
    </div>
    <div v-else>
      <!-- maybe add a check here and an else for an error code? -->
      <div 
        v-for="(_, index) in Object.values(colors).pop().color" 
        :key="index"
      >
        <v-color-picker 
          :modes="['hsl']" 
          v-model="Object.values(colors).pop().color[index]"
        ></v-color-picker>
      </div>
    </div>
    {{ colors }}
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