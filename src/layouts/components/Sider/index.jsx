import {Layout} from "antd";
import {useState} from "react";
import Trigger from "@/layouts/components/Trigger/index.jsx";
import Logo from "@/layouts/components/Logo/index.jsx";
import CustomMenu from "@/layouts/components/Menu/index.jsx";

import settings from "@/settings";
import './index.scss'

const {Sider} = Layout;

const SideBar = ({routes, storeSetting}) => {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    }

    return !storeSetting.showSideBar
        ? <></>
        : (<Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            theme={storeSetting.sideBarTheme}
            collapsedWidth={48}
            trigger={storeSetting.fixedSideBar ? null :
                <Trigger collapsed={collapsed} theme={storeSetting.sideBarTheme}/>}
        >
            <Logo storeSetting={storeSetting} logo={settings.logo} title={settings.title} collapsed={collapsed}/>
            <CustomMenu theme={storeSetting.sideBarTheme} routes={routes} storeSetting={storeSetting}/>
        </Sider>);
}

export default SideBar;