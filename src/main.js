import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import * as echarts from 'echarts'

const app = createApp(App);

app.mount('#app')
app.config.errorHandler = (err) => {
    /** 处理错误 */
}
app.provide('message', 'hello')

