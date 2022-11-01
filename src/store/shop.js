import { reqGetShopList } from "@/api/requests";
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
        if(res.data.code == 200){
            commit('GETSHOPLIST',res.data.data)
        }
       }
    },
    getters:{

    }
}