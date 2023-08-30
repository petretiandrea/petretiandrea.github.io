import {createRouter, createWebHashHistory} from 'vue-router'
import Dashboard from '@/views/Dashboard'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Dashboard
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router