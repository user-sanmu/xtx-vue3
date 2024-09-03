import http from '@/utils/http'

/**
 * 添加购物车
 * @param {*} skuId 商品类型id
 * @param {*} count 数量
 * @returns
 */
export const addCartAPI = (skuId, count) => http.post('/member/cart', { skuId, count })
//获取购物车列表
export const getCartListAPI = () => http.get('/member/cart')

/**
 * 删除购物车
 * @param {*} ids skuId组成的数组
 * @returns
 */
export const delCartAPI = ids =>
  http({
    url: '/member/cart',
    method: 'delete',
    data: {
      ids
    }
  })

export const mergeCartAPI = data =>
  http({
    url: '/member/cart/merge',
    method: 'post',
    data
  })
