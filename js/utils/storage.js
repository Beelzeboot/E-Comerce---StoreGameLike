const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};


export { getLocalStorage, setLocalStorage };