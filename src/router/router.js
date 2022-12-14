import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import routes from './index';

//先保存一份VueRouter
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
//第一个参数：往哪里跳（传递哪些参数）
VueRouter.prototype.push = function(location,resolve,reject) {
    if(resolve && reject) {
        originPush.call(this,location,resolve,reject);
    } else {
        originPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace = function(location,resolve,reject) {
    if(resolve && reject) {
        originReplace.call(this,location,resolve,reject);
    } else {
        originReplace.call(this,location,()=>{},()=>{});
    }
}



let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

router.beforeEach()

export default router