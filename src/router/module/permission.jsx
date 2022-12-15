import {useRoutes} from "react-router-dom";
import {cloneDeep} from "lodash/lang.js";
import asyncRoutes from "@/router/module/routes.jsx";
import constantRoutes from "@/router/index.jsx";
import {filterRouter} from "./effect.jsx";
import {useAppSelector} from "@/app/hooks.js";
import {selectUser} from "@/app/reducers/user/UserReducer.js";

/**
 * 路由白名单
 * @type {string[]}
 */
const allowList = [
    'Dashboard',
    'Authority',
    'NotFound',
    'User',
    'Center',
    'Setting'
];

const allRoutes = cloneDeep(assignRoute(constantRoutes, asyncRoutes));

/**
 * 注册路由
 * @returns {React.ReactElement}
 */
const allSyncRoutes = () => {
    const {routes} = useAppSelector(selectUser);
    const permissionRoutes = [...routes, ...allowList];

    return permissionRoutes.length ? filterRouter({
        asyncRoutes: allRoutes,
        allowList: permissionRoutes,
    }) : constantRoutes;
}

export const useAppRoutes = () => {
    return useRoutes([...allSyncRoutes()]);
}

/**
 * 根据路由权限渲染左侧菜单
 * @returns {*}
 */
export const useSideBarRoutes = () => {

    const allRoutes = allSyncRoutes();
    const rootIndex = findRouteIndex(allRoutes);

    return allRoutes[rootIndex].children.filter(Boolean);
}

/**
 * 合并路由
 * 在某个子路由后面插入权限路由表
 * @param constantRoutes 普通路由
 * @param asyncRoutes 权限路由
 * @returns {*}
 */
function assignRoute(constantRoutes, asyncRoutes) {
    const rootIndex = findRouteIndex(constantRoutes);
    const {children} = constantRoutes[rootIndex];

    const index = findRouteIndex(children, 'dashboard')
    children.splice(index + 1, 0, ...asyncRoutes);

    return constantRoutes;
}

/**
 * 通过路由路径查找索引值
 * @param routes
 * @param path
 * @returns {*}
 */
function findRouteIndex(routes, path = '/') {
    return routes.findIndex(route => route.path === path);
}

