<!-- have color thing here for 
  each color option. that way can run v-for.
  make color list v-model 
  option to include speed/duration control
-->

<template>
  <div>
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