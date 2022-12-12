import {ConfigProvider, Menu} from "antd";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {makeIcon} from "@utils/utils.js";
import useCommon from "@/common/useCommon.js";
import settings from "@/settings.js";

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

    const rootKeys = [];
    const tree = (routes, parentPath = null) => (
        routes.map(({path, meta, children, ...route}) => {
            if (route.hidden) {
                return null;
            }

            if (children?.length) {
                rootKeys.push(pathJoin(path));
                children = tree(children, pathJoin(path, pathJoin(parentPath))).filter(Boolean);
            }

            return {
                key: pathJoin(path, pathJoin(parentPath)),
                label: meta?.title,
                icon: makeIcon(meta?.icon),
                children: !children.length ? null : children,
                type: '',
            }
        })
    ).filter(Boolean)

    const menus = tree(routes);

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
            ? <Menu items={menus}
                    theme={theme}
                    onClick={handleMenuClick}
                    onOpenChange={handleOpenChange}
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    mode="inline"
                    inlineIndent={48}
            />
            : <ConfigProvider theme={menuTheme}>
                <Menu items={menus}
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