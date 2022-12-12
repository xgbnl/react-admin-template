import CustomLayout from "@/layouts/components/Layout";
import {lazy} from "react";
import {load} from "@/router/module/effect.jsx";
import useCommon from "@/common/useCommon.js";

const {suffix} = useCommon();

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
        meta: {title: '页面好像走丢了~'},
        element: load(NotFound)
    }
];

export const getNotFound = () => {
    const route = anyRoute[0];
    route.path = suffix(route.path);
    return route;
}

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
                meta: {title: '我的资料', icon: 'SmileOutlined'},
                children: [
                    {
                        path: 'center',
                        name: 'Center',
                        element: load(Center),
                        meta: {title: '个人中心', icon: 'UserOutlined'},
                    },
                    {
                        path: 'setting',
                        name: 'Setting',
                        element: load(Setting),
                        meta: {title: '个人设置', icon: 'SettingOutlined'},
                    }
                ]
            },
            {
                path: 'authority',
                name: 'Authority',
                hidden: true,
                meta: {title: '您没有权限访问~'},
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
