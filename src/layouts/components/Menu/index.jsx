import {ConfigProvider, Menu} from "antd";
import {createElement, useEffect, useState} from "react";
import * as Icons from "@ant-design/icons";
import {pathJoin} from "@utils/utils.js";
import {useLocation, useNavigate} from "react-router-dom";
import {findSideBarRoutes} from "@/router/module/permission.jsx";

const getItem = (key, label, icon, children = null, type = '') => {
    return {
        key,
        label,
        children,
        icon,
        type,
    };
}

const makeIcon = (icon) => {
    return createElement(Icons[icon ? icon : 'AntDesignOutlined']);
}

const menuFactory = (routes) => {
    return routes.map(route => {
        return route.hidden
            ? null
            : getItem(
                pathJoin(route.path),
                route.meta?.title,
                makeIcon(route.meta?.icon),
                (route.children && route.children.length)
                    ? route.children.map((item) => {
                        return (item.hidden)
                            ? null
                            : getItem(pathJoin(item.path, pathJoin(route.path)), item.meta?.title, makeIcon(item.meta?.icon));
                    }).filter(Boolean)
                    : null,
            );
    }).filter(Boolean);
}

const menuTheme = {
    components: {
        Menu: {
            radiusItem: 0,
            radiusSubMenuItem: 0,
            colorItemTextHover: '#ffffff',
            colorItemTextSelected: '#ffffffa6',
            colorItemBgSelected: '#1677ff',
            colorActiveBarWidth: 3,
            itemMarginInline: 0,
            colorItemBgHover: 'transparent',
        },
    },
}

const CustomMenu = ({theme}) => {
    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKeys, setSelectdKeys] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    const {pathname} = location;

    const strWithStartOrEnd = (hacky, needle = '/') => {
        return (hacky.indexOf(needle) === 0) && (hacky.indexOf(needle, hacky.length) === 0);
    }

    useEffect(() => {
        // 默认打开项
        const openKeys = strWithStartOrEnd(pathname)
            ? '/dashboard'
            : pathname.split('/').slice(0, 3).join('/');
        setOpenKeys([openKeys]);
        // 默认选择项
        const selectedKeys = strWithStartOrEnd(pathname)
            ? '/dashboard'
            : pathname.split('/').slice(0).join('')
        setSelectdKeys([selectedKeys])

    }, [pathname]);

    const routes = findSideBarRoutes();
    const menuItems = menuFactory(routes);
    const handleMenuClick = ({key}) => {
        navigate(key);
    }

    const handleOpenChange = (openKeys) => {
        setOpenKeys(openKeys);
    }

    return (
        <ConfigProvider theme={menuTheme}>
            <Menu items={menuItems}
                  theme={theme}
                  defaultSelectedKeys={'/dashboard'}
                  onClick={handleMenuClick}
                  onOpenChange={handleOpenChange}
                  mode="inline"
                  inlineIndent={48}
            />
        </ConfigProvider>
    );
}

export default CustomMenu;