import {useRoutes} from "react-router-dom";
import {cloneDeep} from "lodash/lang.js";
import {asyncRoutes} from "@/router/module/routes.jsx";
import {constantRoutes} from "@/router/index.jsx";
import {filterRouter} from "./effect.jsx";

// 路由权限表
const permissions = [
    'Permission',
    'Role',
    'Menu',
];

// 白名单
const allowList = [
    'Dashboard',
    'Access',
];

const allRoutes = cloneDeep(assignRoute(constantRoutes, asyncRoutes));

// 注册路由
export const useAppRoutes = () => {

    const permissionRoutes = [...allowList, ...permissions];

    const resultRouter = permissionRoutes.length ? filterRouter({
        asyncRoutes: allRoutes,
        permissionRoutes,
    }) : constantRoutes;

    return useRoutes([...resultRouter]);
}

// 找到要渲染成左侧菜单的路由
export const findSideBarRoutes = () => {
    const currentIndex = findRouteIndex(allRoutes);

    return allRoutes[currentIndex].children;
}

/**
 * 合并路由
 * 向普通路由表里插入权限路由表
 * @param constantRoutes 普通路由
 * @param asyncRoutes 权限路由
 * @returns {*}
 */
function assignRoute(constantRoutes, asyncRoutes) {
    const parentIndex = findRouteIndex(constantRoutes);

    const {children} = constantRoutes[parentIndex];

    const index = findRouteIndex(children, 'dashboard')

    children.splice(index + 1, 0, ...asyncRoutes);

    return constantRoutes;
}

// 获取指定路由下标
function findRouteIndex(routes, path = '/') {
    return routes.findIndex(route => route.path === path);
}

