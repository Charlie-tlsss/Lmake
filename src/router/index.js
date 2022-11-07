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
        meta:{
            isShowHF:true
        }
    },
    {
        path:'/searchlist',
        component:() => import('@/page/SearchList'),
        meta:{
            isShowHF:true
        }
    },
    {
        path:'/productdetail',
        component:() => import('@/page/ProductDetail'),
        name:'productDetail',
        meta:{
            isShowHF:true
        }
    },
    {
        path:'/cart',
        component:() => import('@/page/Cart'),
        meta:{
            isShowHF:true
        }
    },
    {
        path:'/login',
        component:() => import('@/page/Login'),
    },
    {
        path:'/trade',
        component:() => import('@/page/Trade'),
        meta:{
            isShowHF:true
        }
    },
    //重定向
    {
        path: '/',
        redirect: '/home'
    }
]