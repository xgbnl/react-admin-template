import {Layout, Menu} from "antd";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {findSideBarRoutes} from "@/router";
import * as Icons from '@ant-design/icons';
import {createElement, useRef} from 'react';
import settings from "@/settings";
import Trigger from "@/layouts/components/Trigger/index.jsx";
import Logo from "@/layouts/components/Logo/index.jsx";
import './index.scss'

const {Sider} = Layout;

const getItem = (key, label, icon, children = null, type = '') => {
    return {
        key,
        label,
        children,
        icon,
        type,
    };
}

// 处理路由path为菜单key
const substr = (path, parentPath = null) => {
    if (path.indexOf('/') !== 0) {
        path = `/${path}`
    }
    return parentPath ? parentPath + path : path;
}

const getIcon = (icon) => {
    return createElement(Icons[icon ? icon : 'AntDesignOutlined']);
}

const SideBar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKeys, setSelectdKeys] = useState([]);

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    }

    const location = useLocation();
    const navigate = useNavigate();

    const {pathname} = location;

    useEffect(() => {
        // 默认打开项
        const openKeys = pathname.split('/').slice(0, 3).join('/');
        setOpenKeys([openKeys]);

        // 默认选择项
        const selectedKeys = pathname.split('/').slice(0).join('');
        setSelectdKeys([selectedKeys])
    }, [pathname]);

    const routes = findSideBarRoutes();

    const menus = routes.map(route => {
        return getItem(
            substr(route.path),
            route.meta?.title,
            getIcon(route.meta?.icon),
            (route.children && route.children.length)
                ? route.children.map((item) => {
                    return (item.hidden)
                        ? null
                        : getItem(substr(item.path, substr(route.path)), item.meta?.title, getIcon(item.meta?.icon));
                }).filter(Boolean)
                : null,
        );
    });

    const handleMenuClick = ({key}) => {
        navigate(key);
    }

    const handleOpenChange = (openKeys) => {
        setOpenKeys(openKeys);
    }

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            theme={settings.sideBarTheme}
            collapsedWidth={48}
            trigger={<Trigger collapsed={collapsed} theme={settings.sideBarTheme}/>}
        >
            <Logo logo={settings.logo} title={settings.title} collapsed={collapsed}/>
            <Menu items={menus}
                  theme={settings.sideBarTheme}
                  openKeys={openKeys}
                  selectedKeys={selectedKeys}
                  onClick={handleMenuClick}
                  onOpenChange={handleOpenChange}
                  mode="inline"
                  inlineIndent={48}
            />
        </Sider>
    );
}

export default SideBar;