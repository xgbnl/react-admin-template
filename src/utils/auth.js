const TOKEN = 'access_token'

const getToken = () => {
   return localStorage.getItem(TOKEN);
}

const setToken = (value) => {
    localStorage.setItem(TOKEN,value);
}

const removeToken = () => {
    localStorage.removeItem(TOKEN);
}

export {
    getToken,
    setToken,
    removeToken,
}