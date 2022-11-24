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

const filterMenus = (menus) => {

    return menus.map((menu, index) => {
        return menu.children && menu.children.length > 0
            ? filterMenus(menu.children)
            : menuTemplate({
                key: menu.children ? `sub${index}` : menu.id,
                label: menu.meta.title,
                icon: createElement(Icons[menu.meta.icon ?? DEFAULT]),
                children: menu.children ?? null,
            });
    });
}

export { filterMenus as transformerMenuData };