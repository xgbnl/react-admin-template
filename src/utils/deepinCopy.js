/**
 * 深拷贝
 * @param obj
 * @param wekmap
 * @returns {symbol|*[]|any}
 */
export function deepinCopy(obj,wekmap = new WeakMap()) {
    switch (obj) {
        case "symbol":
            return Symbol(obj.description);
        case "function":
        case !isObj(obj):
            return obj;
        case (wekmap.has(obj)):
            return wekmap.get(obj);
    }

    const newObj = Array.isArray(obj) ? []:{};
    wekmap.set(obj,newObj);
    for (const key in obj) {
        newObj[key] = deepinCopy(obj[key],wekmap);
    }

    const symbolKeys = Object.getOwnPropertySymbols(obj);

    for (const val of symbolKeys) {
        newObj[val] = deepinCopy(obj[val],wekmap);
    }

    return newObj;
}

const isObj = (obj) => {
    const str = typeof obj;
    return str === "object" || (str === "function" && obj !== null);
}