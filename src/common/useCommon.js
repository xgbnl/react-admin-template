import {getNotFound} from "@/router/index.jsx";

const useCommon = () => {

    /**
     * 添加前辍
     * @param needle
     * @param suffix
     * @returns {string|*}
     */
    const suffix = (needle, suffix = '/') => needle.indexOf(suffix) !== 0 ? `${suffix}${needle}` : needle;
    /**
     * 路径拼接
     * 方便左侧菜单与面包屑导航使用
     * @param path
     * @param parentPath
     * @returns {string|string|null}
     */
    const pathJoin = (path, parentPath = null) => {

        if (!path) {
            return null;
        }

        if (!parentPath) {
            return suffix(path);
        }

        return suffix(parentPath) + suffix(path);
    }

    /**
     * 创建面包屑maps
     * 展示面包屑
     * 展示当前网页标题
     * @returns {{}}
     */
    const createMaps = (routes) => {
        const maps = {};
        const find = (routes, parentPath = null) => {
            for (const route of routes) {
                // 去除参数路由后面的参数,保证面包屑和菜单组件在调用时能正常通过pathname获取存储的子项 path/:id
                if (route.path.indexOf('/') !== -1) {
                    route.path = route.path.substring(0, route.path.indexOf('/'));
                }

                const key = pathJoin(route.path, parentPath);

                maps[key] = {label: route.meta?.title, path: key};

                if (route.children && route.children.length) {
                    maps[key].isParent = true;
                    find(route.children, key);
                }
            }
        }
        find(routes);
        return maps;
    }

    /**
     * 过滤当前路径，并返回当前路由对应的title和当前路由
     * 返回一个map对象
     * @param routes 传入的路由表
     * @param path 当前路由
     * @returns {*}
     */
    const filterPath = (routes, path) => {
        const menuMaps = createMaps(routes);
        if (empty(menuMaps[path])) {
            const splits = path.split('/');
            path = Number(splits.at(-1)) ? splits.slice(0, -1).join('/') : getNotFound().path;
            console.log(path)
        }

        return menuMaps[path];
    }

    /**
     * 检查给定数据是否为空
     * @param needle
     * @returns {boolean}
     */
    const empty = (needle) => {
        const values = ['', "", null, undefined, 0, -1];
        return values.includes(needle);
    }

    return {
        pathJoin,
        filterPath,
        empty,
        suffix,
    };
}

export default useCommon;
