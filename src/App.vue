<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center">
        <v-col></v-col>
        <v-col cols="6">
          <v-sheet class="overflow-auto" style="height: 93vh">
            
            <div 
              v-for="(pattern, index) in addedPatterns"
              :key="index"
            >
              <PatternParent 
                v-model:title="addedPatterns[index]"
              >
                <PatternInterface />
              </PatternParent> 
            </div>
          
            
            
          </v-sheet>
        </v-col>
        <v-col class="d-flex justify-start"><v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon="mdi-plus"
                  color="primary"
                  v-bind="props"
                  class="d-fles float-end"
                >
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="pattern in patterns"
                  :key="pattern"
                  :value="pattern"
                  @click="createNewPattern(pattern)"
                >
                  <v-list-item-title>{{ pattern }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu></v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PatternParent from '@/components/PatternParent.vue'
import PatternInterface from '@/components/PatternInterface.vue'
import { patterns } from '@/data/patterns'

const addedPatterns = ref<string[]>([])

function createNewPattern(pattern: string) {
  addedPatterns.value.push(pattern)
}

</script>
