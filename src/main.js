import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 测试接口函数
import { getCate } from './apis/testApi'
getCate().then(res => console.log(res))

app.use(createPinia())
app.use(router)

app.mount('#app')
