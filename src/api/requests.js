import requests from './index';

//获取首页大图接口
export const reqGetHoneBigImg = () => requests({url:'/mock/home' ,methods:'get'})
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });