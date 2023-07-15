<template>
  <div>
    <v-dialog
      v-model="showDialog"
      width="auto"
      >
      <v-card>
        <slot name="content"></slot>
        <v-card-actions class="d-flex justify-center">
         <slot name="actions"></slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  showDialog: boolean,
}>()

const emits = defineEmits([
  "update:showDialog",
])

const showDialog = computed({
  get: () => props.showDialog,
  set: (value) => emits("update:showDialog", value)
})
</script>
