import Icons from '@ant-design/icons';

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

        const Icon = Icons[menu.meta.icon ?? DEFAULT];

        return menu.children
            ? transformerMenuData(menu.children)
            : menuTemplate({
                key: menu.children ? `sub${menu.id}` : menu.id,
                label: menu.meta.title,
                icon: <Icon />,
                children: menu.children ?? null,
            });
    });
}

export { transformerMenuData };