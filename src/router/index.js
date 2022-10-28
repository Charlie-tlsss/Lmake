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
    {
        path:'/searchlist',
        component:() => import('@/page/SearchList'),
    },
    {
        path:'/productdetail/:id?',
        component:() => import('@/page/ProductDetail'),
    },
    //重定向
    {
        path: '/',
        redirect: '/home'
    }
]