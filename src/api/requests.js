import requests from './index';

//获取首页大图接口
export const reqGetHomeBigItem = () => requests({ url: 'home/bigItem', method: 'get' })