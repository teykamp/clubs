<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field 
          v-model="a"
          prepend-icon="mdi-rename-box"
          class="mt-2"
        ></v-text-field>
      </v-card-title>
      <slot></slot>

    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from'vue'

const props = defineProps<{
  title: string,
}>()

const emits = defineEmits([
  "update:title",
  "delete:title",
])
const localTitle = ref(props.title)
const a = computed({
  get: () => props.title,
  set: (value) => emits("update:title", value)
})
</script>
