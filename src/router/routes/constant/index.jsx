import {lazyLoad}   from '@/router/providers/lazyLoad.jsx'
import CustomLayout from '@/layouts/index.jsx';

export default [
    {
        path: '/',
        name: 'Home',
        element: <CustomLayout/>,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                element: lazyLoad(() => import('@/pages/dashboard')),
                meta: {title: '仪表盘', icon: 'DashboardOutlined'},
            },
            {
                path: 'user',
                name: 'User',
                meta: {title: '我的资料', icon: 'SmileOutlined'},
                children: [
                    {
                        path: 'center',
                        name: 'Center',
                        element: lazyLoad(() => import('@/pages/user/center')),
                        meta: {title: '个人中心', icon: 'UserOutlined'},
                    },
                    {
                        path: 'setting',
                        name: 'Setting',
                        element: lazyLoad(() => import('@pages/user/setting')),
                        meta: {title: '个人设置', icon: 'SettingOutlined'},
                    }
                ]
            },
        ],
    },
    {
        path: '/login',
        meta: {title: '登录'},
        element: lazyLoad(() => import('@/pages/login')),
        name: 'login',
    },
];