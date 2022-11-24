import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { findSideBarRoutes } from "@/route";
import * as Icons from '@ant-design/icons';
import { createElement } from 'react';

import Logo from "../Logo";

import settings from "@/settings";

const { Sider } = Layout;

const DEFAULT_ICON = 'AntDesignOutlined';

const getItem = (key, label, icon, children = [], type = 'group') => {
    return {
        key,
        label,
        children,
        icon,
        type,
    };
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

    const { pathname } = location;

    useEffect(() => {
        const openKeys = pathname.split('/').slice(0, 3).join('/');
        setOpenKeys([openKeys]);
        const selectedKeys = pathname.split('/').slice(0).join('/');
        setSelectdKeys([selectedKeys])

    }, [pathname]);

    const routes = findSideBarRoutes();

    const menuItems = routes.map(route => {
        return getItem(
            route.path,
            route.meta?.title,
            createElement(Icons[route.meta?.icon ?? DEFAULT_ICON]),
            route.children?.map((item) => {
                return (item.hidden)
                    ? null
                    : getItem(item.path, item.meta?.title, item.meta?.icon);
            }).filter(Boolean)
        );
    });

    const handleMenuClick = ({ key }) => {
        navigate(key);
    }

    const handleOpenChange = (openKeys) => {
        setOpenKeys(openKeys);
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
            <Logo collapsed={collapsed} logo={settings.logo} title={settings.title} />
            <Menu items={menuItems}
                theme={settings.siderBarTheme}
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                onClick={handleMenuClick}
                onOpenChange={handleOpenChange}
                 />
        </Sider>
    );
}

export default SideBar;