import http from '@/utils/http'

export const getBannerListAPI = (params = {}) => {
  const { distributionSite = '1' } = params
  return http({
    url: '/home/banner',
    params: { distributionSite }
  })
}

export const getNewListAPI = () => http.get('/home/new')

export const getHotListAPI = () => http.get('/home/hot')

export const getGoodsAPI = () => http.get('/home/goods')
