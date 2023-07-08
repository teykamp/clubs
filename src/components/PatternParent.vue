<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field 
          v-model="title"
          prepend-icon="mdi-rename-box"
          class="mt-2"
        ></v-text-field>
      </v-card-title>
      <v-card-actions>
        <v-btn
          icon="mdi-delete"
          color="red"
          @click="$emit('update:delete')"
        ></v-btn>
      </v-card-actions>
        <slot name="patternInterface"></slot>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from'vue'

const props = defineProps<{
  title: string,
}>()

const emits = defineEmits([
  "update:title",
  "update:delete"
])
const title = computed({
  get: () => props.title,
  set: (value) => emits("update:title", value)
})
</script>
