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
              @click="displayBackButtonDialog = false, appStatus = appStatusEnum.HOME, addedPatterns = [], importFileError = '', importPasteBoxError = ''"
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

        <v-sheet>

          <div 
            v-for="pattern in addedPatterns"
            style="cursor: pointer"
            class="hover-underline"
            @click="scrollToElement(pattern.id)"
          >
            <v-card-title style="margin-bottom: -10px;">{{ pattern.displayName }}</v-card-title>
            <!-- <v-card-subtitle>{{ pattern.name }}</v-card-subtitle> -->
          </div>
        </v-sheet>
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
              <div v-show="currentImportType === importStatusEnum.PASTE" style="width: 600px; min-height: 250px">
                <v-row class="d-flex justify-space-between mb-2">
                  <p>Paste your JSON into this box to import:</p>
                    <v-btn
                      color="primary"
                      size="small"
                      variant="text"
                      @click="currentImportType = importStatusEnum.UPLOAD"
                    >Upload File</v-btn>
                </v-row>
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
                <v-alert v-if="importPasteBoxError !== ''" type="warning" :text="importPasteBoxError">
                </v-alert>
              </div>
              <div v-show="currentImportType === importStatusEnum.UPLOAD" style="width: 600px; min-height: 250px">
                <v-row class="d-flex justify-space-between mb-2">
                  <p>Select your file below</p>
                    <v-btn
                      color="primary"
                      size="small"
                      variant="text"
                      @click="currentImportType = importStatusEnum.PASTE"
                    >Paste JSON</v-btn>
                </v-row>
                <v-file-input 
                  v-model="importFileInput"
                  label="JSON Upload"
                  prepend-icon="mdi-code-braces"
                  @change="handleImportFileInput()"
                  @click:clear="importFileInput = null,
                                importFileData = ''"
                ></v-file-input>
                <v-alert v-if="importFileError !== ''" type="warning" :text="importFileError">
                </v-alert>
              </div>
            </template>
            <template #actions>
              <v-btn
                color="success"
                :disabled="importFileData === '' && importPasteBoxContent === ''"
                @click="handleClickImportButton()"
              >Import</v-btn>
              <v-btn
                color="red"
                @click="displayImportDialog = false,
                        importPasteBoxError = '',
                        importPasteBoxContent = '',
                        importFileInput = null,
                        importFileData = '',
                        importFileError = ''"
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
                :subtitle="addedPatterns[index].name"
                @update:delete="deletePattern(index)"
                :id="`pattern-id-${addedPatterns[index].id}`"
              >
              <template #orderButtons>
                <v-btn-group variant="outlined">
                  <v-btn
                    :disabled="index === 0 ? true: false"
                    icon="mdi-arrow-up" 
                    class="mr-0"
                    @click="handleOrderButtons(-1, index, addedPatterns[index].id)"
                  ></v-btn>
                  <v-btn
                    :disabled="index === addedPatterns.length -1 ? true: false"
                    icon="mdi-arrow-down" 
                    class="ml-0"
                    @click="handleOrderButtons(1, index, addedPatterns[index].id)"
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
              v-show="addedPatterns.length"
              class="ml-4"
              @click="handleSubmitClick()"
            >Submit</v-btn>
            <div v-show="addedPatterns.length" class="ml-4 text-caption mt-2">
              <v-chip label size="x-small">CTRL</v-chip>
              +
              <v-chip label size="x-small">S</v-chip>
            </div>
            <div ref="bottomElement" style="margin-top: 150px;"></div>
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
          <Snackbar 
            v-model:showSnackbar="showSubmitSnackbar" 
            :timeout="submitSnackbarData.timeout"
            :color="submitSnackbarData.color"
          >
            <template #content>
              <h3>{{ submitSnackbarData.text }}</h3>
            </template>
            <template #actions>
              <v-btn variant="outlined" class="ma-2" @click="downloadJSONData()">Download File</v-btn>
              <v-btn variant="text" class="ma-2" @click="showSubmitSnackbar = false">Close</v-btn>
            </template>
          </Snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, nextTick } from 'vue'
