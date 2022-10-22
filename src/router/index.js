export default [
    {
        path: '/home',
        component: () => import('@/page/Home'),
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/search',
        component: () => import('@/page/Search')
    },
    {
        path: '/',
        redirect: '/home'
    }
]