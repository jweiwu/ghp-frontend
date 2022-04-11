<script setup>
import { NLayout, NLayoutContent, NNotificationProvider } from 'naive-ui'
</script>

<template>
  <n-layout>
    <n-layout-content>
      <n-notification-provider :max="3">
        <router-view />
      </n-notification-provider>
    </n-layout-content>
  </n-layout>
</template>
