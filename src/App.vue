<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center">
        <v-btn
          v-if="appStatus != appStatusEnum.HOME"
          icon="mdi-arrow-left"
          @click="displayBackButtonDialogHelper()"
        ></v-btn>
        <Dialog v-model:showDialog="displayBackButtonDialog">
          <template #content>
            <h4>You have unsaved changes that will be lost if you exit!</h4>
          </template>
          <template #actions>
            <v-btn
              color="red"
              @click="displayBackButtonDialog = false, appStatus = appStatusEnum.HOME, addedPatterns = []"
            >Proceed</v-btn>
            <v-btn
              color="primary"
              @click="displayBackButtonDialog = false"
            >Cancel</v-btn>
            <v-btn
              color="success"
              @click="handleSubmitClick()"
            >Copy to Clipboard</v-btn>
          </template>
        </Dialog>
        <v-col xs="10" sm="10" md="11" lg="8" xl="7">
          <v-sheet v-if="appStatus === appStatusEnum.HOME" class="d-flex justify-center mt-8">   
            <v-btn
              class="ma-2"
              prepend-icon="mdi-plus"
              @click="appStatus = appStatusEnum.CREATE"
            >Create New Project</v-btn>
            <v-btn
              class="ma-2"
              prepend-icon="mdi-import"
              @click="displayImportDialog = true"
            >Import Existing Project</v-btn>
          </v-sheet>
          <Dialog v-model:showDialog="displayImportDialog">
            <template #content>
              <p>
                Paste your JSON into this box to import:
              </p>

              <v-textarea
                v-model="importPasteBoxContent"
                label="Paste JSON Here" 
                variant="outlined" 
                rows="6"
                style="min-width: 600px"
                class="mt-4"
              ></v-textarea>
              <v-btn 
                color="primary" 
                size="x-small" 
                style="margin-top: -40px"
                variant="text"
                @click="importPasteBoxContent = ''"
              >Clear</v-btn>
            </template>
            <template #actions>
              <!-- add other un-disable option when uploading file -->
              <!-- have submit run a checking function -->
              <v-btn
                color="success"
                :disabled="importPasteBoxContent === ''"
                @click="appStatus = appStatusEnum.IMPORT,
                        displayImportDialog = false, 
                        addedPatterns = JSON.parse(importPasteBoxContent)"
              >Import</v-btn>
              <v-btn
                color="red"
                @click="displayImportDialog = false"
              >Cancel</v-btn>
            </template>
          </Dialog>
          <v-sheet 
            v-if="appStatus !== appStatusEnum.HOME"
            class="overflow-auto scrollbar"
            style="height: 94vh;" 
          >
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
            <v-btn
              v-if="addedPatterns.length"
              @click="handleSubmitClick()"
            >Submit</v-btn>
            <div ref="bottomElement" style="margin-top: 370px;"></div>
          </v-sheet>
        </v-col>
          <v-menu v-if="appStatus !== appStatusEnum.HOME">
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
          <Snackbar v-model:showSnackbar="showSubmitSnackbar">
            <template #content>
              JSON Template Copied to Clipboard
            </template>
          </Snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PatternParent from '@/components/PatternParent.vue'
import PatternInterface from '@/components/PatternInterface.vue'
import Snackbar from './components/Snackbar.vue'
import Dialog from './components/Dialog.vue'
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

  if ([-1, 1].includes(direction)) {
    const adjacentIndexValue = addedPatterns.value[index + direction]
    addedPatterns.value[index + direction] = addedPatterns.value[index]
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

const showSubmitSnackbar = ref(false)

function handleSubmitClick() {
  navigator.clipboard.writeText(JSON.stringify(addedPatterns.value))
  showSubmitSnackbar.value = true
}
const appStatusEnum = {
  CREATE: "create",
  IMPORT: "import",
  HOME: "home",
};
const appStatus = ref(appStatusEnum.HOME)

const displayBackButtonDialog = ref(false)
function displayBackButtonDialogHelper() {
  if (addedPatterns.value.length) {
    displayBackButtonDialog.value = true
  }

  else {
    appStatus.value = appStatusEnum.HOME
  }
}

const displayImportDialog = ref(false)

const importPasteBoxContent = ref("")
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
