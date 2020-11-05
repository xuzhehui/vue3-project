import { createApp } from 'vue'
import routers from './router/router'
import App from './App.vue'
import axios from 'axios'
import store from './store/store'

axios.defaults.baseURL = 'http://apis/imooc.com/api/'
axios.interceptors.request.use(config => {
    config.params = { ...config.params, icode: '3E9FABBECA96C187' }
    return config
})
const app = createApp(App)
axios('/api/columns', { params: { currentPage: 1, pageSize: 10 } })
app.use(store)
app.use(routers)
app.mount('#app')
