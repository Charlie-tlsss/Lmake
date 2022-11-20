import { reqGetHomeBigItem,reqGetHomeList,reqGetHeaderList } from "@/api/index";
export default {
    state:{
        homeBigItem:[],
        homeList:[],
        homeHeaderList:[],
    },
    mutations:{
        GETHOMEBIGITEM(state,homeBigItem){
            state.homeBigItem = homeBigItem
        },
        GETHOMELIST(state,homeList){
            state.homeList = homeList
        },
        GETHOMEHEADERLIST(state,homeHeaderList){
            state.homeHeaderList = homeHeaderList
        }
    },
    actions:{
        //获取首页大图
        async getHomeBigItem({commit}){
            let res = await reqGetHomeBigItem();
            if(res.code == 200 ){
                commit('GETHOMEBIGITEM',res.data)
            }
           
        },
        //获取首页listtu
        async getHomeList({commit}){
            let res = await reqGetHomeList();
            if(res.code == 200){
                commit('GETHOMELIST',res.data)
            }
        },
        //获取头部下拉菜单数据
        async getHomeHeaderList({commit}){
            let res = await reqGetHeaderList();
            if(res.code == 200){
                commit('GETHOMEHEADERLIST',res.data)
            }
        }
    },
    getters:{

    }
}