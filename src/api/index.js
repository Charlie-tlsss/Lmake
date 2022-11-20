import requests from './requests';

//获取首页大图接口
export const reqGetHomeBigItem = () => requests({ url: '/home/bigItem', method: 'get' })
//获取首页list接口
export const reqGetHomeList = () => requests({ url: '/home/list', method: 'get' })
//获取首页头部List
export const reqGetHeaderList = () => requests({ url: '/home/headerList', method: 'get' })
//获取搜索页热门搜索
export const reqGetHotSearch = () => requests({ url: '/search/hotsearch', method: 'get' })
//获取商城首页数据列表（goodsbox）
export const reqGetShopList = () => requests({ url: '/shop/shopList', method: 'get' })
//获取商城首页限时购商品
export const reqGetShopTimeLimit = () => requests({ url: '/shop/timeLimit', method: 'get' })
//获取首页推荐接口
export const reqGetShopRecommend = () => requests({ url: '/shop/recommend', method: 'get' })
//获取搜索结果接口
export const reqGetSearchList = (searchParams) => requests({ url: '/search/SearchList', method: 'get', params: searchParams })
//判断用户名是否存在接口
export const reqisUsernameOccupy = (username) => requests({ url: '/user/isUsernameOccupy', method: 'post',data:username })
//获取验证码接口
export const reqGetCode = (email) => requests({ url: '/user/getCode', method: 'post',data:email }) 
//注册接口
export const reqReguser = (userForm) => requests({ url: '/user/reguser', method: 'post',data:userForm }) 
//登录接口
export const reqLogin = (data) => requests({ url: '/user/login', method: 'post',data})
//获取用户信息
export const reqGetUserInfo = () => requests({ url: '/my/getUserInfo', method: 'get'})

