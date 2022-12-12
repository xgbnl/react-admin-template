/**
 * 登录
 */
export const loginReq = ({name, password}) => {
    // 请求接口

    return new Promise(resolve => resolve({response:{scope: '123456'}}))
}

/**
 * 注销
 */
export const logoutReq = () => {

}

/**
 * 获取用户信息
 */
export const getUser = () => {
    const re = {
        name: 'admin',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        routes: [
            'Permission',
            'Role',
            'Menu',
            'MenuCreate',
            'MenuDetail'
        ],
        buttons: [
            'permission.menu.create',
            'permission.menu.delete',
            'permission.menu.edit',
        ],
    };
    return new Promise(resolve => resolve({response: re}))
}