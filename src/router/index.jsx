import CustomLayout from "@/layouts/components/Layout";
import {lazy} from "react";
import {load} from "@/router/module/effect.jsx";

const Login = lazy(() => import('@pages/login'));
const NotFound = lazy(() => import('@pages/not-found'));
const Dashboard = lazy(() => import('@pages/dashboard'));
const Access = lazy(() => import('@pages/access'));
const Center = lazy(() => import('@pages/user/center'));
const Setting = lazy(() => import('@pages/user/setting'));

// 404 、*路由
const anyRoute = [
    {
        path: '*',
        hidden: true,
        name: 'NotFound',
        element: load(NotFound)
    }
];

// 基础路由
const constantRoutes = [
    {
        path: '/',
        name: 'Home',
        element: <CustomLayout/>,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                element: load(Dashboard),
                meta: {title: '仪表盘', icon: 'DashboardOutlined'},
            },
            {
                path: 'user',
                name: 'User',
                meta: {title: '个人页',icon: ''},
                children:[
                    {
                        path: 'center',
                        name: 'Center',
                        element: load(Center),
                        meta: {title: '个人中心',icon: ''},
                    },
                    {
                        path: 'setting',
                        name: 'Setting',
                        element: load(Setting),
                        meta: {title: '个人设置',icon: ''},
                    }
                ]
            },
            {
                path: 'authority',
                name: 'Authority',
                hidden: true,
                element: load(Access),
            },
            ...anyRoute,
        ],
    },
    {
        path: '/login',
        element: load(Login),
        name: 'login',
    },
    ...anyRoute,
];

export default constantRoutes;
