import {Navigate} from "react-router-dom";
import CustomLayout from "@/layouts/components/Layout";
import {lazy} from "react";
import {load} from "@/router/module/effect.jsx";

const Login = lazy(() => import('@pages/login'));
const NotFound = lazy(() => import('@pages/not-found'));
const Dashboard = lazy(() => import('@pages/dashboard'));
const Access = lazy(() => import('@pages/access'));

// 404 、*路由
export const anyRoute = [
    {
        path: '*',
        element: load(NotFound)
    }
];

// 基础路由
export const constantRoutes = [
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
                path: '*',
                name: 'Access',
                hidden: true,
                element: load(Access),
            }
        ],
    },
    {
        path: '/login',
        element: load(Login),
        name: 'login',
    },
    ...anyRoute,
];
