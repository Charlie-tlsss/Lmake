import Vue from 'vue'
import App from './App.vue'
//全局引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
//引入路由
import router from '@/router/router';
//引入Vuex
import store from './store/index';
//图片懒加载
import VueLazyload from 'vue-lazyload'

import Q from '@/assets/loading.gif';
Vue.use(VueLazyload, {
  loading: Q,
})
//引入api
import * as API from '@/api/index';
//注册全局组件remarkdetail
import RemarkDetail from '@/components/RemarkDetail';
Vue.component('RemarkDetail',RemarkDetail)

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    //全局事件总线
    Vue.prototype.$bus = this
    //全局api
    Vue.prototype.$API = API
  }
}).$mount('#app')
