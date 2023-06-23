<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center">
        <v-sheet>
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
                v-for="pattern in patterns"
                :key="pattern"
                :value="pattern"
                :disabled="addedPatterns.includes(pattern)"
                @click="createNewPattern(pattern)"
              >
                <v-list-item-title>{{ pattern }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          
          <PatternParent
            v-for="pattern in addedPatterns"
            :key="pattern"
          >
            {{ pattern }}
            <component 
              :is="PatternInterface"
            />
          </PatternParent> 
          
        </v-sheet>
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
