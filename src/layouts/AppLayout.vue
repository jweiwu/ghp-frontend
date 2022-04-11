<script setup>
import { ref, watch, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import AdminLayout from './AppAdminLayout.vue'

const route = useRoute()
const layout = ref()

watch(
  () => route.meta?.layout,
  async metaLayout => {
    layout.value = markRaw(metaLayout || AdminLayout)
  },
  { immediate: true }
)
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
