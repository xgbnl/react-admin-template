import load from "./load";
import { lazy } from "react";

const Dashboard = lazy(() => import('@pages/dashboard'));
const Login = lazy(() => import('@pages/login'));
const NotFound = lazy(() => import('@pages/404'));

const defaultRoutes = [
    {
        path: '/',
        element: load(Dashboard),
        visible: true,
        meta: { title: '仪表盘', icon: 'DashboardOutlined' },
    },
    {
        path: '/login',
        element: load(Login),
        visible: false,
        meta: { title: '登录', icon: 'CompassOutlined' },
    },
];

const anyRoute = [
    {
        path: '/*',
        element: load(NotFound),
        visible: true,
        meta: { title: '404', icon: 'CompassOutlined' },
    },
];

export {
    defaultRoutes,
    anyRoute,
}