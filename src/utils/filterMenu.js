import * as Icons from '@ant-design/icons';
import { createElement } from 'react';

const DEFAULT = 'AntDesignOutlined';

const menuTemplate = ({ key, label, children, icon }) => {
    return {
        key,
        label,
        children,
        icon,
    };
}

const transformerMenuData = (menus) => {

    return menus.map((menu, index) => {
        return menu.children
            ? transformerMenuData(menu.children)
            : menuTemplate({
                key: menu.children ? `sub${menu.id}` : menu.id,
                label: menu.meta.title,
                icon: createElement(Icons[menu.meta.icon ?? DEFAULT]),
                children: menu.children ?? null,
            });
    });
}

export { transformerMenuData };