const TOKEN = 'access_token'

const getToken = () => {
   return localStorage.getItem(TOKEN);
}

const setToken = (value) => {
    localStorage.setItem(TOKEN,value);
}

export {
    getToken,
    setToken,
}