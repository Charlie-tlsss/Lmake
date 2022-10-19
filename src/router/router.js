import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import routes from './index';
let router = new VueRouter({
    routes,
})

export default router