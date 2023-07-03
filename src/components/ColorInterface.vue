<template>
  <div>
    <v-container class="d-inline">


      <!-- <div v-if="colors.color">
        <v-col 
          v-for="(_, index) in Object.values(colors).pop()" 
          :key="index"
        >
          <v-color-picker 
            :modes="['hsl']"
            :show-swatches="true"
            :hide-inputs="true"
            :hide-sliders="true"
            :hide-canvas="true"
            v-model="Object.values(colors).pop()[index]"
          ></v-color-picker>
        </v-col>
      </div>
      <div v-else>
        <v-col 
          v-for="(_, index) in Object.values(colors).pop().color" 
          :key="index"
        >
          <v-color-picker 
            :modes="['hsl']"
            :show-swatches="true"
            :hide-inputs="true"
            :hide-sliders="true"
            :hide-canvas="true"
            v-model="Object.values(colors).pop().color[index]"
          ></v-color-picker>
        </v-col>
      </div>
      {{ colors }} -->

     

      <v-card elevation="0" class="mx-6">
        <v-card-title>{{ Object.keys(colors).pop() }}</v-card-title>
        <v-card-actions class="ml-6"> 
          <v-btn 
            :icon="linkColors ? 'mdi-link-off' : 'mdi-link'"
            variant="plain"
            density="compact"
            @click="handleLinkColors()"
          ></v-btn>
        </v-card-actions>
        <div v-if="colors.color" class="d-flex justify-space-around">
          <div 
            v-for="(_, index) in Object.values(colors).pop()" 
            :key="index"
          >
            <v-btn :style="{'background': `hsl(
              ${Object.values(colors).pop()[index].h} 
              ${Object.values(colors).pop()[index].s*100}% 
              ${Object.values(colors).pop()[index].l*100}%
              )`}"></v-btn>
          </div>
        </div>
        {{ displayColors }}


        

      </v-card>


    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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

const linkColors = ref(true)
const displayColors = ref([])
function handleLinkColors() {
  if (linkColors.value) {
    displayColors.value = Object.values(props.colors)[0].slice(2, -1)
  } else {
    displayColors.value = Object.values(props.colors)[0].slice(1)
  }

  linkColors.value = !linkColors.value
}
</script>