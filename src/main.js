import { createApp } from 'vue'
import { createPinia } from 'pinia' // 引入pinia仓库插件
import persist from 'pinia-plugin-persistedstate' // 引入持久化插件
import App from './App.vue'
// 添加 Element Plus 样式导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const pinia = createPinia() //创建pinia实例
pinia.use(persist) // 在pinia上挂载持久化插件
createApp(App).use(pinia).use(ElementPlus, { locale: zhCn }).mount('#app') //在vue实例上挂载pinia
