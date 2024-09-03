// 购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { addCartAPI, getCartListAPI, delCartAPI } from '@/apis/cart'
import { useUserStore } from './user'
export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])
    // 添加购物车
    const addCart = async goods => {
      if (isLogin.value) {
        await addCartAPI(goods.skuId, goods.count)
        getNewCart()
      } else {
        const find = cartList.value.find(item => goods.skuId === item.skuId)
        if (find) {
          find.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }
    //删除购物车
    const delCart = async skuId => {
      console.log(skuId)

      if (isLogin.value) {
        await delCartAPI([skuId])
        getNewCart()
      } else {
        const idx = cartList.value.findIndex(item => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }
    //清除购物车
    const clearCart = () => (cartList.value = [])

    // 获取最新购物车列表
    const getNewCart = async () => {
      const res = await getCartListAPI()
      cartList.value = res.data.result
    }
    // 单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find(item => item.skuId === skuId)
      item.selected = selected
    }
    // 全选功能
    const allCheck = selected => cartList.value.forEach(item => (item.selected = selected))
    // 计算属性
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    // 是否全选
    const isAll = computed(() => cartList.value.every(item => item.selected))

    // 已选择数量
    const selectedCount = computed(() =>
      cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0)
    )
    // 已选择价格
    const selectedPrice = computed(() =>
      cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0)
    )

    return {
      cartList,
      addCart,
      delCart,
      clearCart,
      getNewCart,
      singleCheck,
      allCheck,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice
    }
  },
  {
    persist: true
  }
)
