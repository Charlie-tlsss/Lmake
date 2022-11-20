import { reqGetShopList } from "@/api/index";
export default {
    state:{
        shopList:[]
    },
    mutations:{
        GETSHOPLIST(state,shopList){
            state.shopList = shopList
        }
    },
    actions:{
       async getShopList({commit}){
        let res = await reqGetShopList()
        if(res.code == 200){
            commit('GETSHOPLIST',res.data)
        }
       }
    },
    getters:{

    }
}