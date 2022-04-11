<script setup>
import { h, ref } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import {
  NButton,
  NDropdown,
  NIcon,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NMenu,
  NNotificationProvider,
  NSpace
} from 'naive-ui'
import { useAuthStore } from '@/stores/auth'
import {
  PersonOutlineOutlined,
  LogOutOutlined,
  HouseOutlined,
  SettingsOutlined,
  BarChartOutlined,
  TableRowsOutlined,
  HistoryOutlined,
  ManageAccountsOutlined,
  ManageSearchOutlined
} from '@vicons/material'

const renderIcon = icon => () => h(NIcon, null, { default: () => h(icon) })

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const name = authStore.name
const dropdownOpts = [
  {
    label: '登出',
    key: 'logout',
    icon: renderIcon(LogOutOutlined)
  }
]
const selectedMenu = ref(route.name)
const menuOpts = [
  {
    label: () =>
      h(RouterLink, { to: { name: 'Home' } }, { default: () => '首頁' }),
    key: 'Home',
    icon: renderIcon(HouseOutlined)
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: { name: 'Settings' } },
        { default: () => '基本檔設定' }
      ),
    key: 'Settings',
    icon: renderIcon(SettingsOutlined)
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: { name: 'Charts' } },
        { default: () => '統計與圖表' }
      ),
    key: 'Charts',
    icon: renderIcon(BarChartOutlined)
  },
  {
    label: () =>
      h(RouterLink, { to: { name: 'Forms' } }, { default: () => '表單紀錄' }),
    key: 'Forms',
    icon: renderIcon(TableRowsOutlined)
  },
  {
    label: () =>
      h(RouterLink, { to: { name: 'Records' } }, { default: () => '巡檢紀錄' }),
    key: 'Records',
    icon: renderIcon(HistoryOutlined)
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: { name: 'Management' } },
        { default: () => '使用者權限' }
      ),
    key: 'Management',
    icon: renderIcon(ManageAccountsOutlined)
  },
  {
    label: () =>
      h(RouterLink, { to: { name: 'History' } }, { default: () => '操作記錄' }),
    key: 'History',
    icon: renderIcon(ManageSearchOutlined)
  }
]

const handleDropdownSelect = async key => {
  switch (key) {
    case 'logout':
      await authStore.logoutUser()
      router.push({ name: 'Login' })
      break
  }
}
</script>

<template>
  <n-layout>
    <n-layout-header bordered absolute>
      <n-space justify="space-between" align="center" style="padding: 0 32px">
        <h3>大竹國小食安管理系統</h3>
        <n-dropdown
          trigger="click"
          placement="bottom-start"
          :show-arrow="true"
          :options="dropdownOpts"
          @select="handleDropdownSelect"
        >
          <n-button>
            <template #icon>
              <n-icon>
                <person-outline-outlined />
              </n-icon>
            </template>
            {{ name }}
          </n-button>
        </n-dropdown>
      </n-space>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider bordered show-trigger="arrow-circle">
        <n-menu :options="menuOpts" v-model:value="selectedMenu" />
      </n-layout-sider>
      <n-layout-content>
        <n-notification-provider :max="3">
          <router-view />
        </n-notification-provider>
      </n-layout-content>
    </n-layout>
    <!-- <n-layout-footer>Footer</n-layout-footer> -->
  </n-layout>
</template>

<style lang="scss" scoped>
.n-layout .n-layout-sider .n-layout-toggle-button {
  top: 240px !important;
}
</style>
