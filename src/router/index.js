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
        path: '/shop',
        component: () => import('@/page/Shop'),
        meta: {
            isShowHF: true
        }
    },
    {
        path: '/searchlist',
        component: () => import('@/page/SearchList'),
        meta: {
            isShowHF: true
        }
    },
    {
        path: '/productdetail',
        component: () => import('@/page/ProductDetail'),
        name: 'productDetail',
        meta: {
            isShowHF: true
        }
    },
    {
        path: '/cart',
        component: () => import('@/page/Cart'),
        meta: {
            isShowHF: true
        }
    },
    {
        path: '/login',
        component: () => import('@/page/Login'),
    },
    {
        path: '/trade',
        component: () => import('@/page/Trade'),
        meta: {
            isShowHF: true
        }
    },
    {
        path: '/Pay',
        component: () => import('@/page/Pay'),
        meta: {
            isShowHF: true
        }
    },
    {
        path: '/center',
        component: () => import('@/page/Center'),
        meta: {
            isShowHF: true
        },
        children: [
            {
                path: 'myorders',
                component:() => import('@/page/Center/MyOrders'),
                meta: {
                    isShowHF: true
                },
            },
            {
                path: 'myaddress',
                component:() => import('@/page/Center/MyAddress'),
                meta: {
                    isShowHF: true
                },
            },
            {
                path: 'myremarks',
                component:() => import('@/page/Center/MyRemarks'),
                meta: {
                    isShowHF: true
                },
            },
            {
                path: 'myinformation',
                component:() => import('@/page/Center/MyInformation'),
                meta: {
                    isShowHF: true
                },
            },
            {
                path: '/center',
                redirect: '/center/myorders'
            }

        ]
    },
    {   
        path:'/remark',
        component:() => import('@/page/Remark'),
        meta: {
            isShowHF: true
        }
    },
    //重定向
    {
        path: '/',
        redirect: '/home'
    }
]