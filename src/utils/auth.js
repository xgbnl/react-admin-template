
const getToken = (key) => {
    localStorage.getItem(key);
}

const setToken = (key,value) => {
    localStorage.setItem(key,value);
}

export {
    getToken,
    setToken,
}