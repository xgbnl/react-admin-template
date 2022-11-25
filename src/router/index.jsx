import { useRoutes } from "react-router-dom";
import {cloneDeep} from "lodash/lang.js";

import { permissionRoutes,anyRoute,constantRoutes } from "./routes";
import { filterRouter } from "./effect";

// 模拟routes，后期替换为redux

const routes = [
    'Dashboard',
    'Permission',
    'Role',
    'Menu',
];

const allRoutes = cloneDeep(permissionRoutes);

// 注册路由
export const AppRoutes = () => {

    const resultRouter = routes.length ? filterRouter({
        permissionRoutes:allRoutes,
        routes,
    }): constantRoutes;

    return useRoutes([...resultRouter,...anyRoute]);
}

// 找到要渲染成左侧菜单的路由
export const findSideBarRoutes = () => {
    const currentIndex = allRoutes.findIndex(route => route.path === '/');

    return allRoutes[currentIndex].children;
}

export default permissionRoutes;

