import http from '@/utils/http'

/**
 *
 * @param {*} form 登录表单
 * @returns 返回用户信息
 */
export const loginAPI = form => http.post('/login', form)
