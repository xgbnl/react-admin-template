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
    'Access',
];

/**
 * 拷贝合并后的本地路由和异步路由表
 * @type {*}
 */
const allRoutes = cloneDeep(assignRoute(constantRoutes, asyncRoutes));

/**
 * 注册路由
 * @returns {React.ReactElement}
 */
export const useAppRoutes = () => {

    const {routes} = useAppSelector(selectUser);
    // 合并路由白名单与异步路由名单
    const permissionRoutes = [...allowList, ...routes];

    const resultRouter = permissionRoutes.length ? filterRouter({
        asyncRoutes: allRoutes,
        permissionRoutes,
    }) : constantRoutes;

    return useRoutes([...resultRouter]);
}

/**
 * 找到要渲染成左侧菜单的路由
 * @returns {*}
 */
export const findSideBarRoutes = () => {
    const currentIndex = findRouteIndex(allRoutes);

    return allRoutes[currentIndex].children;
}

/**
 * 合并路由
 * 在某个子路由后面插入权限路由表
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

/**
 * 通过路由路径查找索引值
 * @param routes
 * @param path
 * @returns {*}
 */
function findRouteIndex(routes, path = '/') {
    return routes.findIndex(route => route.path === path);
}

