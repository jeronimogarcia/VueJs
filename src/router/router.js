import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginRegForm.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/CartView.vue')
        }
    ]
})

export default router;