<script setup>
import { NPageHeader, NResult, NIcon, NH4 } from 'naive-ui'
import { ConstructionTwotone } from '@vicons/material'
</script>

<template>
  <n-page-header title="巡檢紀錄" style="margin: 12px" />
  <n-result size="small">
    <template #default>
      <n-h4 style="text-align: center; color: grey">Coming Soon</n-h4>
    </template>
    <template #icon>
      <n-icon :size="64" color="grey">
        <construction-twotone />
      </n-icon>
    </template>
  </n-result>
</template>
