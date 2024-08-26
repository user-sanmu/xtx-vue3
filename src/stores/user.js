import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    // 获取用户信息
    const getUserInfo = async loginForm => {
      const res = await loginAPI(loginForm)
      console.log(res)
      userInfo.value = res.data.result
    }

    // 退出时清除登录信息
    const clearUser = () => {
      userInfo.value = {}
    }

    return {
      userInfo,
      getUserInfo,
      clearUser
    }
  },
  {
    persist: true
  }
)
