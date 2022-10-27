//引入mockjs模块
import Mock from "mockjs";
//引入json
import home from './home';

//第一个参数请求地址 第二个参数请求数据
Mock.mock('/mock/home', { code: 200, data: home })