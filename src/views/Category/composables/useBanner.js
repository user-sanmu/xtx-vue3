// 封装banner轮播图相关代码
import { onMounted, ref } from 'vue'
import { getBannerListAPI } from '@/apis/home'
export function useBanner () {
  // 轮播图
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerListAPI({
      distributionSite: '2'
    })
    // console.log(res)
    bannerList.value = res.data.result
  }

  onMounted(() => {
    getBannerList()
  })

  return {
    bannerList
  }
}
