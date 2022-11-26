/**
 * 路径拼接
 * 方便左侧菜单与面包屑导航使用
 * @param path
 * @param parentPath
 * @returns {string|string}
 */
export const pathJoin = (path, parentPath = null) => {
    if (path.indexOf('/') !== 0) {
        path = `/${path}`
    }
    return parentPath ? parentPath + path : path;
}