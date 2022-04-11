import { defineStore } from 'pinia'

const initAuth = !!JSON.parse(localStorage.getItem('authed'))

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: 'admin',
    password: 'admin',
    name: '系統管理員',
    authed: initAuth
  }),
  actions: {
    async loginUser({ username, password }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.username === username && this.password === password) {
            this.authed = true
            localStorage.setItem('authed', JSON.stringify(true))
            return resolve()
          }
          return reject(new Error('Failed to login'))
        }, 1200)
      })
    },
    async logoutUser() {
      this.authed = false
      localStorage.removeItem('authed')
    }
  }
})
