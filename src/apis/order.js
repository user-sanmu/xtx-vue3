import http from '@/utils/http'

/**
 * 获取我的订单
 * @param {*} params 分页参数
 * @returns 订单信息
 */
export const getUserOrderAPI = params => {
  return http({
    url: '/member/order',
    method: 'GET',
    params
  })
}
