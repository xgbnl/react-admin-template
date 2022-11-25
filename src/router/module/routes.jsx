import {lazy} from "react";
import {load} from "@/router/module/effect.jsx";

const Role = lazy(() => import('@pages/permission/role'))
const Menu = lazy(() => import('@pages/permission/menu'))

export const asyncRoutes = [
    {
        path: 'permission',
        name: 'Permission',
        meta: {title: '权限管理', icon: 'LockOutlined'},
        children: [
            {
                path: 'role',
                name: 'Role',
                meta: {title: '角色管理', icon: 'UserAddOutlined'},
                element: load(Role),
            },
            {
                path: 'menu',
                name: 'Menu',
                meta: {title: '菜单管理', icon: 'MenuOutlined'},
                element: load(Menu),
            }
        ],
    }
];