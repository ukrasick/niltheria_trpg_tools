<template>
  <v-container class="fill-height d-flex flex-column justify-center" max-width="1100">
    <div>
      <v-img
        class="mb-4 font-weight-bold"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="mb-8 text-center">
        <div class="text-body-medium font-weight-light mb-n1">Welcome to</div>
        <div class="text-display-medium font-weight-bold">Vuetify</div>
      </div>

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            rounded="lg"
            variant="tonal"
          >
            <template #prepend>
              <v-avatar class="ml-2 mr-4" icon="mdi-rocket-launch-outline" size="60" variant="tonal" />
            </template>

            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <div class="my-title my-uppercase text-headline-medium font-weight-bold">Get started</div>
            </template>

            <template #subtitle>
              <div class="text-body-large">
                Change this page by updating <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in <v-kbd>components/HelloWorld.vue</v-kbd>.
              </div>
            </template>
          </v-card>
        </v-col>

        <v-col v-for="tool in TOOL_LIST" :key="tool.id" cols="6">
          <v-card
            ref="noopener noreferrer"
            append-icon="mdi-open-in-app"
            class="py-2"
            color="surface-variant"
            rounded="lg"
            :title="tool.title"
            :to="tool.path"
          >
            <template #prepend>
              <v-avatar class="ml-1 mr-2" :icon="tool.icon" size="60" variant="tonal" />
            </template>

            <v-card-text class="bg-surface-light pt-1 pb-1">
              {{ tool.description }}
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>

      <global-nav-drawer />
    </div>

  </v-container>
</template>

<script setup lang="ts">
  import { TOOL_LIST } from '@/data/toolList.ts'
  import GlobalNavDrawer from '../GlobalNavDrawer.vue'
</script>
