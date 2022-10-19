import Home from '@/page/Home';
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/search',
        component:() => import('@/page/Search')
    },
    {
        path:'/',
        redirect:'/home'
    }
]