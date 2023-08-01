<template>
  <v-container>
    <v-card>
      <v-container class="d-inline-flex">
        <!-- add breakpoint here -->
            <div style="max-width: 65%">
              <v-card-title class="text-truncate">
                {{ title }}
              </v-card-title>
              
              <v-card-subtitle style="margin-top: -10px">
                {{ subtitle }}
              </v-card-subtitle>
            </div>
            <v-col style="margin-top: -16px; margin-left: -10px; margin-right: -10px">
              <v-card-actions>
                <v-btn 
                  icon="mdi-pencil"
                  @click="titleDialog = !titleDialog"
                ></v-btn>
                <v-spacer></v-spacer>
                <slot name="orderButtons"></slot>
                <v-btn
                  icon="mdi-delete"
                  color="red"
                  @click="$emit('update:delete')"
                ></v-btn>
              </v-card-actions>
            </v-col>
      </v-container>
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
  subtitle: string,
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
