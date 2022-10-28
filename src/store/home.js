import { reqGetHomeBigItem } from "@/api/requests";
export default {
    state:{
        homeBigItem:[]
    },
    mutations:{
        GETHOMEBIGITEM(state,homeBigItem){
            state.homeBigItem = homeBigItem
        }
    },
    actions:{
        async getHomeBigItem({commit}){
            let res = await reqGetHomeBigItem();
            if(res.data.code == 200 ){
                commit('GETHOMEBIGITEM',res.data.data)
            }
           
        }
    },
    getters:{

    }
}