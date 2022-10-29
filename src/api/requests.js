import requests from './index';

//获取首页大图接口
export const reqGetHomeBigItem = () => requests({ url: '/home/bigItem', method: 'get' })
//获取首页list接口
export const reqGetHomeList = () => requests({ url: '/home/list', method: 'get' })
//获取首页头部List
export const reqGetHeaderList= () => requests({ url: '/home/headerList', method: 'get' })
