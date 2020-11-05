import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Views/home.vue'
import Login from '@/Views/login.vue'
import Column from '@/Views/column.vue'
import Create from '@/Views/create.vue'
import store from '@/store/store'
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
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        }
    ]
})
routers.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !store.state.user.isLogin){
        next({ name: 'login' })
    } else {
        next()
    }
})

export default routers
