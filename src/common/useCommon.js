const useCommon = () => {

    const suffix = (needle) => needle.indexOf('/') !== 0 ? `/${needle}` : needle;
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
                if (!route.hidden) {
                    maps[pathJoin(route.path, parentPath)] = {
                        label: route.meta?.title,
                    };
                }
                if (route.children && route.children.length) {
                    maps[pathJoin(route.path, parentPath)].isParent = true;
                    find(route.children, pathJoin(route.path, parentPath));
                }
            }
        }
        find(routes);
        return maps;
    }

    return {
        pathJoin,
        createMaps
    };
}

export default useCommon;
