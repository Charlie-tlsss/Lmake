import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import home from './home';
import shop from './shop';
export default new Vuex.Store({
    modules:{
        home,
        shop,
    }
})