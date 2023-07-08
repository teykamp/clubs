<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center">
        <v-col xs="10" sm="10" md="11" lg="8" xl="7">
          <v-sheet class="overflow-auto scrollbar" style="height: 94vh;">
            <div 
              v-for="(pattern, index) in addedPatterns"
              :key="pattern.id"
            >
              <PatternParent 
                v-model:title="addedPatterns[index].displayName"
                @update:delete="deletePattern(index)"
              >
              <template #orderButtons>
                <v-btn-group variant="outlined">
                  <v-btn
                    :disabled="index === 0 ? true: false"
                    icon="mdi-arrow-up" 
                    class="mr-0"
                    @click="handleOrderButtons(-1, index)"
                  ></v-btn>
                  <v-btn
                    :disabled="index === addedPatterns.length -1 ? true: false"
                    icon="mdi-arrow-down" 
                    class="ml-0"
                    @click="handleOrderButtons(1, index)"
                  ></v-btn>
                </v-btn-group>

              </template>
              <template #patternInterface>
                <PatternInterface
                    v-model:data="addedPatterns[index]"
                  />
              </template>
              </PatternParent> 
            </div>
            <div ref="bottomElement" style="margin-top: 370px;"></div>
          </v-sheet>
        </v-col>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                icon="mdi-plus"
                color="primary"
                v-bind="props"
              >
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="value, pattern in patterns"
                :key="pattern"
                :value="pattern"
                @click="handleAddNewPattern(value)"
              >
                <v-list-item-title>{{ pattern }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PatternParent from '@/components/PatternParent.vue'
import PatternInterface from '@/components/PatternInterface.vue'
import { patterns } from '@/data/patterns'
import type { SolidColor,
              PulsingColor,
              Confetti,
              MultiPole,
              VerticalWave,
              Torch,
              LinearRainbow,
              VerticalRainbow,
              BPM,
              Juggle
            } from '@/data/types'
            
const addedPatterns = ref<(SolidColor|
                          PulsingColor|
                          Confetti|
                          MultiPole|
                          VerticalWave|
                          Torch|
                          LinearRainbow|
                          VerticalRainbow|
                          BPM|
                          Juggle)[]>([])

function deletePattern(index: number) {
  addedPatterns.value.splice(index, 1)
}

const bottomElement = ref()
function scrollToBottom() {
  bottomElement.value.scrollIntoView({behavior: 'smooth', block: 'end'});
}

function handleOrderButtons(direction: number, index: number) {
  // can probably shorten this using direction as the index addition value
  if (direction === -1) {
    // can add checking if index out of range here
    const adjacentIndexValue = addedPatterns.value[index - 1]
    addedPatterns.value[index - 1] = addedPatterns.value[index]
    addedPatterns.value[index] = adjacentIndexValue
  }

  else if (direction === 1) {
    // can add checking if index out of range here
    const adjacentIndexValue = addedPatterns.value[index + 1]
    addedPatterns.value[index + 1] = addedPatterns.value[index]
    addedPatterns.value[index] = adjacentIndexValue
  }

  else {
    console.log("direction not defined in handleOrderButtons()")
  }
}

function handleAddNewPattern(value: object) {
  value.id = Date.now()
  addedPatterns.value.push(JSON.parse(JSON.stringify(value)))
  scrollToBottom()
}
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  display: none;
}
.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
