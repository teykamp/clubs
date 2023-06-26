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
      <slot></slot>

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
  "delete:title",
])
const title = computed({
  get: () => props.title,
  set: (value) => emits("update:title", value)
})
</script>
