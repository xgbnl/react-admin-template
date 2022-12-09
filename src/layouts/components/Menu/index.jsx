import {ConfigProvider, Menu} from "antd";
import {createElement, useEffect, useState} from "react";
import * as Icons from "@ant-design/icons";
import {useLocation, useNavigate} from "react-router-dom";
import useCommon from "@/common/useCommon.js";
import settings from "@/settings.js";

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

const CustomMenu = ({theme, routes, storeSetting}) => {
    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKeys, setSelectdKeys] = useState([]);

    const {pathJoin, createMaps} = useCommon();

    const menuMaps = createMaps(routes);

    const location = useLocation();
    const navigate = useNavigate();

    const {pathname} = location;
    useEffect(() => {
        const selectedKeys = pathname.split('/').slice(0).join('/')
        setSelectdKeys([selectedKeys])

        document.title = settings.title + '-' + menuMaps[selectedKeys]?.label;
    }, [pathname]);

    // 存储有子项的父级key
    const rootKeys = [];
    let children = null;
    const menuItems = routes.map(route => {
        if (route.hidden) {
            return null;
        }

        if (route.children && route.children.length) {
            rootKeys.push(pathJoin(route.path));
            children = route.children.map((item) => {
                return (!item.hidden)
                    ? getItem(pathJoin(item.path, pathJoin(route.path)), item.meta?.title, makeIcon(item.meta?.icon))
                    : null;
            }).filter(Boolean)
        }

        return getItem(pathJoin(route.path), route.meta?.title, makeIcon(route.meta?.icon), children);
    }).filter(Boolean);

    const handleMenuClick = ({key}) => {
        navigate(key);
    }

    // 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
    const handleOpenChange = (keys) => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);

        if (rootKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    const menuTheme = {
        components: {
            Menu: {
                radiusItem: 0,
                radiusSubMenuItem: 0,
                colorItemTextHover: storeSetting.sideBarTheme === 'light' ? '#000000e0' : '#ffffff',
                colorItemTextSelected: storeSetting.sideBarTheme === 'light' ? '#1890ff' : '#ffffffa6',
                colorItemBgSelected: storeSetting.sideBarTheme === 'light' ? '#bae0ff' : '#1677ff',
                colorActiveBarWidth: 3,
                itemMarginInline: 0,
                colorItemBgHover: 'transparent',
            },
        },
    }

    return (
        storeSetting.sideBarStyle === 'circle'
            ? <Menu items={menuItems}
                    theme={theme}
                    onClick={handleMenuClick}
                    onOpenChange={handleOpenChange}
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    mode="inline"
                    inlineIndent={48}
            />
            : <ConfigProvider theme={menuTheme}>
                <Menu items={menuItems}
                      theme={theme}
                      onClick={handleMenuClick}
                      onOpenChange={handleOpenChange}
                      openKeys={openKeys}
                      selectedKeys={selectedKeys}
                      mode="inline"
                      inlineIndent={48}
                />
            </ConfigProvider>
    );
}

export default CustomMenu;