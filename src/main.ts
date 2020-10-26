import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import Home from './Views/home.vue'
import Login from './Views/login.vue'
import Column from './Views/column.vue'
import App from './App.vue'

const historyWeb = createWebHistory()
const routers = createRouter({
    history: historyWeb,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/column',
            name: 'column',
            component: Column
        }
    ]
})
const app = createApp(App)
app.use(routers)
app.mount('#app')
// createApp(App).mount('#app')
