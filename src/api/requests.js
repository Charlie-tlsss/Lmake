import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css"
import store from '@/store'

const requests = axios.create({
    baseURL:'/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
})
requests.interceptors.request.use((config) => {
    if(store.state.user.token){
        config.headers.Authorization = store.state.user.token
    }
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (err) => {
    return err
})
export default requests;