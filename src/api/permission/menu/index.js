import menuMock from "@/mock/menuMock.js";

/**
 * 获取菜单列表
 * @returns {Promise<unknown>}
 */
export function getMenus() {
    return new Promise(resolve => resolve({response: menuMock}))
}