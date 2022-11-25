import {Navigate} from "react-router-dom";
import CustomLayout from "@/layouts/components/Layout";
import {lazy} from "react";


const Login = lazy(() => import('@pages/login'))
const NotFound = lazy(() => import('@pages/not-found'))
const Dashboard = lazy(() => import('@pages/dashboard'))
const Role = lazy(() => import('@pages/permission/role'))
const Menu = lazy(() => import('@pages/permission/menu'))

// 基础路由
export const constantRoutes = [
    {
        path: '/',
        element: <Navigate to='/home'/>
    },
    {
        path: '/login',
        element: <Login/>,
        name: 'login',
    },
    {
        path: '/404',
        name: 'NotFound',
        element: <NotFound/>,
    },
    {
        path: '/',
        name: 'Home',
        element: <CustomLayout/>,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                element: <Dashboard/>,
                meta: {title: '仪表盘', icon: 'DashboardOutlined'},
            }
        ],
    }

];

// 404 、*路由
export const anyRoute = [
    {
        path: '*',
        element: <Navigate to="/404"/>
    }
];

// 权限路由
export const permissionRoutes = [
    {
        path: '/',
        name: 'Home',
        element: <CustomLayout/>,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                element: <Dashboard/>,
                meta: {title: '仪表盘', icon: 'DashboardOutlined'},
            },
            {
                path: 'permission',
                name: 'Permission',
                meta: {title: '权限管理', icon: 'LockOutlined'},
                children: [
                    {
                        path: 'role',
                        name: 'Role',
                        meta: {title: '角色管理', icon: 'UserAddOutlined'},
                        element: <Role/>,
                    },
                    {
                        path: 'menu',
                        name: 'Menu',
                        meta: {title: '菜单管理', icon: 'MenuOutlined'},
                        element: <Menu/>,
                    }
                ],
            }
        ],
    }
];
