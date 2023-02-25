const TOKEN = 'access_token'

const getToken = () => {
    return localStorage.getItem(TOKEN);
}

const hasToken = () => {
    return getToken() !== null;
}

const setToken = (value) => {
    localStorage.setItem(TOKEN, value);
}

const removeToken = () => {
    localStorage.removeItem(TOKEN);
}

export {
    getToken,
    setToken,
    removeToken,
    hasToken,
}