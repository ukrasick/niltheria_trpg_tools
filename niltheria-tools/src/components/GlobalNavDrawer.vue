<script setup lang="ts">
  import { ref } from 'vue'
  import { TOOL_LIST } from '../data/toolList.ts'

  const drawer = ref(false)
</script>

<template>
  <v-btn
    icon="mdi-menu"
    title="ツールメニュー"
    variant="text"
    @click="drawer = !drawer"
  />

  <v-navigation-drawer v-model="drawer" color="primary" :width="350">
    <v-list-item
      class="font-weight-bold"
      style="user-select: none;"
      title="NiLtheria TRPG Tools"
    />

    <v-list-item
      prepend-icon="mdi-home"
      title="トップに戻る"
      to="/"
      @click="drawer = false"
    />

    <v-divider />

    <v-list-item
      v-for="t in TOOL_LIST"
      :key="t.id"
      :prepend-icon="t.icon"
      :subtitle="t.description"
      :title="t.title"
      :to="t.path"
    />
  </v-navigation-drawer>
</template>
