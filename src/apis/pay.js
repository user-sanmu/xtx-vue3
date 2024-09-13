import http from '@/utils/http'

/**
 * 获取订单详情
 * @param {*} id 订单id
 * @returns 支付页信息
 */
export const getOrderAPI = id => http.get(`/member/order/${id}`)
