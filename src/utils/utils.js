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