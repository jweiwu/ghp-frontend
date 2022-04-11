<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NIcon,
  useNotification
} from 'naive-ui'
import {
  PersonOutlineOutlined,
  LockOutlined,
  LogInOutlined
} from '@vicons/material'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const store = useAuthStore()
const notification = useNotification()
const loginForm = ref(null)
const user = ref({
  username: '',
  password: ''
})
const rules = {
  username: {
    required: true,
    message: '必填',
    tirgger: 'blur'
  },
  password: {
    required: true,
    message: '必填',
    tirgger: 'blur'
  }
}
const loading = ref(false)

const handleSubmit = async evt => {
  evt.preventDefault()
  notification.destroyAll()
  loginForm.value?.validate(async err => {
    if (err) {
      return notification.error({ content: '驗證失敗', duration: 3000 })
    }
    try {
      loading.value = true
      await store.loginUser(user.value)
      router.push({ name: 'Home' })
    } catch (e) {
      notification.error({
        content: '登入失敗',
        meta: '帳號或密碼錯誤',
        duration: 10000
      })
    } finally {
      loading.value = false
    }
  })
}
</script>

<template>
  <div id="login-wrap">
    <n-card
      title="大竹國小食安管理系統"
      :bordered="false"
      header-style="text-align: center"
    >
      <template #cover>
        <img alt="Logo" src="@/assets/logo.png" />
      </template>
      <n-form
        ref="loginForm"
        size="large"
        :model="user"
        :rules="rules"
        :disabled="loading"
      >
        <n-form-item path="username" :show-label="false">
          <n-input
            v-model:value="user.username"
            placeholder="帳號"
            @keyup.enter="handleSubmit"
          >
            <template #prefix>
              <n-icon size="large">
                <person-outline-outlined />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password" :show-label="false">
          <n-input
            v-model:value="user.password"
            placeholder="密碼"
            type="password"
            @keyup.enter="handleSubmit"
          >
            <template #prefix>
              <n-icon size="large">
                <lock-outlined />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item :show-label="false">
          <n-button
            attr-type="button"
            style="margin: auto"
            @click="handleSubmit"
            :loading="loading"
          >
            <template #icon>
              <n-icon>
                <log-in-outlined />
              </n-icon>
            </template>
            登入
          </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<style lang="scss" scoped>
#login-wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .n-card {
    max-width: 400px;
  }
}
</style>
