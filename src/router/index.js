export default [
    {
        path: '/home',
        component: () => import('@/page/Home'),
    },
    {
        path: '/search',
        component: () => import('@/page/Search'),
    },
    {
        path:'/shop',
        component:() => import('@/page/Shop'),
    },
    //重定向
    {
        path: '/',
        redirect: '/home'
    }
]