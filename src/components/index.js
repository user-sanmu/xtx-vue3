import ImageView from '@/components/ImageView/index.vue'
import XtxSku from '@/components/XtxSku/index.vue'
//通过插件components中的组件进行全局化注册
export const componentPlugin = {
  install (app) {
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}
