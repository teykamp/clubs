<template>
  <div>
    <v-snackbar 
      v-model="showSnackbar"
      :color="color"
    >
      <slot name="content"></slot>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color: {
    type: string,
    default: "success",
  },
  showSnackbar: boolean,
}>()

const emits = defineEmits([
  "update:showSnackbar",
])

const showSnackbar = computed({
  get: () => props.showSnackbar,
  set: (value) => emits("update:showSnackbar", value)
})
</script>