import PatternParent from '@/components/PatternParent.vue'
import PatternInterface from '@/components/PatternInterface.vue'
import Snackbar from './components/Snackbar.vue'
import Dialog from './components/Dialog.vue'
import { patterns } from '@/data/patterns'
import { appStatusEnum } from '@/data/appStatusEnum'
import { importStatusEnum } from '@/data/importStatusEnum'
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

function scrollToElement(scrollToId: number) {
  const el = document.getElementById(`pattern-id-${scrollToId}`)
  el?.scrollIntoView({behavior: 'smooth', block: 'center' })
}

async function handleAddNewPattern(value: { id: number }) {
  value.id = Date.now()
  addedPatterns.value.push(JSON.parse(JSON.stringify(value)))
  await nextTick()
  scrollToElement(value.id)
}

function handleOrderButtons(direction: -1 | 1, index: number, elementId: number) {
  if ([-1, 1].includes(direction)) {
    const adjacentIndexValue = addedPatterns.value[index + direction]
    addedPatterns.value[index + direction] = addedPatterns.value[index]
    addedPatterns.value[index] = adjacentIndexValue
    scrollToElement(elementId)
  } else {
    throw new Error('direction not defined in handleOrderButtons()')
  }
}

const appStatus = ref(appStatusEnum.HOME)

const showSubmitSnackbar = ref(false)
function downloadJSONData() {
  const anchor = document.createElement('a')
  anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(JSON.stringify(addedPatterns.value))
  anchor.target = '_blank'
  anchor.download = 'club_pattern.json'
  anchor.click()
}

const submitSnackbarData = ref({
  color: '',
  text: '',
  timeout: 5000,
})

async function handleSubmitClick() {
  await navigator.clipboard.writeText(JSON.stringify(addedPatterns.value))
    .then(
      () => {
        submitSnackbarData.value.color = 'success'
        submitSnackbarData.value.text = 'JSON Template Copied to Clipboard'
      },
      () => {
        submitSnackbarData.value.color = 'error'
        submitSnackbarData.value.text = `Could not access clipboard.
        Please copy manually: ${ JSON.stringify(addedPatterns.value) }`
      },
    )

  showSubmitSnackbar.value = true

  /* 
    This is api post request

    await axios.post('/api/upload', JSON.stringify(addedPatterns.value))
    then add some snackbar with error or not if returns 200


  */
}


document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === 's' && appStatus.value !== appStatusEnum.HOME && addedPatterns.value.length) {
    e.preventDefault()
    handleSubmitClick()
  }
});

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
const importPasteBoxError = ref("")

const currentImportType = ref(importStatusEnum.PASTE)
const importFileInput = ref()
const importFileData = ref("")
const importFileError = ref("")

function handleClickImportButton() {
  if (currentImportType.value === importStatusEnum.PASTE) {
    try {
      addedPatterns.value = JSON.parse(importPasteBoxContent.value)
    } catch (error) {
      importPasteBoxError.value = String(error)
      return
    }
  }
  else {
    // try catch probably not used here
    try {
      addedPatterns.value = JSON.parse(JSON.stringify(importFileData.value))
    } catch (error) {
      importFileError.value = String(error)
      return
    }
  }
  appStatus.value = appStatusEnum.IMPORT
  displayImportDialog.value = false
  importPasteBoxContent.value = ''
}

function handleImportFileInput() {
  if (importFileInput.value !== null) {

    let reader = new FileReader()

    reader.readAsText(importFileInput.value[0]);

    reader.onload = () => {
      try {
        if (typeof(reader.result) === 'string') importFileData.value = JSON.parse(reader.result);
      } catch (error) {
        importFileError.value = String(error)
        return
      }
    }
    importFileError.value = ""
  }
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

.hover-underline:hover {
  text-decoration: underline;
}
</style>
