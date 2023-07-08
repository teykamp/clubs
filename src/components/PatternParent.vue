<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-actions>
        <v-btn icon="mdi-pencil" @click="titleDialog = !titleDialog"></v-btn>
        <slot name="orderButtons"></slot>
        <v-btn
          icon="mdi-delete"
          color="red"
          @click="$emit('update:delete')"
        ></v-btn>
      </v-card-actions>
      <slot name="patternInterface"></slot>
    </v-card>

    <v-dialog
      v-model="titleDialog"
      width="auto"
      >
      <v-card width="400" class="pa-6">
        <v-card-title>Enter In Pattern Name</v-card-title>
        <v-text-field 
          v-model="inputTitle"
          prepend-icon="mdi-rename-box"
          class="mt-2"
          ></v-text-field>
        <v-card-actions class="d-flex justify-center">
          <v-btn 
            color="primary" 
            @click="titleDialog = false, title = inputTitle"
          >OK</v-btn>
          <v-btn 
            color="red" 
            @click="titleDialog = false"
          >Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from'vue'

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

const titleDialog = ref(false)
const inputTitle = ref(title.value)
</script>
