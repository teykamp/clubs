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
      
    </v-expand-transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props= defineProps<{
  data: number
}>()

const expand = ref(false)
</script>