<script setup>
import { NConfigProvider, NGlobalStyle } from 'naive-ui'
import Layout from '@/layouts/AppLayout.vue'
</script>

<template>
  <n-config-provider>
    <n-global-style />
    <layout>
      <router-view />
    </layout>
  </n-config-provider>
</template>

<style lang="scss">
// @import url(./global.scss);
</style>
