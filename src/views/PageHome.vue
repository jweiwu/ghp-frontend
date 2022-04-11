<script setup>
import { NCard, NDataTable, NGrid, NGi } from 'naive-ui'
import BarChart from '@/components/AppBarChart.vue'
import PieChart from '@/components/AppPieChart.vue'

const columns = [
  {
    title: '#',
    key: 'no'
  },
  {
    title: '項目',
    key: 'item'
  },
  {
    title: '次數',
    key: 'count'
  }
]
const data = [
  { no: 1, item: '人員衛生管理', count: 50 },
  { no: 2, item: '廚房廠區清潔維護', count: 30 },
  { no: 3, item: '食品容器', count: 12 }
]
</script>

<template>
  <n-grid :cols="1">
    <n-gi>
      <n-card :bordered="false" title="登錄統計圖" size="small">
        <BarChart />
      </n-card>
    </n-gi>
  </n-grid>
  <div style="padding: 12px" />
  <n-grid :cols="3">
    <n-gi>
      <n-card :bordered="false" title="合格比例圖" size="small">
        <PieChart />
      </n-card>
    </n-gi>
    <n-gi :span="2">
      <n-card :bordered="false" title="缺失統計表" size="small">
        <n-data-table :columns="columns" :data="data" :bordered="false" />
      </n-card>
    </n-gi>
  </n-grid>
</template>
