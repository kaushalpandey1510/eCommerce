import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/login'
import Registration from './components/registration'
import Home from './components/home'
import Cart from './components/cart'
import AddCart from './components/addcart'
import VueSession from 'vue-session'
import RemoveCart from './components/removecart'
import UpdateCart from './components/updatecart'
import Logout from './components/logout'
import Product from './components/product'

Vue.use(VueSession)
Vue.use(VueRouter);
Vue.config.productionTip = false;
const routes = [{
        path: '/login',
        
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/product/:pid',
        component: Product
    },
    {
        path: '/addcart/:pid/:uid',
        component: AddCart
    },
    {
        path: '/removecart/:cid/:uid',
        component: RemoveCart
    },
    {
        path: '/updatecart/:cid/:status',
        component: UpdateCart
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/registration',
        component: Registration
    }
]
const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes,
});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
