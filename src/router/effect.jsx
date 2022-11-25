import {Suspense} from "react";
import Loading from "@components/loading/index.jsx";

/**
 * 动态加载
 * @param Component
 * @returns {JSX.Element}
 */
export const load = (Component) => {
    return (
        <Suspense fallback={<Loading/>}>
            <Component/>
        </Suspense>
    );
}

/**
 * 递归处理路由
 */
const treeRouteFilter = ({routeHash, permissionRoutes, lv = 0}) => {
    return permissionRoutes.filter(router => {
        const {children = []} = router;
        router.children = treeRouteFilter({
            routeHash,
            permissionRoutes: children,
            lv: lv + 1
        });
        return (lv === 0) || routeHash[router.name];
    });
}

// hash路由
export const filterRouter = ({permissionRoutes, routes}) => {

    const createRouteHash = (() => {
        const hash = {};

        routes.forEach(route => {
            hash[route] = true
        });

        return hash;
    });

    const routeHash = createRouteHash();

    return treeRouteFilter({routeHash, permissionRoutes});
}