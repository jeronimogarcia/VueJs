import Vue from 'vue';
import VueRouter from 'vue-router'
// import coderListaMeals from '../models/arrayMeals'
Vue.use(VueRouter)

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
            // props: {coderListaMeals}
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginRegForm.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/CartView.vue'),
        },
        {
            path: '/product/:id',
            name: 'product',
            component: () => import('../views/ProductDetail.vue'),
        }

    ]
})

export default router;