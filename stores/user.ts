import { defineStore } from 'pinia'

interface UserInfo {
  userName: string
  age: number
}
export const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    userName: 'laoer536',
    age: 23,
  }),
  getters: {
    doubleAge(): number {
      return this.age * 2
    },
  },
  actions: {
    changeAge() {
      this.age += 1
    },

    //可以直接使用异步操作
    /*async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(`Welcome back ${this.userData.name}!`)
      } catch (error) {
        showTooltip(error)
        // 让表单组件显示错误
        return error
      }
    },
  },*/
  },
})
