import requests from './index';

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
// export const reqGetSearchList = (keyWord) => requests({
//     url: 'search/SearchList',
//     method: 'get',
//     params: {
//         keyWord
//     },
// })
export const reqGetSearchList = (searchParams) => requests({url: 'search/SearchList', method: 'get',params:searchParams})

