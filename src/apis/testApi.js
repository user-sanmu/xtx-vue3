import http from '@/utils/http'

export const getCate = () => {
  return http({
    url: 'home/category/head'
  })
}
