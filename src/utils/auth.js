const TOKEN = 'access_token'

const getToken = () => {
    return localStorage.getItem(TOKEN);
}

const setToken = (value) => {
    localStorage.setItem(TOKEN, value);
}

const removeToken = () => {
    localStorage.removeItem(TOKEN);
}

/**
 * 获取请求头
 * @returns {string}
 */
const authorization = () => {
    return 'Bearer ' + getToken();
}

export {
    getToken,
    setToken,
    removeToken,
    authorization,
}