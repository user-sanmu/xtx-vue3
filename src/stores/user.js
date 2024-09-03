import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { mergeCartAPI } from '@/apis/cart'
import { useCartStore } from './cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    const userInfo = ref({})
    // 获取用户信息
    const getUserInfo = async loginForm => {
      const res = await loginAPI(loginForm)
      // console.log(res)
      userInfo.value = res.data.result
      await mergeCartAPI(
        cartStore.cartList.map(item => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        })
      )
      cartStore.getNewCart()
    }

    // 退出时清除登录信息
    const clearUser = () => {
      userInfo.value = {}
      cartStore.clearCart()
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
