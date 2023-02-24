import {useRoutes} from "react-router-dom";
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

const assignRoute = (constantRoutes, asyncRoutes) => {
    const rootIndex = findRouteIndex(constantRoutes);
    const {children} = constantRoutes[rootIndex];

    const index = findRouteIndex(children, 'dashboard')
    children.splice(index + 1, 0, ...asyncRoutes);
    return constantRoutes;
}

const allRoutes = assignRoute(constantRoutes, asyncRoutes);

/**
 * 注册路由
 * @returns {React.ReactElement}
 */
const allSyncRoutes = () => {
    const {routes} = useAppSelector(selectUser);
    return routes?.length ? filterRouter({
        routes: allRoutes,
        allowList: [...routes, ...allowList],
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
 * 通过路由路径查找索引值
 * @param routes
 * @param path
 * @returns {*}
 */
function findRouteIndex(routes, path = null) {
    return routes.findIndex(route => route.path === (path ?? '/'));
}

