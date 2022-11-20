import { reqLogin,reqGetUserInfo } from "@/api/index";
import { getToken ,setToken} from "@/utils/token";
export default {
    state:{
        userInfo:{},
        token:getToken()
    },
    mutations:{
        LOGIN(state,token){
            state.token = token
            
        },
        GETUSERINFO(state,userInfo){
            state.userInfo = userInfo
        }
    },
    actions:{
        //登录
       async login({commit},data){
        let res = await reqLogin(data)
        if(res.code == 200){
            commit('LOGIN',res.token)
            setToken(res.token)
            return 'ok'
        }
       },
       //获取用户信息
       async getUserInfo({commit}){
        let res = await reqGetUserInfo()
        console.log(res)
        if(res.code == 200){
            commit('GETUSERINFO',res.data[0])
            return 'ok'
        }
       }
    },
    getters:{

    }
}