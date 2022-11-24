import Loading from "@/components/loading";
import { Navigate } from "react-router-dom";
import { lazyLoad } from "./effect";

import CustomLayout from "@/layouts/components/Layout";


// 基础路由
export const constantRoutes = [
    {
        path: '/login',
        element: lazyLoad('@pages/login'),
        name: 'login',
    },
    {
        path: '/404',
        name: 'NotFound',
        element: lazyLoad('@pages/not-fount'),
    },
    {
        path: '/home',
        name: 'home',
        element: <CustomLayout/>,
        children:[
            {
                path: 'dashboard',
                name: 'Dashboard',
                element: lazyLoad('@pages/dashboard'),
                meta:{title: '仪表盘',icon: 'DashboardOutlined'},
            }
        ],
    }

];

// 404 、*路由
export const anyRoute = [
    {
        path: '*',
        element: <Navigate to="/404" />
    }
];

// 权限路由
export const permissionRoutes = [
    {
        path: '/home',
        name: 'Home',
        element: <CustomLayout/>,
        children:[
            {
                path: 'dashboard',
                name: 'Dashboard',
                element: lazyLoad('@pages/dashboard'),
                meta:{title: '仪表盘',icon: 'DashboardOutlined'},
            },
            {
                path: 'permission',
                name: 'Permission',
                meta:{title: '权限管理',icon:'LockOutlined'},
                children:[
                    {
                        path: 'role',
                        name: 'Role',
                        meta:{title: '角色管理',icon: 'UserAddOutlined'},
                        element: lazyLoad('@pages/permission/role'),
                    },
                    {
                        path: 'menu',
                        name: 'Menu',
                        meta:{title: '菜单管理',icon: 'UserAddOutlined'},
                        element: lazyLoad('@pages/permission/role'),
                    }
                ],
            }
        ],
    }
];
