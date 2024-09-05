import http from '@/utils/http'

//获取订单详细信息
export const getCheckoutAPI = () => http.get('/member/order/pre')

// 创建订单
export const createOrderAPI = data => http.post('/member/order', data)
