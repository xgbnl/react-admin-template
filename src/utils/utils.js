/**
 * 生成下拉框子集
 * @param items
 */
export function createDropdownItems(items) {
    const result = [];

    items.forEach((item, index) => {

        item.type === 'divider'
            ? result.push(item)
            : result.push({
                key: `${index + 1}`,
                label: item,
            })
    });

    return result;
}

/**
 * 获取数组对象索引
 * @param haystack 数组
 * @param property 数组对象属性
 * @param needle 值
 * @returns {*}
 */
export function getArrayElementIndex(haystack, property, needle) {
    return haystack.indexOf(haystack.filter(item => item[property] === needle)[0])
}

/**
 * 将元素推到数组第一位
 * @param haystack
 * @param index
 * @returns {*}
 */
export function pushToShift(haystack, index) {
    haystack.unshift(haystack.splice(index, 1)[0]);
    return haystack;
}