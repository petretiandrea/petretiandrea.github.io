import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/views/Dashboard'
import Works from '@/views/Works'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Dashboard
    },
    {
        path: '/works',
        name: 'Works',
        component: Works
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router