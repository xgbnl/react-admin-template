import {Suspense} from "react";
import Loading from "@components/Loading/index.jsx";

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
const treeRouteFilter = ({routeHash, routes, lv = 0}) => {
    return routes.filter(router => {
        const {children = []} = router;
        router.children = treeRouteFilter({
            routeHash,
            routes: children,
            lv: lv + 1
        });

        return (lv === 0) || routeHash[router.name];
    });
}

// hash路由
export const filterRouter = ({routes, allowList}) => {
    const createRouteHash = () => {
        const hash = {};

        allowList.forEach(route => {
            hash[route] = true
        });

        return hash;
    };

    const routeHash = createRouteHash();

    return treeRouteFilter({routeHash, routes});
}