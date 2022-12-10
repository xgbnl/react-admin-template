import * as Icons from '@ant-design/icons';
import {createElement} from "react";

/**
 * 生成图标
 * @param icon
 * @returns {React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>}
 */
export function makeIcon(icon) {
    const values = ['', "", null, undefined];
    return createElement(Icons[!values.includes(icon) ? icon : 'AntDesignOutlined'])
}

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