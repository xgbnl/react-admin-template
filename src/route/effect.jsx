import {lazy} from "react";
import {getToken} from "@utils/auth.js";
import {Navigate} from "react-router-dom";

/**
 * 懒加载组件
 * @param component
 * @returns {JSX.Element}
 */
export const lazyLoad = (component) => {
    const Component = lazy(() => import(component));
    return <Component/>;
}

/**
 * 鉴权
 * @param children
 * @returns {*|JSX.Element}
 * @constructor
 */
export const Appraisal = ({children}) => {
    return getToken() ? children : <Navigate to="/login"/>;
}

/**
 * 递归处理路由
 */
const treeRouteFilter = ({routeHash,permissionRoutes,lv=0}) =>{
    return permissionRoutes.filter(router => {
        const {children = []} = router;
        router.children = treeRouterFilter({routeHash,permissionRoutes: children,lv: lv+1});

        return (lv === 0) || routeHash[router.name];
    });
}

export const filterRouter = ({permissionRoutes,routes}) => {

    const routeHash = (() => {
        const hash = {};
        
        routes.forEach(route => {hash[route] = true});

        return hash;
    })();

    return treeRouteFilter({routeHash,permissionRoutes});
}